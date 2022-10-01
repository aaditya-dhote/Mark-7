const inputBox=document.querySelector(".inputs");
const outputBox=document.querySelector(".outputs");
const buttonBox=document.querySelector(".buttons");

var serverUrl="https://api.funtranslations.com/translate/mandalorian.json"
function getTranslationUrl(input){
   return serverUrl +"?"+"text="+input
}

function onClick(){
var inputText=inputBox.value ;
fetch(getTranslationUrl(inputText))
.then(response=>response.json())
.then(json=>{
var translatedText=json.contents.translated;
outputBox.innerText=translatedText;

})

};




buttonBox.addEventListener("click",onClick)