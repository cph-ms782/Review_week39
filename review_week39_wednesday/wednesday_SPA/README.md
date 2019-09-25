# Wednesday

### AJAX with fetch and DOM manipulation
Finding individual jokes
Adding new Jokes
Small application to display a quote of the hour

 1. Remove all html (and only this) inside the div with the container class  (in index.htm in the public folder)  
 2. Add a button to index.html + an empty div-tag, both with id’s so they are easy to “find”  
 
 3. In index.js remove all code meant for the initial joke-sample, add an event listener to the button’s click event and pass a callback that will update the div tag in the index.html with a new quote.  

 4. Initially, fetch the quote from a remote API: https://studypoints.info/jokes/api/jokes/period/hour  
 
5. Use fetch() to get the quote.  
 
6. Use developer-tools in your browser and it’s network options to monitor the AJAX-request. Explain why, what you did above, is even possible, when we know the Same Origin Policy governs when/where AJAX-request can go  

7. Change the functionality to get a new quote every hour. (Hint: use setInterval() )  

### JS Event handling, HTML5 and inline SVG
1. Download the file: fourHearts.svg, and copy the content into the clipboard.  
 
2. Either create a new SPA project or (suggested)  just paste the content into the body of your existing project.  

3. Add the necessary event handlers, so when pressing each of the “hearts”, it will write the  message North, South, East or West respectively.


