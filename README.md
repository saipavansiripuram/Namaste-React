### Namsthe React 
0. What is Lifting State Up in React?
Lifting state up in React refers to the process of moving the state from a child component to its parent component. This is often done to share state between multiple components or to manage the state at a higher level in the component hierarchy.

1. What is React context?
React context provides a way to pass data through the component tree without having to pass props down manually at every level. It's useful for sharing data that is needed by many components, such as themes or user preferences.

2. What are different ways to add CSS in your app?
You can add CSS to your app using inline styles, separate CSS files, CSS modules, or CSS-in-JS libraries like styled-components.
3. What is Hot Module Replacement?
Hot Module Replacement (HMR) is a feature in Webpack that allows modules to be updated while the application is running, without a full reload. It helps in maintaining the application state while applying changes.
4. What is the use of Parcel, Vite, Webpack?
Parcel, Vite, and Webpack are all module bundlers that help in building and bundling the assets of a web application. They handle tasks like code splitting, bundling, and optimizing assets.
5. How does create-react-app work?
Create React App is a tool that sets up a new React project with a single command. It provides a pre-configured build setup, allowing developers to start building React applications without having to configure build tools.
6. What is Tree Shaking?
Tree shaking is a process used by bundlers like Webpack to eliminate dead code (unused exports) from the final bundle, resulting in a smaller bundle size.
7. Difference between dependency and devDependency
Dependencies listed in the "dependencies" object in package.json are required for the application to run, while those listed in "devDependencies" are only needed for development and testing.
8. What is npx and npm?
npx is a package runner tool that comes with npm 5.2+ and is used to execute packages from the npm registry. npm is a package manager for JavaScript that is used to install, share, and manage packages.
9. Difference between package.json and package-lock.json
package.json is used to define the properties of a package, while package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree or package.json.
10. Difference between console.log(<HeaderComponent/>) and console.log(HeaderComponent);
console.log(<HeaderComponent/>) will log the JSX representation of the HeaderComponent, while console.log(HeaderComponent) will log the actual HeaderComponent object.
11. What is React.Fragment?
React.Fragment is a built-in component in React that can be used to group multiple elements without adding extra nodes to the DOM. It's useful when you need to return multiple elements from a component's render method.
12. What is the purpose of dependency array in useEffect? What is the difference when it is used and when it is not used?
The dependency array in useEffect specifies the values that the effect depends on. When provided, the effect will only re-run if one of the values in the dependency array changes. If not provided, the effect runs after every render.
13. What if 2 components are given, will the state change in one component affect the other component's state (child)?
No, the state of one component does not directly affect the state of another component. Each component manages its own state independently.
14. What is the use of return in useEffect?
The return statement in useEffect is used for cleanup. It allows you to specify how to clean up after the effect, such as unsubscribing from an event or clearing a timer.
15. Difference between client-side routing and server-side routing?
Client-side routing is handled by the browser and does not require a round trip to the server for each new page, resulting in faster page transitions. Server-side routing involves requesting new pages from the server, which can be slower but is better for SEO and initial page load times.
16. Explain the concept of code splitting and its benefits in React.
Code splitting is the technique of splitting your code into various bundles which can then be loaded on demand or in parallel. This can improve initial loading times and reduce the amount of code that needs to be loaded for each page.
17. How does React handle routing and navigation?
React can handle routing and navigation using libraries like React Router. These libraries allow you to define different routes in your application and navigate between them using components and hooks provided by the library.
18. What are higher-order components (HOC) in React?
Higher-order components are functions that take a component and return a new component with additional functionality. They are a way to share code between components without using inheritance.
19. What are controlled and uncontrolled components?
Controlled components are components whose form data is controlled by React, while uncontrolled components are components where form data is handled by the DOM itself.
20. Explain the concept of reconciliation in React.
Reconciliation is the process by which React updates the DOM to match the virtual DOM. It involves comparing the new virtual DOM with the previous one and making the necessary changes to the actual DOM to reflect the updates.

