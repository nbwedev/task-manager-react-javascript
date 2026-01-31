### Project: Task Manager (Frontend)

**What it does**

- [ ] Display tasks.
- [ ] Add a task.
- [ ] Toggle task completion.

---

### Folder Responsibilities (Frontend Mental Model)

`pages/`
Page-level components
Compose multiple components
Handle data flow

`components/`
Reusable UI pieces
Minimal logic
No API calls

`services/`
External communication (API)
All fetch logic lives here

`utils/`
Pure helper functions
No React imports

`styles/`
Global styles
Simple and flat

---

### Data Model

**Overview**

This task manager application is built using a data-first approach.
Before implementing UI or behavior, the structure of the core data model is defined. This data model serves as the single source of truth for the entire application.

Each _task_ is represented as a plain JavaScript object with a fixed set of properties. A collection of these task objects (stored in an array) represents the complete application state. All rendering and user interactions derive from and update this data structure.

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
