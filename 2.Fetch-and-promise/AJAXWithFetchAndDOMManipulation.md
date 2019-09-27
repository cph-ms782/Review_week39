#### [FetchAndPromises](https://docs.google.com/document/d/1_PkGqF-1MVt0sFDR90ARJlUhQ8DsyC4L12NI6E-iWMc/edit#)
# AJAX with fetch and DOM manipulation  

##### Finding individual jokes  
HTML was erased by exercises further down  
[ but some JS still survives as comments](https://github.com/cph-ms782/Review_week39/blob/cb0dbd418d7f4ceb4b54fe4c6dd8bcd2c3e1f559/2.Fetch-and-promise/1.AJAXWithFetchAndDOMManipulation/src/index.js#L7)  

##### Adding new Jokes  
[JS](https://github.com/cph-ms782/Review_week39/blob/cb0dbd418d7f4ceb4b54fe4c6dd8bcd2c3e1f559/2.Fetch-and-promise/1.AJAXWithFetchAndDOMManipulation/src/index.js#L14)  

##### Small application to display a quote of the hour  

 1. Remove all html (and only this) inside the div with the container class  (in index.htm in the public folder)  
 2. Add a button to index.html + an empty div-tag, both with id’s so they are easy to “find”  
[HTML](https://github.com/cph-ms782/Review_week39/blob/cb0dbd418d7f4ceb4b54fe4c6dd8bcd2c3e1f559/2.Fetch-and-promise/1.AJAXWithFetchAndDOMManipulation/public/index.html#L11)  

 3. In index.js remove all code meant for the initial joke-sample, add an event listener to the button’s click event and pass a callback that will update the div tag in the index.html with a new quote.  
[Link](https://github.com/cph-ms782/Review_week39/blob/cb0dbd418d7f4ceb4b54fe4c6dd8bcd2c3e1f559/2.Fetch-and-promise/1.AJAXWithFetchAndDOMManipulation/src/index.js#L22)  

 4. Initially, fetch the quote from a remote API: https://studypoints.info/jokes/api/jokes/period/hour  
_{  
  "id": 2,  
  "joke": "A SQL query goes into a bar, walks up to two tables and asks, \"Can I join you?\"",  
  "reference": "Unknown"  
}_
 
5. Use fetch() to get the quote.  
[Link](https://github.com/cph-ms782/Review_week39/blob/cb0dbd418d7f4ceb4b54fe4c6dd8bcd2c3e1f559/2.Fetch-and-promise/1.AJAXWithFetchAndDOMManipulation/src/index.js#L25)  
 
6. Use developer-tools in your browser and it’s network options to monitor the AJAX-request. Explain why, what you did above, is even possible, when we know the Same Origin Policy governs when/where AJAX-request can go  
_**Request:** Cross-Origin Resource Sharing (CORS) is specified in the request.  
**Response:** Access-Control-Allow-Origin is set to * **_

7. Change the functionality to get a new quote every hour. (Hint: use setInterval() )  
[Link](https://github.com/cph-ms782/Review_week39/blob/cb0dbd418d7f4ceb4b54fe4c6dd8bcd2c3e1f559/2.Fetch-and-promise/1.AJAXWithFetchAndDOMManipulation/src/index.js#L34)  

### JS Event handling, HTML5 and inline SVG
1. Download the file: fourHearts.svg, and copy the content into the clipboard.  
[HTML](https://github.com/cph-ms782/Review_week39/blob/cb0dbd418d7f4ceb4b54fe4c6dd8bcd2c3e1f559/2.Fetch-and-promise/1.AJAXWithFetchAndDOMManipulation/public/index.html#L17)  

2. Either create a new SPA project or (suggested)  just paste the content into the body of your existing project.  
[It's in the same HTML file as above](https://github.com/cph-ms782/Review_week39/blob/cb0dbd418d7f4ceb4b54fe4c6dd8bcd2c3e1f559/2.Fetch-and-promise/1.AJAXWithFetchAndDOMManipulation/public/index.html#L17)  

3. Add the necessary event handlers, so when pressing each of the “hearts”, it will write the  message North, South, East or West respectively.  
[Eventlisteners and function Ireland](https://github.com/cph-ms782/Review_week39/blob/cb0dbd418d7f4ceb4b54fe4c6dd8bcd2c3e1f559/2.Fetch-and-promise/1.AJAXWithFetchAndDOMManipulation/src/index.js#L38)  


