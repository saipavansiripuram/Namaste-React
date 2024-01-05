# Episode 13 - Time for the Test

## Theory Assignment:

- What are the difference types of Testing?
- React Testing Library and It's set up
- What is Jest and why do we use it?
- Jest setup and installation of it's related

# Types of testing (developer)

- Unit Testing - Testing One Component in Isolation || means seperately , 
  - Testing the react components in isolation ,suppose only header component wheather it rendered properly or not .

- Integration Testing - Testing Integration of Components
    - Multiple Components exchanging to interacting each other we will develop a flow to test the application
- End to End Testing (or) e2e Testing - End-to-end testing verifies that all components of a system can run under real-world scenarios. The goal of this form of testing is to simulate a user experience from start to finish. E2E testing can find software dependencies while also validating the system under test, its data integrity and integrations.
    - User logging to the page and carting and user flow thorough out the application 
    - cypress
    - selenium
    

# Setting up Testing in our app

1. Install React Testing Library (to write our testcases) (most standard library) `npm install --save-dev @testing-library/react`
2. Install Jest `npm i -D jest`
3. Install Babel Dependencies
  - `npm install --save-dev babel-jest @babel/core @babel/preset-env`

4. Configure Babel
```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

```
5. Configure Parcel Config File to disable default Babel transpilation
```
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```
- By using above code in .parcelrc file. babal and parcel will not conflict

6. Jest - `npx jest --init` to run test cases we need command 
- we are not using typescript 
- and select jsdom
- y 
- select babel
- When we run test cases , they will not run on server so they need a runtime for that we use jsdom.
7. Install jsdom library
-`npm install --save-dev jest-environment-jsdom` ,earlier this was added with react testing library 
8. Install @babel/preset-react - to make JSX work in test cases
- npm -i -D babel/preset-react
9. Include @babel/preset-react inside my babel config
8. Library 
- npm i -D @testing-library/jest-dom



## Manual Testing
- Manual Testing (Testing whatever developing)
- Code to Test the Application automatically
- In some companies testing is part of development .


## React Testing Library
- This is build on top of DOM testing library
- DOM Testing Library is top 
- React Testing Library is wrapper of DOM Testing library with React Features.
- If we use React create app then React testing library already integrated into App
- React testing library uses something known as JEst ,Java Scipt testing library
- Jest internally uses Babel 



# React uses so many different libraries
- For Routing `React Router DOM`
- For State Management `Redux`
- For Bundling `Parcel`
- For Testing `React Testing Library`


## Dunder
