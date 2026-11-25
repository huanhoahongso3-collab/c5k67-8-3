// Cute kawaii SVG icons (no external assets)
type P = { size?: number; className?: string; color?: string; style?: React.CSSProperties };

const Face = ({ x = 50, y = 50, s = 1 }: { x?: number; y?: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s}) translate(-50 -50)`}>
    <circle cx="41" cy="48" r="3.2" fill="#5b2342" />
    <circle cx="59" cy="48" r="3.2" fill="#5b2342" />
    <circle cx="42" cy="47" r="1.1" fill="#fff" />
    <circle cx="60" cy="47" r="1.1" fill="#fff" />
    <ellipse cx="34" cy="55" rx="5" ry="3" fill="#ff9ebb" opacity=".75" />
    <ellipse cx="66" cy="55" rx="5" ry="3" fill="#ff9ebb" opacity=".75" />
    <path d="M45 54 Q50 60 55 54" stroke="#5b2342" strokeWidth="2" fill="none" strokeLinecap="round" />
  </g>
);

export function KawaiiFlower({ size = 64, color = "#ff8fb1", className, style }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} style={style} aria-hidden>
      {[0, 60, 120, 180, 240, 300].map((r) => (
        <circle key={r} cx="50" cy="24" r="17" fill={color} stroke="#fff" strokeWidth="3" transform={`rotate(${r} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="24" fill="#ffe27a" stroke="#fff" strokeWidth="3" />
      <Face />
    </svg>
  );
}

export function Heart({ size = 32, color = "#ff5c8d", className, style }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} style={style} aria-hidden>
      <path d="M50 88 C10 58 6 28 28 18 C40 13 49 22 50 30 C51 22 60 13 72 18 C94 28 90 58 50 88Z" fill={color} stroke="#fff" strokeWidth="4" strokeLinejoin="round" />
      <ellipse cx="32" cy="32" rx="7" ry="4" fill="#fff" opacity=".55" transform="rotate(-30 32 32)" />
    </svg>
  );
}

export function Star({ size = 28, color = "#ffd166", className, style }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} style={style} aria-hidden>
      <path d="M50 8 L61 36 L92 38 L68 57 L76 88 L50 71 L24 88 L32 57 L8 38 L39 36Z" fill={color} stroke="#fff" strokeWidth="5" strokeLinejoin="round" />
    </svg>
  );
}

export function Sparkle({ size = 20, color = "#fff", className, style }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} style={style} aria-hidden>
      <path d="M50 0 C54 34 66 46 100 50 C66 54 54 66 50 100 C46 66 34 54 0 50 C34 46 46 34 50 0Z" fill={color} />
    </svg>
  );
}

export function Bow({ size = 56, color = "#ff7aa8", className, style }: P) {
  return (
    <svg viewBox="0 0 100 70" width={size} height={size * 0.7} className={className} style={style} aria-hidden>
      <path d="M50 35 L8 8 Q0 35 8 62Z" fill={color} stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
      <path d="M50 35 L92 8 Q100 35 92 62Z" fill={color} stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="50" cy="35" r="11" fill={color} stroke="#fff" strokeWidth="3" />
    </svg>
  );
}

export function Cloud({ size = 80, className, style }: P) {
  return (
    <svg viewBox="0 0 120 70" width={size} height={size * 0.58} className={className} style={style} aria-hidden>
      <path d="M25 62 A20 20 0 0 1 28 24 A26 26 0 0 1 78 20 A22 22 0 0 1 98 62Z" fill="#fff" opacity=".9" />
      <circle cx="46" cy="44" r="2.6" fill="#5b2342" />
      <circle cx="68" cy="44" r="2.6" fill="#5b2342" />
      <ellipse cx="38" cy="50" rx="5" ry="3" fill="#ff9ebb" opacity=".7" />
      <ellipse cx="76" cy="50" rx="5" ry="3" fill="#ff9ebb" opacity=".7" />
      <path d="M52 49 Q57 55 62 49" stroke="#5b2342" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Bunny({ size = 90, className, style }: P) {
  return (
    <svg viewBox="0 0 100 110" width={size} height={size * 1.1} className={className} style={style} aria-hidden>
      <ellipse cx="34" cy="26" rx="10" ry="24" fill="#fff" stroke="#ffc2d6" strokeWidth="3" />
      <ellipse cx="66" cy="26" rx="10" ry="24" fill="#fff" stroke="#ffc2d6" strokeWidth="3" />
      <ellipse cx="34" cy="28" rx="5" ry="15" fill="#ffc2d6" />
      <ellipse cx="66" cy="28" rx="5" ry="15" fill="#ffc2d6" />
      <circle cx="50" cy="68" r="34" fill="#fff" stroke="#ffc2d6" strokeWidth="3" />
      <Face x={50} y={68} s={1} />
      <path d="M47 62 L53 62 L50 66Z" fill="#ff7aa8" />
    </svg>
  );
}

export function Cat({ size = 90, className, style }: P) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} style={style} aria-hidden>
      <path d="M16 46 L20 10 L44 28Z" fill="#ffd9e8" stroke="#ffb3cf" strokeWidth="3" strokeLinejoin="round" />
      <path d="M84 46 L80 10 L56 28Z" fill="#ffd9e8" stroke="#ffb3cf" strokeWidth="3" strokeLinejoin="round" />
      <ellipse cx="50" cy="58" rx="38" ry="32" fill="#fff0f6" stroke="#ffb3cf" strokeWidth="3" />
      <Face x={50} y={58} s={1} />
      <path d="M12 56 L2 54 M12 62 L2 64 M88 56 L98 54 M88 62 L98 64" stroke="#ffb3cf" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
