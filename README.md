Dev Stack
Dev Stack is a modern and responsive web application that helps developers explore different technologies and build their ideal development stack. Users can browse technology cards, view details, and add or remove technologies from their personal stack.
Technologies Used->
React
TypeScript
Vite
Tailwind CSS
HTML
JavaScript
Features->
Responsive Navigation: Includes a responsive navbar with a mobile menu for smaller screens.
Explore Technologies: Displays different frontend, backend, database, language, styling, and DevOps technologies with their descriptions, categories, levels, and ratings.
Build Your Own Stack: Users can add technologies to their stack, remove individual technologies, or remove all selected technologies.
1. What is JSX, and why is it used in React?

->JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React components easier to read and helps us describe what the UI should look like.
2. What is the difference between props and state?

->Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time and cause the UI to update.

3. What does the useState hook do, and where did you use it in this project?

->useState lets a React component store and update data. I used it in the Navbar to control the mobile menu and in the Technologies component to manage the selected technologies in the user's stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

->useEffect is used to perform side effects such as fetching data, updating the document, or working with external systems. In this project, I did not use useEffect because the technology data is currently stored directly in the component instead of being loaded from a JSON file or API.

5. Why does every item in a .map() list need a unique key prop?

->A unique key helps React identify each item in a list. It allows React to understand which items were added, removed, or changed and update the UI efficiently.

6. What is conditional rendering? Show one place you used it.

->Conditional rendering means showing different UI elements depending on a condition. In this project, I used it to show "Your stack is empty." when no technology has been selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

->A parent passes data to a child through props. A child can send information back by calling a function that the parent passes to it as a prop.
