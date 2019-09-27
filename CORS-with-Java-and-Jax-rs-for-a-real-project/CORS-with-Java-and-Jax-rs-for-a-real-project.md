## CORS with Java and Jax-rs for a real project  

Using **The-facade-and-the-matching-endpoints** from last week

#### Trying to "GET" person 2 from DB:
**Errors:**  
_Access to fetch at 'http://localhost:8080/the-facade-and-the-matching-endpoints/api/person/2' from origin 'http://localhost:3456' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled._  
**&**  
_Uncaught (in promise) TypeError: Failed to fetch_  

**Inserting filters in java code for request and response.**  
Now no errors. Same headers as in last exercise so only showing GET and POST  

_**GET**_  
_Request Method: GET_ **-->  GET method using CORS**  
**Header response:**  
_Access-Control-Allow-Credentials: true  
Access-Control-Allow-Headers: Origin, Accept, Content-Type  
Access-Control-Allow-Methods: GET, POST, DELETE, PUT  
Access-Control-Allow-Origin: _*  
_Content-Type: application/json_  
 
**Header request:**  
_Origin: http://localhost:3456  
Referer: http://localhost:3456/  
Sec-Fetch-Mode: cors_  


**POST**  
_Request Method: OPTIONS **-->  OPTIONS method using CORS. Checking if POST works**  
_**Header response:**  
_Access-Control-Request-Headers: content-type  
Access-Control-Request-Method: POST  
Origin: http://localhost:3456  
Referer: http://localhost:3456/  
Sec-Fetch-Mode: cors_  
**Header request:**  
_Accept: application/json  
Content-Type: application/json  
Origin: http://localhost:3456  
Referer: http://localhost:3456/  
Sec-Fetch-Mode: cors_  
**&**  
Request Method: POST **-->  POST method using CORS**  
_**Header response:**  
Access-Control-Allow-Credentials: true  
Access-Control-Allow-Headers: Origin, Accept, Content-Type  
Access-Control-Allow-Methods: GET, POST, DELETE, PUT  
Access-Control-Allow-Origin: *  
Content-Length: 84  
Content-Type: application/json_  
**Header request:**  
_Accept: application/json  
Content-Type: application/json  
Origin: http://localhost:3456  
Referer: http://localhost:3456/  
Sec-Fetch-Mode: cors_  



