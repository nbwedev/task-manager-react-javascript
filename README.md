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
