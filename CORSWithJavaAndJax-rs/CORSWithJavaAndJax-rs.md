## Single Origin Policy, and CORS with Java and JAX-RS  
####Backend
Test the API, using POSTMAN. This should not cause any CORS-related problems, WHY?  
_**Everything is on the same server, url, port and protocol**_


Does this work?, can you use the API, from your new “SPA-client”?  
_**No: **  
Access to fetch at 'http://localhost:8080/CORSWithJavaAndJax-rs/api/test/' from origin 'http://localhost:3456' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled._

If not explain why (the errors you get).  
_**CORS enforce single origin policy**_


