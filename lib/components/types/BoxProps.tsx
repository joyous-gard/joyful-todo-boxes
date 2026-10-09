export type BoxSizeName = keyof typeof BoxSizes;
export type BoxShapeName = keyof typeof BoxShapes;
export type BoxShape = BoxShapeName;
export type BoxSize = number | BoxSizeName;
export type BoxStatus = (typeof BoxStatuses)[number];

export type BoxProps = {
  size?: BoxSize;
  status?: BoxStatus;
  shape?: BoxShape;
  borderColor?: string;
  fillColor?: string;
  tickColor?: string;
  onTicked?: (ticked: BoxStatus) => void;
};

export const BoxShapes = {
  roundedSquare: <rect x="2" y="2" width="20" height="20" rx="4" />,

  circle: <circle cx="12" cy="12" r="10" />,

  triangle: <polygon points="12,2 22,22 2,22" />,

  pentagon: <polygon points="12,2 21.5,8.9 17.9,20 6.1,20 2.5,8.9" />,

  hexagon: <polygon points="6,2 18,2 22,12 18,22 6,22 2,12" />,

  heptagon: (
    <polygon points="12,2 21.4,6.6 23.2,16.7 16.7,22 7.3,22 0.8,16.7 2.6,6.6" />
  ),

  octagon: <polygon points="7,2 17,2 22,7 22,17 17,22 7,22 2,17 2,7" />,

  nonagon: (
    <polygon points="12,2 19.1,4.6 22.7,11.2 21.5,18.7 15.8,22 8.2,22 2.5,18.7 1.3,11.2 4.9,4.6" />
  ),

  star: (
    <polygon points="12,2 14.9,8.3 21.8,9 16.7,13.6 18.1,20.5 12,17 5.9,20.5 7.3,13.6 2.2,9 9.1,8.3" />
  ),

  heart: (
    <path d="M12 21.5 3.4 13.2C-1.5 8.5 1.1 2 6.1 2c2.3 0 4.5 1.1 5.9 3 1.4-1.9 3.6-3 5.9-3 5 0 7.6 6.5 2.7 11.2L12 21.5Z" />
  ),

  diamond: <polygon points="12,2 22,12 12,22 2,12" />,

  oval: <ellipse cx="12" cy="12" rx="10" ry="7.5" />,

  shield: (
    <path d="M12 2 21 5.2v6.1c0 5.1-3.1 8.8-9 10.7-5.9-1.9-9-5.6-9-10.7V5.2L12 2Z" />
  ),

  teardrop: (
    <path d="M12 2C12 2 4 10.1 4 15.3A8 8 0 0 0 20 15.3C20 10.1 12 2 12 2Z" />
  ),

  leaf: (
    <path d="M21.5 2.5C12.2 2.8 5.5 5.7 3.2 11.1c-1.8 4.2.9 7.8 5.1 7.2 5.8-.8 10.4-5.8 13.2-15.8Z" />
  ),
  cloud: (
    <path d="M7 19h10.5a4.5 4.5 0 0 0 .7-8.95A6.5 6.5 0 0 0 5.4 8.8 4.5 4.5 0 0 0 7 19Z" />
  ),
} as const;

export const BoxShapeSettings = {
  roundedSquare: { tickScale: 0.75, tickOffsetY: 0 },
  circle: { tickScale: 0.75, tickOffsetY: 0 },
  triangle: { tickScale: 0.65, tickOffsetY: 2 },
  pentagon: { tickScale: 0.65, tickOffsetY: -1 },
  hexagon: { tickScale: 0.55, tickOffsetY: 0 },
  heptagon: { tickScale: 0.7, tickOffsetY: 0 },
  octagon: { tickScale: 0.7, tickOffsetY: 0 },
  nonagon: { tickScale: 0.7, tickOffsetY: 0 },
  star: { tickScale: 0.55, tickOffsetY: -1 },
  heart: { tickScale: 0.55, tickOffsetY: -1 },
  diamond: { tickScale: 0.62, tickOffsetY: 0 },
  oval: { tickScale: 0.55, tickOffsetY: 0 },
  shield: { tickScale: 0.65, tickOffsetY: -1 },
  teardrop: { tickScale: 0.55, tickOffsetY: 1 },
  leaf: { tickScale: 0.55, tickOffsetY: -2 },
  cloud: { tickScale: 0.55, tickOffsetY: -1 },
} as const;

export const BoxSizes = {
  tiny: 12,
  small: 16,
  default: 24,
  medium: 32,
  large: 48,
  larger: 64,
  extraLarge: 80,
  huge: 96,
  gigantic: 112,
} as const;

export function resolveBoxSize(size: BoxSize = "default"): number {
  return typeof size === "number" ? size : (BoxSizes[size] ?? BoxSizes.default);
}

export const BoxStatuses = ["to-do", "in-progress", "done"] as const;
