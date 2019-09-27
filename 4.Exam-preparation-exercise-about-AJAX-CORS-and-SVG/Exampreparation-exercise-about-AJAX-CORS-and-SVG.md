#### [Exam preparation exercise about AJAX, CORS and SVG (SP5_AJAX_CORS)](https://docs.google.com/document/d/1VMx1XdbnIbJ6ik98qPywGyrRiqbQuIM2u9DpJmXCnlk/edit)  

# Exam preparation exercise about AJAX, CORS and SVG (SP5_AJAX_CORS
## JavaScript, DOM, AJAX, CORS and SVG  
 1. So the exercise boils down to. Hook up an event handler on the map, get the id, perform an AJAX request to fetch the JSON-data from the link given above and update the GUI using the JSON returned as sketched above.  

 1. For the previous task it was possible to obtain data right from restcountries.eu via an AJAX call made from within your Browser (as sketched to the right). Use Chrome Developer tools to explain (with focus on the Same Origin Policy) why this is possible.   
 **restcountries.de har sat deres CORS policy til at (for GET) er der adgang til alt på deres server:**  
_Access-Control-Allow-Methods: GET  
Access-Control-Allow-Origin: *_
 

 1. Let's assume restcountries.eu had not allowed Cross Origin Calls. 
Design a Web Proxy Solution (using a plain Servlet or JAX-RS) where your browser will send the request to your proxy who should forward the request on to the remote server and send back the received respons  
