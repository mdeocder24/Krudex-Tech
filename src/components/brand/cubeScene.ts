import * as THREE from 'three';

/**
 * Krudex Global "Cube" symbol in 3D: six floating gold plates around a
 * glowing core. Seen from the isometric angle it reads as the flat mark;
 * every few seconds it turns a quarter step, the plates breathe apart, and
 * it settles back into the flat silhouette.
 *
 * Ported from the design reference in design/logo-cube-reference/Cube.dc.html.
 * Keep colors, proportions and timing in sync with that file.
 */

export interface CubeOptions {
  /** Animate the turn. False renders one still frame (reduced motion). */
  animate: boolean;
  /** Device pixel ratio cap for the canvas. */
  pixelRatio?: number;
}

export interface CubeHandle {
  /** Pause or resume the animation loop (e.g. when scrolled off-screen). */
  setActive(active: boolean): void;
  dispose(): void;
}

/** Seconds per quarter turn, and how long it rests flat before turning. */
const PERIOD = 3.8;
const HOLD = 2.4;

function studioEnvironment(renderer: THREE.WebGLRenderer): THREE.Texture {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = new THREE.Scene();
  env.add(
    new THREE.Mesh(
      new THREE.BoxGeometry(10, 10, 10),
      new THREE.MeshBasicMaterial({ color: 0x0e0d0c, side: THREE.BackSide })
    )
  );
  const panel = (
    w: number, h: number, hex: number, k: number,
    x: number, y: number, z: number, rx: number, ry: number
  ) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(hex).multiplyScalar(k), side: THREE.DoubleSide })
    );
    m.position.set(x, y, z);
    m.rotation.set(rx, ry, 0);
    env.add(m);
  };
  panel(8, 4, 0xffffff, 4, 0, 4.9, 0, Math.PI / 2, 0);
  panel(1.4, 6, 0xfff1d6, 3.5, -4.9, 0.5, 1, 0, Math.PI / 2);
  panel(0.5, 6, 0xffe9c4, 1.2, 4.9, 0.5, -1, 0, Math.PI / 2);
  panel(8, 0.7, 0xffffff, 1.5, 0, 0.6, 4.9, 0, 0);
  panel(10, 10, 0x2a2420, 0.8, 0, -4.9, 0, Math.PI / 2, 0);

  const texture = pmrem.fromScene(env, 0.03).texture;
  pmrem.dispose();
  env.traverse((o) => {
    if (o instanceof THREE.Mesh) {
      o.geometry.dispose();
      (o.material as THREE.Material).dispose();
    }
  });
  return texture;
}

/** easeInOutCubic: the turn starts and lands softly. */
const ease = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

export function createCube(canvas: HTMLCanvasElement, { animate, pixelRatio = 2 }: CubeOptions): CubeHandle {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: !animate, // still frames can be read back with toDataURL
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, pixelRatio));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  const scene = new THREE.Scene();
  const envMap = studioEnvironment(renderer);
  scene.environment = envMap;

  const hh = 2.05;
  const camera = new THREE.OrthographicCamera(-hh, hh, hh, -hh, 0.1, 50);
  camera.position.set(0, 0, 10);
  camera.lookAt(0, 0, 0);

  // Tilt so the cube's main diagonal points at the camera: the isometric view.
  const outer = new THREE.Group();
  outer.position.y = -0.12;
  outer.rotation.x = Math.atan(1 / Math.SQRT2);
  scene.add(outer);
  const inner = new THREE.Group();
  outer.add(inner);

  const gold = new THREE.MeshPhysicalMaterial({
    color: 0xd4b483, metalness: 1, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08,
  });
  const glow = new THREE.MeshStandardMaterial({
    color: 0xffe3b0, emissive: 0xffc978, emissiveIntensity: 2.6, roughness: 0.4,
  });

  const side = 1.46;
  const half = 0.8;
  const square = new THREE.Shape();
  square.moveTo(-side / 2, -side / 2);
  square.lineTo(side / 2, -side / 2);
  square.lineTo(side / 2, side / 2);
  square.lineTo(-side / 2, side / 2);
  square.lineTo(-side / 2, -side / 2);
  const plateGeo = new THREE.ExtrudeGeometry(square, {
    depth: 0.1, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 3,
  });
  plateGeo.center();

  // The top plate floats higher, opening the gap seen in the flat mark.
  const faces = [
    { n: new THREE.Vector3(0, 1, 0), base: 0.32 },
    { n: new THREE.Vector3(0, -1, 0), base: 0.1 },
    { n: new THREE.Vector3(1, 0, 0), base: 0.1 },
    { n: new THREE.Vector3(-1, 0, 0), base: 0.1 },
    { n: new THREE.Vector3(0, 0, 1), base: 0.1 },
    { n: new THREE.Vector3(0, 0, -1), base: 0.1 },
  ].map((f) => {
    const mesh = new THREE.Mesh(plateGeo, gold);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), f.n);
    inner.add(mesh);
    return { ...f, mesh };
  });
  const place = (extra: number) => {
    for (const f of faces) f.mesh.position.copy(f.n).multiplyScalar(half + f.base + extra);
  };
  place(0);

  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.3, 4), glow);
  inner.add(core);
  inner.add(new THREE.PointLight(0xffc978, 6, 4, 2));
  inner.rotation.y = Math.PI / 4;

  const pose = (t: number) => {
    const k = Math.floor(t / PERIOD);
    const u = t - k * PERIOD;
    const turn = u < HOLD ? 0 : ease((u - HOLD) / (PERIOD - HOLD));
    inner.rotation.y = Math.PI / 4 + (k + turn) * (Math.PI / 2);
    place(0.16 * Math.sin(Math.PI * turn));
    core.scale.setScalar(1 + 0.06 * Math.sin(t * 2.4));
  };

  const resize = () => {
    const w = canvas.clientWidth || canvas.width;
    const h = canvas.clientHeight || canvas.height;
    renderer.setSize(w, h, false);
    const aspect = w / h;
    camera.left = -hh * aspect;
    camera.right = hh * aspect;
    camera.updateProjectionMatrix();
  };
  resize();
  const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => {
    resize();
    if (!animate) renderer.render(scene, camera);
  }) : null;
  observer?.observe(canvas);

  let raf = 0;
  let active = true;
  let elapsed = 0;
  let last = 0;
  const tick = (now: number) => {
    if (!active) return;
    if (last) elapsed += Math.min((now - last) / 1000, 0.1); // no jump after a stalled frame
    last = now;
    pose(elapsed);
    renderer.render(scene, camera);
    raf = requestAnimationFrame(tick);
  };

  if (animate) {
    raf = requestAnimationFrame(tick);
  } else {
    pose(0);
    renderer.render(scene, camera);
  }

  return {
    setActive(next) {
      if (!animate || next === active) return;
      active = next;
      cancelAnimationFrame(raf);
      if (active) {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    },
    dispose() {
      active = false;
      cancelAnimationFrame(raf);
      observer?.disconnect();
      plateGeo.dispose();
      core.geometry.dispose();
      [gold, glow].forEach((m) => m.dispose());
      envMap.dispose();
      renderer.dispose();
    },
  };
}
