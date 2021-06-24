
const url = "https://poetrydb.org/author,title/Shakespeare;Sonnet";
function generateQuote(){
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
    document.getElementById("titile").innerHTML = data.title; document.querySelector(".author").innerHTML = "- " + data.author;
   })
 .catch(function(err) {
    console.log(err); 
    });
 }