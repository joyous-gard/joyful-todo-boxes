# joyful-todo-boxes

`joyful-todo-boxes` is a React component library for customizable, shape-based todo checkboxes.

## Installation

```bash
npm install joyful-todo-boxes
```

The package exports `JoyfulCheckBox`, `JoyfulProgBox`, and their TypeScript declarations from the package entry point.

## Usage

```tsx
import { JoyfulCheckBox } from "joyful-todo-boxes";

function TaskCheckbox() {
  return (
    <JoyfulCheckBox
      status="to-do"
      shape="roundedSquare"
      onTicked={(status) => console.log("Task status:", status)}
    />
  );
}
```

The component keeps its own status after it mounts. The `status` prop sets the initial status; clicking toggles between `"to-do"` and `"done"` and calls `onTicked` with the new status. `"in-progress"` is also available as an initial status.

### JoyfulProgBox

`JoyfulProgBox` cycles through the three task statuses when clicked: `"to-do"` → `"in-progress"` → `"done"` → `"to-do"`. The `status` prop sets its initial status, and `onTicked` is called with the next status after each click.

```tsx
import { JoyfulProgBox } from "joyful-todo-boxes";

function TaskProgress() {
  return (
    <JoyfulProgBox
      status="to-do"
      shape="roundedSquare"
      tickStyle="gernand"
      onTicked={(status) => console.log("Task status:", status)}
    />
  );
}
```

`JoyfulProgBox` supports the same `size`, `status`, `shape`, `borderColor`, `fillColor`, `tickColor`, and `onTicked` props described below, with the same defaults. Its additional `tickStyle` prop selects how progress and completion are drawn:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `tickStyle` | `"gernand"` or `"strikesAndSpares"` | `"gernand"` | Visual style for the progress and done marks. |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `number` or a size name | `24` | Width and height in pixels. Named sizes: `tiny`, `small`, `default`, `medium`, `large`, `larger`, `extraLarge`, `huge`, `gigantic`. |
| `status` | `"to-do"`, `"in-progress"`, or `"done"` | `"to-do"` | Initial status. The tick and fill are shown for `"done"`. |
| `shape` | Shape name | `"roundedSquare"` | Outline shape: `roundedSquare`, `circle`, `triangle`, `pentagon`, `hexagon`, `heptagon`, `octagon`, `nonagon`, `star`, `heart`, `diamond`, `oval`, `shield`, `teardrop`, `leaf`, or `cloud`. |
| `borderColor` | `string` | Theme text color, falling back to `currentColor` | CSS color for the outline. |
| `fillColor` | `string` | Transparent | CSS color for the shape when its status is `"done"`. |
| `tickColor` | `string` | Theme text color, falling back to `currentColor` | CSS color for the tick icon. |
| `tickIcon` | Tick icon name | `"check"` | Icon shown when the status is `"done"`: `check`, `circleCheck`, `doubleCheck`, `squareCheck`, `ban`, `bolt`, `circle`, `dotCircle`, `clock`, `flag`, `exclamation`, `heart`, `minus`, `paw`, `star`, `thumbsUp`, or `thumbtack`. |
| `onTicked` | `(status) => void` | — | Called with the next status when the checkbox is clicked. |

The package's styles are included through its entry point; no separate stylesheet import is needed.

## Development

```bash
npm install
npm run dev
```

Available scripts:

- `npm run build` — type-check and build the distributable package.
- `npm run lint` — lint the project.
- `npm run preview` — preview the Vite build locally.

The package build runs automatically before publishing.
