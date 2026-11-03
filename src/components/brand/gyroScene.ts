import * as THREE from 'three';

/**
 * Krudex Global "Gyro" symbol: three orbit rings (chrome, gold, chrome) with
 * glowing satellites around a glass sphere and a pulsing core.
 *
 * Ported from the design reference in design/logo-gyro-reference/Gyro.dc.html.
 * Keep colors and proportions in sync with that file.
 */

export interface GyroOptions {
  /** Animate the rings. False renders one still frame (reduced motion, static export). */
  animate: boolean;
  /** Device pixel ratio cap for the canvas. */
  pixelRatio?: number;
}

export interface GyroHandle {
  /** Pause or resume the animation loop (e.g. when scrolled off-screen). */
  setActive(active: boolean): void;
  dispose(): void;
}

/** Pose used for the still frame and as the animation start. */
const START_T = 1.2;

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
  panel(8, 3, 0xffffff, 3.2, 0, 4.9, 0, Math.PI / 2, 0);
  panel(1, 6, 0xffffff, 5, -4.9, 0.5, 0.5, 0, Math.PI / 2);
  panel(0.6, 6, 0xffe9c4, 3, 4.9, 0.5, -1, 0, Math.PI / 2);
  panel(8, 0.7, 0xffffff, 2, 0, 0.6, 4.9, 0, 0);
  panel(5, 0.8, 0xd4b483, 3, 0, -0.8, -4.9, 0, 0);
  panel(10, 10, 0x2a2420, 1, 0, -4.9, 0, Math.PI / 2, 0);

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

export function createGyro(canvas: HTMLCanvasElement, { animate, pixelRatio = 2 }: GyroOptions): GyroHandle {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: !animate, // still frames can be read back with toDataURL
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, pixelRatio));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  const scene = new THREE.Scene();
  const envMap = studioEnvironment(renderer);
  scene.environment = envMap;

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
  camera.position.set(0, 0.5, 7);
  camera.lookAt(0, 0, 0);

  const group = new THREE.Group();
  scene.add(group);

  const chrome = new THREE.MeshStandardMaterial({ color: 0xf2f2f4, metalness: 1, roughness: 0.08 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xd4b483, metalness: 1, roughness: 0.14 });
  const glow = new THREE.MeshStandardMaterial({
    color: 0xffe3b0, emissive: 0xffc978, emissiveIntensity: 2.6, roughness: 0.4,
  });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, metalness: 0, roughness: 0.02, transmission: 1, thickness: 1.3, ior: 1.5,
    clearcoat: 1, clearcoatRoughness: 0.03, attenuationColor: new THREE.Color(0xf3e2c2),
    attenuationDistance: 2.5, iridescence: 0.6, iridescenceIOR: 1.3, envMapIntensity: 1.5,
  });

  const ring = (radius: number, tube: number, mat: THREE.Material) => {
    const m = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, 48, 240), mat);
    group.add(m);
    return m;
  };
  const r1 = ring(1.6, 0.055, chrome);
  const r2 = ring(1.34, 0.075, gold);
  const r3 = ring(1.1, 0.045, chrome);

  const satellite = (parent: THREE.Object3D, radius: number, angle: number, size: number) => {
    const s = new THREE.Mesh(new THREE.SphereGeometry(size, 24, 18), glow);
    s.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
    parent.add(s);
  };
  satellite(r1, 1.6, 0.6, 0.085);
  satellite(r2, 1.34, 2.5, 0.07);
  satellite(r3, 1.1, 4.2, 0.06);

  group.add(new THREE.Mesh(new THREE.SphereGeometry(0.72, 96, 64), glass));
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.25, 5), glow);
  group.add(core);
  group.add(new THREE.PointLight(0xffc978, 12, 6, 2));

  const pose = (t: number) => {
    r1.rotation.set(1.3, 0.25, t * 0.45);
    r2.rotation.set(0.5, -0.95, -t * 0.62);
    r3.rotation.set(-0.4, 1.15, t * 0.85);
    group.rotation.y = t * 0.1;
    core.scale.setScalar(1 + 0.06 * Math.sin(t * 2.4));
  };

  const resize = () => {
    const w = canvas.clientWidth || canvas.width;
    const h = canvas.clientHeight || canvas.height;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
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
  let elapsed = START_T;
  let last = 0;
  const tick = (now: number) => {
    if (!active) return;
    if (last) elapsed += (now - last) / 1000;
    last = now;
    pose(elapsed);
    renderer.render(scene, camera);
    raf = requestAnimationFrame(tick);
  };

  if (animate) {
    raf = requestAnimationFrame(tick);
  } else {
    pose(START_T);
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
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh) o.geometry.dispose();
      });
      [chrome, gold, glow, glass].forEach((m) => m.dispose());
      envMap.dispose();
      renderer.dispose();
    },
  };
}
