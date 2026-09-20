# 🚀 DevStack - Tech Stack Builder

A modern, interactive, and fully responsive web application designed for developers to explore software technologies, filter choices by categories, and build their custom development stack in real-time.

---

## 🛠️ Technologies Used

- **Frontend Framework**: [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)

---

## ✨ 3 Key Features

1. **Interactive Technology Catalog**:
   - Displays technology cards dynamically with badges, difficulty levels, star ratings, and descriptions fetched from JSON data.

2. **"Your Stack" Sidebar & State Management**:
   - Real-time side panel that displays selected items, total technology count, and 1-column stack details.
   - Allows users to add items, prevents duplicate additions with warning alerts, disables added card buttons, and supports single item removal or clearing the whole stack with "Remove All".

3. **Responsive Sticky Navbar & Real-Time Toasts**:
   - Features a sticky navigation bar with a 3-part layout on mobile devices (hamburger menu on the left, logo in the center, and auth buttons on the right).
   - Provides instant, interactive feedback using Toastify notifications when items are added, duplicated, or removed.

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
> **Answer**: JSX (JavaScript XML) is a syntax extension that allows developers to write HTML-like structures directly inside JavaScript code. It is used in React because it makes component templates easy to write, read, and visualize compared to plain JavaScript methods.

---

### 2. What is the difference between props and state?
> **Answer**: 
> - **Props** (short for properties) are read-only inputs passed from a parent component down to a child component.
> - **State** is local data managed internally within a component that can change over time. When state updates, React re-renders the component to reflect changes in the UI.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
> **Answer**: The `useState` hook allows functional components to store and update dynamic state values. In this project:
> - `useState` is used in `Card.tsx` to manage the `selectedCards` array for tracking items added to "Your Stack".
> - `useState` is used in `Nav.tsx` to manage the `isMenuOpen` boolean state for toggling the mobile navigation dropdown.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
> **Answer**: The `useEffect` hook handles side effects in functional components (such as API data fetching or subscriptions) after the component renders. Loading JSON data inside an effect ensures that data fetching occurs cleanly without blocking or looping component rendering cycles.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
> **Answer**: React relies on the unique `key` prop to identify which items in a list have been added, modified, or removed. This enables React's virtual DOM diffing algorithm to update only the modified list items efficiently rather than re-rendering the entire list.

---

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
> **Answer**: Conditional rendering means displaying different components or UI elements based on specific conditions or state values.
> 
> **Project Example**: In `YourStack.tsx`:
> ```tsx
> {count === 0 ? (
>   <div className="empty-state">
>     <h3>Your stack is empty</h3>
>     <p>Pick technology cards from the left to build your stack.</p>
>   </div>
> ) : (
>   <div className="stack-item-list">
>     {/* Render list of selected technology items */}
>   </div>
> )}
> ```

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
> **Answer**: 
> - **Parent to Child**: Data is passed downwards by passing attributes called **props** to the child component.
> - **Child to Parent**: The parent passes a callback function as a prop (e.g., `onAddToStack`). When an event occurs inside the child (such as a button click), the child calls that callback function and passes arguments back up to the parent.
