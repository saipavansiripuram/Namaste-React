# What is CDN and Why use it? 

A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon. A properly configured CDN may also help protect websites against some common malicious attacks, such as Distributed Denial of Service (DDOS) attacks.

Here's where a CDN comes in:

- Copies of Your Content Everywhere: A CDN is like having many copies of your website's content stored in different locations around the world. These copies are stored on servers that are closer to the user.

- Faster Loading Times: When someone wants to view your website, the CDN automatically sends them the content from the server that's nearest to them. This is like getting your pizza from the nearest pizza place instead of one across town. It's faster!

- Reduced Server Load: Since the CDN is handling a lot of the work, your main server doesn't get as overloaded. It can focus on more important tasks, making your website more reliable and efficient.

- Better User Experience: Users don't like waiting. A CDN makes your website load faster, which means people are more likely to stay and explore. It's like having a fast, smooth highway instead of a slow, bumpy road.

So, in simple terms, a CDN is like a network of helpers that make sure your website's stuff (images, videos, etc.) gets to people quickly, no matter where they are in the world. Faster, smoother, and happier users!

# Why is React a Library?


React is often referred to as a "library" rather than a "framework" because of its focused and modular nature. Let's break down the difference between a library and a framework:

### Libraries:

- A library is a collection of pre-written code or functions that developers can use in their projects.
- It typically provides specific functionalities, and developers have the freedom to choose when and how to use these functionalities.
- Libraries are generally more flexible and allow developers to retain more control over the structure and flow of their application.

### Frameworks:

- A framework, on the other hand, is a more comprehensive set of tools, rules, and conventions that guide the development process.
- Frameworks often dictate the overall structure of the application and may provide a more opinionated approach to how code should be organized.
- Developers often need to follow the framework's conventions and structure, which can make the development process more streamlined but less flexible.

Now, when it comes to React:

- React is a JavaScript library primarily focused on building user interfaces for web applications.
- It provides a set of components and a virtual DOM (Document Object Model) that allows developers to efficiently update and render UI components.
- React doesn't prescribe a complete application architecture but instead focuses on the "View" part of the application, leaving the choice of other tools and libraries (like state management or routing) to the developer.
- his flexibility and modularity are some of the reasons why React is often categorized as a library.

In summary, React is considered a library because it provides a specific set of tools for building user interfaces and leaves many decisions about application architecture to the developer, promoting flexibility and freedom of choice.

# Why use Cross Origin?

- A cross-origin request is a request for website resources external to the origin. For example, a.example.com attempts to serve resources from b.secondexample.com.

- CORS instructs the browser to determine if a cross-origin request, such as an image or JavaScript from b.secondexample.com, is allowed by a.example.com. The browser does not load resources that are disallowed by CORS.

- Since we want to load the React code from an external resource other than origin, we need to enable CORS when using CDN.

- In case of Importing React using CDN, do include the cross-origin attribute.

Reasons :

- Cross-Domain API Requests: If you have a web application hosted on one domain and want to make API requests to a server on a different domain, CORS allows you to do so securely.

- Third-Party Integrations: When integrating third-party services or APIs into your web application that are hosted on different domains, CORS enables communication between your application and those external services.

- Client-Side Web Applications: Modern web applications often use client-side frameworks like React, Angular, or Vue.js. These applications may need to fetch data from APIs hosted on different domains, making CORS essential for proper functioning.