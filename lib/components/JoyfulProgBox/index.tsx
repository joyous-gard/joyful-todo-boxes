import { type BoxStatus, BoxShapes } from "../types/BoxProps";
import { useLoadBoxProps } from "../../hooks/useLoadBoxProps";
import { TickStyles, type ProgBoxProps } from "../types/ProgBoxProps";
import { useId } from "react";

export default function JoyfulProgBox({
  size = 24,
  status = "to-do",
  shape = "roundedSquare",
  borderColor,
  fillColor = "transparent",
  tickColor,
  tickStyle = "gernand",
  onTicked = () => {},
}: ProgBoxProps) {
  const { sizeValue, boxStatus, setBoxStatus } = useLoadBoxProps(size, status);

  const getNextStatus = function (currentStatus: BoxStatus) {
    switch (currentStatus) {
      case "to-do":
        return "in-progress";
      case "in-progress":
        return "done";
      default:
        return "to-do";
    }
  };

  const resolvedBorderColor =
    borderColor ??
    (getComputedStyle(document.documentElement)
      .getPropertyValue("--color-base-content")
      .trim() ||
      "currentColor");

  const resolvedTickColor =
    tickColor ??
    (getComputedStyle(document.documentElement)
      .getPropertyValue("--color-base-content")
      .trim() ||
      "currentColor");

  const desiredStrokeWidth = Math.min(
    2.5,
    Math.max(1.25, 1.5 * Math.pow(sizeValue / 24, 0.2)),
  );

  const strokeWidth = desiredStrokeWidth * (24 / sizeValue);

  const TickParts = TickStyles[tickStyle];

  const TickInProgress = TickParts.tickInProgress;
  const TickDone = TickParts.tickDone;

  const clipId = `boxClip-${useId().replace(/:/g, "")}`;

  return (
    <>
      <div
        className="relative grid place-items-center"
        style={{ width: sizeValue, height: sizeValue }}
        onClick={() => {
          setBoxStatus(getNextStatus(boxStatus));
          onTicked(getNextStatus(boxStatus));
        }}
      >
        <svg
          className="absolute inset-0 z-0"
          width={sizeValue}
          height={sizeValue}
          viewBox="0 0 24 24"
          stroke={resolvedBorderColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        >
          <defs>
            <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
              {BoxShapes[shape]}
            </clipPath>
          </defs>

          <g fill={fillColor} stroke="none">
            {BoxShapes[shape]}
          </g>

          {(boxStatus === "in-progress" || boxStatus === "done") && (
            <TickInProgress
              fill={resolvedTickColor}
              stroke={resolvedTickColor}
              clipPath={`url(#${clipId})`}
            />
          )}
          {boxStatus === "done" && (
            <>
              <TickDone
                fill={resolvedTickColor}
                stroke={resolvedTickColor}
                clipPath={`url(#${clipId})`}
              />
            </>
          )}
          <g
            fill="none"
            stroke={resolvedBorderColor}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          >
            {BoxShapes[shape]}
          </g>
        </svg>
      </div>
    </>
  );
}
