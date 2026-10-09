import { useMemo, useState } from "react";
import { resolveBoxSize, type BoxSize, type BoxStatus } from "../components/types/BoxProps";

export function useLoadBoxProps(
  size: BoxSize,
  initialStatus: BoxStatus
) {
  const sizeValue = useMemo(() => resolveBoxSize(size), [size]);

  const [boxStatus, setBoxStatus] = useState(initialStatus);


  return {
    sizeValue,
    boxStatus,
    setBoxStatus
  };
}