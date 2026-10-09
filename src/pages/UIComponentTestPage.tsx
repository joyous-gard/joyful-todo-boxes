import "../App.css";
import JoyfulCheckBoxTestView from "./component-test-views/JoyfulCheckBoxTestView";

export default function UIComponentTestPage() {
  return (
    <>
      <div className="m-10 content-center items-start space-y-5">
        <div className="mb-5 flex justify-start">
          <h1 className="text-purple-600">Components</h1>
        </div>
        {/* <JoyfulTaskTestView /> */}
        <JoyfulCheckBoxTestView />
        {/* <JoyfulProgBoxTestView /> */}
      </div>
    </>
  );
}
