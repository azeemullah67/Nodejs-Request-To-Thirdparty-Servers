


//There are many ways to perform an HTTP POST request in Node, depending on the abstraction level you want to use.
//The simplest way to perform an HTTP request using Node is to use the Axios library:
//But you can also use simple request module of nodejs
//
var request = require("request");

var options = { method: 'GET',
  url: 'https://example.com/',
  qs: { guild_id: "sasas" },
  headers: 
   { 'Postman-Token': '96c9d82e-5af0-4610-86b0-79b927b715ce',
     'cache-control': 'no-cache',
     Cookie: 'connect.sid=Accrdoing to your request',
     Referer: '[{"key":"Referer","value":"no-referrer-when-downgrade","type":"text","enabled":true,"description":""}]',
     Accept: 'application/json',
     'Content-Type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

if( JSON.parse(  body ).error ){
    console.log( "failure" );
} else {
    console.log( "success" );


}



//With 
//////axios library



const axios = require('axios')

axios.post('https://flaviocopes.com/todos', {
  todo: 'Buy the milk'
})
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res)
})
.catch((error) => {
  console.error(error)
})


