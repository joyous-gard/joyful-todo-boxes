import { useState } from "react";
import { JoyfulCheckBox } from "../../../";
import {
  BoxSizes,
  BoxShapes,
  type BoxStatus,
  type BoxShapeName,
} from "../../../dist/components/types/BoxProps";
import {
  TickIcons,
  type TickIconName,
} from "../../../dist/components/types/CheckBoxProps";
import { demoColors } from "../../utils/colors";

export default function JoyfulCheckBoxTestView() {
  const [box1, setBox1] = useState("to-do");

  function box1Ticked(value: BoxStatus) {
    setBox1(value);
  }

  return (
    <>
      <div className="test-view-container">
        <div className="flex w-full justify-start">
          <h2 className="text-left font-bold">CheckBoxes:</h2>
        </div>

        <div className="flex w-full flex-col gap-6">
          {/* Default */}
          <div className="flex flex-wrap items-start gap-4">
            <p className="min-w-22.5">Default:</p>
            <div className="flex flex-col items-center gap-2 pt-1">
              <JoyfulCheckBox onTicked={box1Ticked} />
              <p>{box1}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-start gap-4">
            {/* Size */}
            <p className="min-w-22.5">Sizes:</p>
            <div className="flex flex-wrap items-start gap-2 pt-2">
              {Object.keys(BoxSizes).map((sizeName) => (
                <>
                  <div className="place-items-center">
                    <JoyfulCheckBox
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
                <JoyfulCheckBox key={color} borderColor={color} />
              ))}
            </div>
          </div>

          {/* Fill color row */}
          <div className="flex flex-wrap items-center gap-4">
            <p className="min-w-27.5">Fill Color:</p>
            <div className="flex flex-wrap gap-3">
              {demoColors.map((color) => (
                <JoyfulCheckBox key={color} fillColor={color} status="done" />
              ))}
            </div>
          </div>

          {/* Tick color row */}
          <div className="flex flex-wrap items-center gap-4">
            <p className="min-w-27.5">Tick Color:</p>
            <div className="flex flex-wrap gap-3">
              {demoColors.map((color) => (
                <JoyfulCheckBox key={color} tickColor={color} status="done" />
              ))}
            </div>
          </div>

          {/* Box shape row */}
          <div className="flex flex-wrap items-center gap-4">
            <p className="min-w-27.5">Box Shape:</p>
            <div className="flex flex-wrap gap-3">
              {(Object.keys(BoxShapes).slice(0, 16) as BoxShapeName[]).map(
                (shapeName) => (
                  <JoyfulCheckBox
                    key={shapeName}
                    shape={shapeName}
                    status="done"
                  />
                ),
              )}
            </div>
          </div>

          {/* Tick icon row */}
          <div className="flex flex-wrap items-center gap-4">
            <p className="min-w-27.5">Tick Icon:</p>
            <div className="flex flex-wrap gap-3">
              {(Object.keys(TickIcons).slice(0, 16) as TickIconName[]).map(
                (iconName) => (
                  <JoyfulCheckBox
                    key={iconName}
                    tickIcon={iconName}
                    status="done"
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
