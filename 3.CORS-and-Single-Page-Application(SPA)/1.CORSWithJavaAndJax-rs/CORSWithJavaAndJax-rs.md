#### [CORS and Single Page Application (SPA) (CORS and hosting)](https://docs.google.com/document/d/1fqWz2euCYbUoVDf6kzj8pnW5ktalJAzuqWCfFGdwrmI/edit)  

# Single Origin Policy, and CORS with Java and JAX-RS  
###Backend
Test the API, using POSTMAN. This should not cause any CORS-related problems, WHY?  
_**Everything is on the same server, url, port and protocol**_  

### Frontend  
Does this work?, can you use the API, from your new “SPA-client”?  
_**No: **  
Access to fetch at 'http://localhost:8080/CORSWithJavaAndJax-rs/api/test/' from origin 'http://localhost:3456' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled._

If not explain why (the errors you get).  
_**CORS enforce single origin policy**_

### Using CORS with Jax-rs
_**GET**_ 
_Request Method: GET_ **-->  GET method using CORS**  
Origin: http://localhost:3456  
Referer: http://localhost:3456/  
Sec-Fetch-Mode: cors_  

_**POST**  
_Request Method: OPTIONS_ **-->  OPTIONS method using CORS. Checking if POST works**  
Access-Control-Request-Headers: content-type  
Access-Control-Request-Method: POST  
Origin: http://localhost:3456  
Referer: http://localhost:3456/  
Sec-Fetch-Mode: cors  
**&**  
_Request Method: POST_ **-->  POST method using CORS**  
Accept: application/json  
Content-Type: application/json  
Origin: http://localhost:3456  
Referer: http://localhost:3456/  
Sec-Fetch-Mode: cors_  

_**PUT**  
Request Method: OPTIONS_ **-->  OPTIONS method. Checking if PUT works**  
Access-Control-Request-Headers: content-type  
Access-Control-Request-Method: PUT  
Origin: http://localhost:3456  
Referer: http://localhost:3456/  
Sec-Fetch-Mode: cors  
**&**  
_Request Method: PUT_ **-->  PUT method using CORS**  
Accept: application/json  
Content-Type: application/json  
Origin: http://localhost:3456  
Referer: http://localhost:3456/  
Sec-Fetch-Mode: cors_  

_**DELETE**  
_Request Method: OPTIONS_ **-->  OPTIONS method using CORS. Checking if DELETE works**  
Access-Control-Request-Headers: content-type  
Access-Control-Request-Method: DELETE  
Origin: http://localhost:3456  
Referer: http://localhost:3456/  
Sec-Fetch-Mode: cors  
**&**  
_Request Method: DELETE_ **-->  DELETE method using CORS**  
Content-Type: application/json  
Origin: http://localhost:3456  
Referer: http://localhost:3456/  
Sec-Fetch-Mode: cors_  


