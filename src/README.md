<h1 align="center">Personal Portfolio</h1>
<h2>The Purpose</h2>
<p>This project is a representation of the skills I have obtained during my bootcamp. The homepage is of a project created in the first six weeks of the bootcamp, with a few adjustments made. Including translating the original code from strictly JavaScript, to using the React library along with HTML, CSS, and JavaScript. The About Me page highlights my professional summary, as well as gives viewers a visual of who I am with a picture of myself. The fun fact page highlights using an API to fetch data and display the results of a search.</p>
<h2>Problems That Occcurred</h2>
<h3>Two big issues occurred during the construction of this code:</h3>
<h4>The monthly quota for API calls had been exceeded</h4>
<p>Before I could figure out how to display data fetched from the API, I exceeded the monthly quota I was alloted, requiring  me to find another API.</p>
<h4>Structure of the React app prevented passing of data</h4>
<p>To resolve this issue, instructor intervention was necessary. Initially, the fetch was coded within App.js, however, in attempts to display data, the component created caught the data and could not pass from there. To resolve this issue, the fetch was put back into App.js, from the component it was placed in. This allowed the returned results to be displayed in console, confirming the API was called.</p>