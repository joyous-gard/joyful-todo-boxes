import { useState } from "react";
import { JoyfulProgBox } from "../../../";
import {
  BoxShapes,
  BoxSizes,
  type BoxShapeName,
  type BoxStatus,
} from "../../../dist/components/types/BoxProps";
import { demoColors } from "../../utils/colors";
import {
  TickStyles,
  type TickStyleName,
} from "../../../dist/components/types/ProgBoxProps";

export default function JoyfulProgBoxTestView() {
  const [box1, setBox1] = useState("to-do");

  function box1Ticked(value: BoxStatus) {
    setBox1(value);
  }

  return (
    <>
      <div className="test-view-container">
        <div className="flex w-full justify-start">
          <h2 className="text-left font-bold">ProgBoxes:</h2>
        </div>

        <div className="flex w-full flex-col gap-6">
          {/* Default */}
          <div className="flex flex-wrap items-start gap-4">
            <p className="min-w-22.5">Default:</p>
            <div className="flex w-24 flex-col place-items-center gap-2 pt-1">
              <JoyfulProgBox onTicked={box1Ticked} />
              <p>{box1}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-start gap-4">
            {/* Size */}
            <p className="min-w-22.5">Sizes:</p>
            <div className="flex flex-wrap items-start gap-2.25 pt-2">
              {Object.keys(BoxSizes).map((sizeName) => (
                <>
                  <div className="place-items-center">
                    <JoyfulProgBox
                      key={sizeName}
                      size={sizeName as keyof typeof BoxSizes}
                    />
                    <p>{sizeName}</p>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* Border color row */}
          <div className="flex flex-wrap items-center gap-4">
            <p className="min-w-27.5">Border Color:</p>
            <div className="flex flex-wrap gap-3">
              {demoColors.map((color) => (
                <JoyfulProgBox key={color} borderColor={color} />
              ))}
            </div>
          </div>

          {/* Fill color row */}
          <div className="flex flex-wrap items-center gap-4">
            <p className="min-w-27.5">Fill Color:</p>
            <div className="flex flex-wrap gap-3">
              {demoColors.map((color) => (
                <JoyfulProgBox key={color} fillColor={color} />
              ))}
            </div>
          </div>

          {/* Tick color row */}
          <div className="flex flex-wrap items-center gap-4">
            <p className="min-w-27.5">Tick Color:</p>
            <div className="flex flex-wrap gap-3">
              {demoColors.map((color) => (
                <JoyfulProgBox
                  key={color}
                  tickColor={color}
                  status="in-progress"
                />
              ))}
            </div>
          </div>

          {/* Box shape row */}
          <div className="flex flex-wrap items-center gap-4">
            <p className="min-w-27.5">Box Shape:</p>
            <div className="flex flex-wrap gap-3">
              {(Object.keys(BoxShapes).slice(0, 16) as BoxShapeName[]).map(
                (shapeName) => (
                  <JoyfulProgBox
                    key={shapeName}
                    shape={shapeName}
                    status="done"
                  />
                ),
              )}
            </div>
          </div>

          {/* Tick style row */}
          <div className="flex flex-wrap items-center gap-4">
            <p className="min-w-27.5">Tick Style:</p>
            <div className="flex flex-wrap gap-3">
              {(Object.keys(TickStyles) as TickStyleName[]).map((styleName) => (
                <div className="place-items-center">
                  <div className="flex gap-2">
                    <JoyfulProgBox
                      key={`${styleName}_ip`}
                      tickStyle={styleName}
                      status="in-progress"
                    />
                    <JoyfulProgBox
                      key={`${styleName}_d`}
                      tickStyle={styleName}
                      status="done"
                    />
                  </div>
                  <p>{styleName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
