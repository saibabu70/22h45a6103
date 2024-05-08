/*fetch=function used for making HTTP requests to fetch resources.(JSON style data,images,files) Simplifies asynchronous data fetching in javascript and used for interacting with API to retrive and send data asynchronously over the web. 

fetch(url,{methods :"POST",'GET',"PUT","DELETE"})
 
JSON = Javascript object Notation data interchanging fromat used for exchanging data between a server and a web application JSON files {key:value} or {value1,value2,value3} 

JSON.stringfy()=converts a JS object to JSON string.
JSON.parse()=converts a JSON string to a JS object.


*/
async function Saibabu_Prime(Api_value){
  console.log(Api_value)
  try{
    const response = await fetch(Api_value);
    console.log(response);
    const data=await response.json();
    console.log(data);
  }
  catch(error){
    console.log("Fetching error");
  }
}
const API="http://20.244.56.144/test/primes";
Saibabu_Prime(API);
