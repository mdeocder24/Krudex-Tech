import { CUBE } from './brand';

/**
 * The flat Cube mark as inline SVG. Server-safe, crisp at any size.
 *
 * - `tone="color"`: gold faces (default). `tone="mono"`: one color, for print
 *   or for sitting on a gold surface.
 * - `core={false}` drops the glowing core; the reference does this at favicon
 *   sizes, where the dot turns to noise.
 *
 * Height is set by `height` (CSS length); width follows the mark's aspect.
 */
export default function CubeGlyph({
  height = '1em',
  tone = 'color',
  core = true,
  monoColor = CUBE.ink,
  className = '',
}: {
  height?: number | string;
  tone?: 'color' | 'mono';
  core?: boolean;
  monoColor?: string;
  className?: string;
}) {
  const fill = (face: keyof typeof CUBE.color) => (tone === 'mono' ? monoColor : CUBE.color[face]);
  return (
    <svg
      viewBox={CUBE.viewBox}
      aria-hidden="true"
      focusable="false"
      data-brand-mark=""
      className={`block shrink-0 ${className}`}
      style={{ height, width: 'auto', aspectRatio: `${CUBE.aspect}` }}
    >
      <polygon points={CUBE.faces.top} fill={fill('top')} />
      <polygon points={CUBE.faces.left} fill={fill('left')} />
      <polygon points={CUBE.faces.right} fill={fill('right')} />
      {core && <circle cx={CUBE.core.cx} cy={CUBE.core.cy} r={CUBE.core.r} fill={fill('core')} />}
    </svg>
  );
}
