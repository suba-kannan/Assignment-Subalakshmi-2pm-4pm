//Task 2
function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is About Page</p>
    </div>
  );
}

export default About;

// Task 10

// In a React application, routing is handled by React Router to create a Single Page Application (SPA).
// The entire app is wrapped inside BrowserRouter, which uses the HTML5 History API to manage navigation without reloading the page.
// When a user clicks on a Link, React Router prevents the default page reload behavior.
// Instead of refreshing the whole page, it updates the URL in the browser.
// Then, the Routes component checks all defined Route paths.
// If the current URL matches a Route path, the corresponding component is rendered.
// Only that specific component updates — not the entire page — which makes navigation fast and smooth.
// This is how React Router enables client-side routing in a SPA.