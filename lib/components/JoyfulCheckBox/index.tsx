/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLoadBoxProps } from "../../hooks/useLoadBoxProps";
import {
  BoxShapes,
  BoxShapeSettings,
  BoxStatuses,
  type BoxStatus,
} from "../types/BoxProps";
import { TickIcons, type CheckBoxProps } from "../types/CheckBoxProps";

export default function JoyfulCheckBox({
  size = 24,
  status = BoxStatuses[0],
  shape = "roundedSquare",
  borderColor,
  fillColor = "#FFFFFF00",
  tickColor,
  tickIcon = "check",
  onTicked = (_value: BoxStatus) => {},
}: CheckBoxProps) {
  const { sizeValue, boxStatus, setBoxStatus } = useLoadBoxProps(size, status);

  const nextStatus = boxStatus === "to-do" ? "done" : "to-do";

  const resolvedBorderColor =
    borderColor ??
    (getComputedStyle(document.documentElement)
      .getPropertyValue("--color-base-content")
      .trim() ||
      "currentColor");
  const resolvedTickColor =
    tickColor ?? "var(--color-base-content, currentColor)";

  const desiredStrokeWidth = Math.min(
    2.5,
    Math.max(1.25, 1.5 * Math.pow(sizeValue / 24, 0.2)),
  );
  const strokeWidth = desiredStrokeWidth * (24 / sizeValue);

  // const iconSize = Math.max(1, (sizeValue - strokeWidth * 2) * 0.75);

  const { tickScale, tickOffsetY } = BoxShapeSettings[shape] ?? {
    scale: 0.75,
    y: 0,
  };

  const iconSize = Math.max(
    1,
    (sizeValue - desiredStrokeWidth * 2) * tickScale,
  );

  const TickIcon = TickIcons[tickIcon];

  return (
    <>
      <div
        className="relative grid place-items-center"
        style={{ width: sizeValue, height: sizeValue }}
        onClick={() => {
          setBoxStatus(nextStatus);
          onTicked(nextStatus);
        }}
      >
        <svg
          className="absolute inset-0"
          width={sizeValue}
          height={sizeValue}
          viewBox="0 0 24 24"
          fill={boxStatus === "done" ? fillColor : "transparent"}
          stroke={resolvedBorderColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        >
          {BoxShapes[shape]}
        </svg>
        <TickIcon
          className="checkbox-check relative z-10"
          color={resolvedTickColor}
          size={iconSize}
          style={{ transform: `translateY(${tickOffsetY}px)` }}
          visibility={boxStatus === "done" ? "visible" : "hidden"}
        />
      </div>
    </>
  );
}
