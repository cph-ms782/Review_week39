#### [Exam preparation exercise about AJAX, CORS and SVG (SP5_AJAX_CORS)](https://docs.google.com/document/d/1VMx1XdbnIbJ6ik98qPywGyrRiqbQuIM2u9DpJmXCnlk/edit)  


* Explain about the Object Model, and why it’s (very) relevant for modern Web-development  
**Easy testing, debugging, and maintenance  
It’s reusable  
It’s sharable**  

* Explain (using an example of your own choice) about JavaScript events, and Event Bubbling  
Events wait for user actions

* Elaborate on how JSON or XML supports communication between subsystems, even when the subsystems are implemented on diﬀerent platforms.  
**They're standards, and standards makes coomunication possible**  

* Explain the topic AJAX and how it has changed the way modern web-applications are created  
**AJAX are asyncron and can come at any moment, not waiting for a server to feed data. It makes it possible to fetch data without reloading webpage**  

* Explain the Same Origin Policy (for AJAX), and different ways to work around it  
**SOP prevent cross origin data fetching. To get around it you can spedify which (other) webpages are cleared for feeding data**  


# Exam preparation exercise about AJAX, CORS and SVG (SP5_AJAX_CORS
## JavaScript, DOM, AJAX, CORS and SVG  
 1. So the exercise boils down to. Hook up an event handler on the map, get the id, perform an AJAX request to fetch the JSON-data from the link given above and update the GUI using the JSON returned as sketched above.  
[HTML](https://github.com/cph-ms782/Review_week39/blob/master/4.Exam-preparation-exercise-about-AJAX-CORS-and-SVG/public/index.html#L1)  
[JS](https://github.com/cph-ms782/Review_week39/blob/master/4.Exam-preparation-exercise-about-AJAX-CORS-and-SVG/src/index.js)  


 1. For the previous task it was possible to obtain data right from restcountries.eu via an AJAX call made from within your Browser (as sketched to the right). Use Chrome Developer tools to explain (with focus on the Same Origin Policy) why this is possible.   
 **restcountries.de have their CORS policy set to all access on their server (for GET method):**  
_Access-Control-Allow-Methods: GET  
Access-Control-Allow-Origin: *_

 1. Let's assume restcountries.eu had not allowed Cross Origin Calls. 
Design a Web Proxy Solution (using a plain Servlet or JAX-RS) where your browser will send the request to your proxy who should forward the request on to the remote server and send back the received respons  
**Not done**  
