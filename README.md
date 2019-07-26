# Nodejs-Request-To-Thirdparty-Servers

HTTP Status CodesBefore diving into the communication with other APIs, let's review the HTTP status codes we may encounter during the process. They describe the outcome of our requests and are essential for error handling.



1 - Informational


2 - Success: These status codes indicate that our request was received and processed correctly. The most common success codes are 200 OK, 201 Created and 204 No Content.


3 - Redirection: This group shows that the client had to do an additional action to complete the request. The most common redirection codes are 301 Moved Permanently, 304 Not Modified.


4 - Client Error: This class of status codes is used when the request sent by the client was faulty in some way. The server response usually contains the explanation of the error. The most common client error codes are 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict.


5 - Server Error: These codes are sent when the server failed to fulfill a valid request due to some error. The cause may be a bug in the code or some temporary or permanent incapability. The most common server error codes are 500 Internal Server Error, 503 Service Unavailable.
