## [FetchAndPromise](https://docs.google.com/document/d/1_PkGqF-1MVt0sFDR90ARJlUhQ8DsyC4L12NI6E-iWMc/edit#)
### Ajax with a full REST CRUD Endpoint and Error-handling
#### Test the POST method  
Verify, via your browser that the new user have been added with an id.  
**Status:** 201  
_{  
  "age": 23,  
  "name": "Peter Pan",  
  "gender": "male",  
  "email": "peters@pan.com",  
  "id": 114  
}_  

* Same user as above, but age = 2. Observe the response (and status code)  
_{  
  "status": 400,  
  "msg": "Age must be >= 3 and <= 99"  
}_  

* Same user as above, but name=”ib” Observe the response (and status code)  
_{  
  "status": 400,  
  "msg": "Age must be >= 3 and <= 99, Name must include at least 2 characters"  
}_  

* Same user as above, but gender =”mand” Observe the response (and status code)  
_{  
  "status": 400,  
  "msg": "Age must be >= 3 and <= 99, Name must include at least 2 characters, Gender must contain 'male' or 'female' "  
}_  

* Same user as above, but an illegal email.Observe the response (and status code)  
_{  
  "status": 400,  
  "msg": "Age must be >= 3 and <= 99, Name must include at least 2 characters, Gender must contain 'male' or 'female' , Not a valid email"  
}_  

#### Test the PUT method  
**Status:** 200  
_{  
  "id": 100,  
  "age": 39,  
  "name": "Donald Duck",  
  "gender": "female",  
  "email": "madeleineflynn@jumpstack.com"  
}_  

#### Test the DELETE method  
**Status:** 200  
Response: _{}_  
Browser: _{  
  "status": 404,  
  "msg": "No content found for this request"  
}_  
