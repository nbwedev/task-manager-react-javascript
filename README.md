# Project: Task Manager (Frontend)

**What it does**

- [ ] Display tasks.
- [ ] Add a task.
- [ ] Toggle task completion.

---

## Folder Responsibilities (Frontend Mental Model)

`pages/`

- Page-level components
- Compose multiple components
- Handle data flow

`components/`

- Reusable UI pieces
- Minimal logic
- No API calls

`services/`

- External communication (API)
- All fetch logic lives here

`utils/`

- Pure helper functions
- No React imports

`styles/`

- Global styles
- Simple and flat

---

# Data Model

> This task manager application is built using a data-first approach.
> Before implementing UI or behavior, the structure of the core data model is defined. This data model serves as the single source of truth for the entire application.

> Each _task_ is represented as a plain JavaScript object with a fixed set of properties. A collection of these task objects (stored in an array) represents the complete application state. All rendering and user interactions derive from and update this data structure.

**Task Structure**

Below is a conceptual representation of the task data model:

```
[
  {
    "id": 1,
    "title": "Finish React Project",
    "description": "Complete the data model section",
    "completed": false
  }
]

```

---

# **ARRAY METHODS**

> Once the task data model was defined, the next step was to manipulate that data using JavaScript array methods.
> Each operation below represents a state transformation on the tasks array.

> During this process, several mental blocks surfaced. These were corrected through iteration, leading to a clearer and more consistent mental model.

---

**`addTask()`**
Initial issue

```
export const addTask = (title, tasks) => {
```

- The parameter order was reversed.
- This implied that `title` was the primary input
- However, the correct mental model is that `tasks` is the primary state

**Correct mental model**

Reducers and state utilities almost always follow this pattern:

```
(state, actionData) → newState
```

**Rule**

> State transformation functions take the current state first, inputs second, and return the new state.

---

`deleteTask()`
First iteration (incorrect)

```
export const deleteTask = (tasks, taskId) => {
  tasks.filter((task) => task.id === taskId);
  return tasks;
};
```

This function never deleted anything.

**Why this failed**

- `filter()` does not mutate the array
- Its return value was ignored
- The original tasks array was returned unchanged

**Refined mental model**

> State transformation functions must return the new state explicitly.
> Calling a transformation without returning its result does nothing.

---

`toggleTask()`

Initial attempt (incorrect)

```
export const toggleTask = (tasks, taskId) => {
  if (task.id !== taskId) {
    return tasks;
  }
  const completed = tasks.map((task) => task.id === taskId);
  return [...tasks, completed];
};
```

This implementation:

- Did not toggle a task
- Did not update task objects
- Did not return a valid tasks array

**Why this failed**

Conditions referencing array elements must live inside iteration
`map()` must return a full array of task objects
Appending `([...])` is for adding items, not updating them

**Correct approach**

Use `map()` to iterate over the tasks array and conditionally replace the matching task:

```
task.id === taskId
  ? { ...task, completed: !task.completed }
  : task
```

**Final rule of thumb**

| Operation   | Method           |
| ----------- | ---------------- |
| Add task    | Spread (`[...]`) |
| Delete task | `filter()`       |
| Update task | `map()`          |

**Each function:**

- Takes the current state as input
- Returns a new state
- Avoids mutation entirely

---

## Adding Vitest to Your Project

> I decided to add tests to my project to help me write code more effectively. I’ve realized that writing code directly can be challenging for me, but writing tests comes more naturally. By specifying the expected behavior of a function or component, tests act like pseudocode that I can rely on when implementing the actual code. I work especially well when guided by tests.

> What I’m adding right now are simple unit tests for utility functions. In the near future, I plan to add tests for components as well.

### 1. Install Vitest

Install Vitest as a **development dependency**:

`npm install -D vitest`

### 2. Update `package.json`

Add a `test` script so you can easily run your tests:

`"scripts": {   "test": "vitest" }`

This allows you to run:

`npm run test`

> By default, Vitest runs in **watch mode**, automatically rerunning tests whenever your files change.

### 3. Create a Test File

For each module you want to test, create a corresponding `.test.js` file.

For example, if you have a utility function `createTask.js` in `src/utils/`, create a test file:

`test/createTask.test.js`

### 4. Import Vitest Functions and Your Module

At the top of your test file, import Vitest functions and the module you want to test:

```
//Vitest core functions
import { describe, it, expect } from "vitest";


// Your module
import { createTask } from "../src/utils/createTask.js";
```

### 5. Write Your Tests

Organize tests using a three-tier approach for comprehensive coverage:

```javascript
describe("functionName", () => {
  describe("successful creation", () => {
    // Verify expected behavior with valid inputs
  });

  describe("validation", () => {
    // Verify error handling with invalid inputs
  });

  describe("edge cases", () => {
    // Verify boundary conditions and special scenarios
  });
});
```

This structure ensures your tests cover normal operations, error handling, and unusual but valid scenarios.

### 6. Run Your Tests

`npm run test`

- Vitest **watch mode** will run your tests and automatically rerun when you save changes.
- Passed tests are highlighted in **green**, failed tests in **red**.
- Press `q` to exit watch mode.

> This workflow encourages **Test-Driven Development (TDD)**: write a failing test first, implement the feature, then refactor safely with instant feedback.

---
