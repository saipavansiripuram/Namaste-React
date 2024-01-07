### Interview Questions

1. Lifting State Up
Lifting state up is a pattern in React where state is moved from a child component to its parent. This is done to share the state among multiple child components or to manage state at a higher level.

2. React Context
React Context provides a way to pass data through the component tree without having to pass props manually at every level. It's particularly useful for global data such as user authentication or theme.

3. Adding CSS
CSS can be added to a React app using various methods:

Inline styles: Define styles directly in the JSX using the style attribute.
Internal stylesheets: Use the <style> tag within a component file.
External stylesheets: Create a separate CSS file and import it into the component or use a bundler like Webpack.
4. Hot Module Replacement
Hot Module Replacement (HMR) is a feature that allows developers to update modules in real-time while an application is running, without a full page reload. It helps in maintaining the application state during development.

5. Parcel, Vite, Webpack
Parcel, Vite, and Webpack are bundlers used in front-end development to optimize and bundle assets. They handle tasks like code splitting, transpiling, and bundling files. Webpack is widely used, while Parcel and Vite offer faster build times and other optimizations.

6. create-react-app
create-react-app is a command-line tool that sets up a new React project with a pre-configured development environment. It provides a sensible default configuration and abstracts away the build configuration complexities, allowing developers to focus on coding.

7. Tree Shaking
Tree shaking is a process where unused code (dead code) is eliminated during the build process. In React, it helps remove unnecessary parts of the code when bundling, resulting in a smaller bundle size and improved performance.

8. Dependency vs. devDependency
Dependencies (dependencies) are packages required for the application to run, while devDependencies (devDependencies) are packages needed only during development. For example, testing libraries or build tools are often listed as devDependencies.

9. npx and npm
npx is a tool that allows you to execute Node.js packages directly. It's often used for running packages without installing them globally. npm (Node Package Manager) is used for package installation, version management, and script execution in a Node.js environment.

10. package.json vs. package-lock.json
package.json contains metadata about the project and its dependencies, while package-lock.json provides a detailed description of the dependency tree, including specific versions. The latter ensures consistent installations across different environments.

11. console.log(<HeaderComponent/>) vs. console.log(HeaderComponent)
console.log(<HeaderComponent/>) will log the JSX representation of the HeaderComponent, while console.log(HeaderComponent) will log the actual component function or class. The former is useful for debugging React elements.

12. React Fragment
React.Fragment is a wrapper component used to group multiple elements without introducing an additional DOM element. It helps avoid unnecessary div wrappers when rendering multiple elements.

13. Dependency Array in useEffect
The dependency array in useEffect specifies the values from the component's scope that the effect depends on. When these values change, the effect will run. If no dependencies are provided, the effect runs after every render.

14. Effect of State Change in Child Component
Changing the state in one component does not automatically affect the state of another component (child or otherwise) unless they share the same state through props or context. React follows a unidirectional data flow.

15. Return in useEffect
The return statement in useEffect is used for cleanup. If specified, the returned function will be executed when the component is unmounted or when the dependency values change before the next effect run.

16. Client-side vs. Server-side Routing
Client-side routing involves navigating between pages without a full page reload, typically handled by JavaScript in the browser. Server-side routing involves making requests to the server for each new page, resulting in full page reloads.

17. React Routing and Navigation
React can handle routing through libraries like react-router. Navigation is achieved by rendering different components based on the URL, enabling a single-page application (SPA) experience.

18. Higher-Order Components (HOC)
HOCs are functions that take a component and return a new component with enhanced functionality. They are used for code reuse, logic abstraction, and adding features to multiple components.

19. Controlled vs. Uncontrolled Components
Controlled components are React components where the state is controlled by React, typically through state management. Uncontrolled components rely on the DOM for state, often using refs to interact with the underlying DOM elements.

20. Reconciliation in React
Reconciliation is the process in which React updates the virtual DOM and efficiently applies those updates to the actual DOM. It optimizes rendering to ensure minimal changes, enhancing performance by avoiding unnecessary re-renders.

21. What is the significance of keys in React lists?
Answer: Keys are used to uniquely identify and track components within a list in React. They help React efficiently update and re-render components when the list changes, ensuring a better performance.

22. Explain the concept of prop drilling in React.
Answer: Prop drilling occurs when props are passed down multiple levels of nested components, even when intermediate components do not directly use those props. This can lead to maintenance challenges, and solutions like React Context or state management libraries are often employed to mitigate prop drilling.

23. What are React Hooks, and why are they used?
Answer: React Hooks are functions that enable functional components to have state and lifecycle features. They were introduced in React 16.8 to allow the use of state and other React features in functional components, eliminating the need for class components.

24. Differentiate between useState and useEffect hooks in React.
Answer:

useState: Used for adding state variables to functional components. It returns an array with the current state value and a function to update it.
useEffect: Used for side effects in functional components. It runs after each render and is commonly used for data fetching, subscriptions, or manually changing the DOM.
25. What is Redux, and when would you use it in a React application?
Answer: Redux is a state management library for JavaScript applications, including React. It provides a predictable state container and helps manage the state of an application in a centralized store. Redux is useful in larger applications with complex state management needs.

26. Describe the React component lifecycle methods.
Answer:

Mounting Phase:

constructor: Initializes the component's state and binds methods.
render: Renders the component's JSX.
componentDidMount: Invoked after the component is mounted to the DOM.
Updating Phase:

shouldComponentUpdate: Decides whether the component should re-render.
render: Renders the updated JSX.
componentDidUpdate: Invoked after the component updates.
Unmounting Phase:

componentWillUnmount: Invoked just before the component is unmounted.
27. How does React handle forms, and what is controlled and uncontrolled form components?
Answer: React handles forms through controlled and uncontrolled components.

Controlled components: Form elements whose values are controlled by React state. Changes are handled through state and re-rendered accordingly.
Uncontrolled components: Form elements whose values are not controlled by React state. They rely on the DOM and refs to manage values.
28. What is the significance of the key prop in React?
Answer: The key prop is used to uniquely identify elements in an array. It helps React efficiently update and re-render lists by identifying which items have changed, been added, or been removed.

29. Explain the concept of PureComponent in React.
Answer: PureComponent is a class component in React that inherits from Component. It automatically implements a shouldComponentUpdate method with a shallow prop and state comparison. This can optimize rendering by preventing unnecessary updates.

30. How does React handle error boundaries, and what is their purpose?
Answer: Error boundaries are special components in React that catch JavaScript errors anywhere in their child component tree. They are created using componentDidCatch lifecycle method. Error boundaries help prevent the entire application from crashing due to errors and allow graceful error handling.