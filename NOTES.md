**Core Principle (Keep This)**

**React state should be treated as immutable:**
You don’t change existing state—you replace it with a new value.

This is not a stylistic rule; it is foundational to how React detects and optimizes updates.

---

React does not deep-compare state. It relies on referential equality:

`Object.is(prevState, nextState) `

---

Bottom Line

. React’s update model is identity-based
. Immutability is a mechanical requirement, not a preference
. Mutation breaks rendering guarantees and optimizations
. Always think in new references, not modified values
