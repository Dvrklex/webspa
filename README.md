# Webspa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.
# What is a SPA (Single Page Application)?
A Single Page Application (SPA) is a type of web application that operates within a single web page instead of multiple pages. In a SPA, all content is initially loaded as part of the main page, and user interactions with the application are handled dynamically without the need to completely reload the page. This results in a faster and smoother user experience, akin to that of a desktop application.

## Run this project
1. Clone this repository: `git clone https://github.com/Dvrklex/webspa.git`
2. Install the dependencies `npm init`
3. Run `ng serve` and go to the http://localhost:4200/ to see the site.

# How it SPA works

Initial Load: A SPA loads an initial HTML page containing the basic structure, styles, and scripts.

Navigation: It dynamically displays and hides different content sections on the same page using JavaScript, avoiding full page reloads.

Server Communication: SPAs use APIs to fetch or send data without reloading the entire page, often through AJAX or Fetch requests.

Routing: A router manages URLs and determines which content to show based on the current URL, enabling seamless navigation.

URL Updates: Despite having only one HTML page, the URL in the browser's address bar changes as the user interacts with the application.

Lazy Loading: Additional resources like images, styles, and scripts are loaded lazily as needed to enhance performance.

```mermaid

sequenceDiagram
    box SPA
    participant Client
    participant Server
    end

    Client-)Server:Initial Request
    Server-->>Client:HTML
    Client-)Server:AJAX
    Server-->>Client:JSON

```

# Advantages of SPAs:

Performance: Initial page load and subsequent interactions are faster due to the absence of full page reloads.

User Experience: Provides a desktop-like experience, resulting in smooth and enjoyable navigation.

Routing: Client-side routing allows for quicker navigation and prevents page reloads.

Interactivity: Enables dynamic content updates without interruptions.

