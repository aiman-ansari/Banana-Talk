let text_input = document.querySelector('#input')
let btn_translate = document.querySelector('#translate');
let output = document.querySelector('#output-field');

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationText (text){
    return serverURL + "?" + "text=" + text;
}
function errorHandler(error){
    console.log('error occured!');
    alert('Something wrong with server! Please try again after some time')
}

function buttonHandler(){
    var textTranslate = text_input.value
    fetch(getTranslationText(textTranslate))
    .then(response => response.json())
    .then(json =>{
        var translatedOutput = json.contents.translated
        output.innerText = translatedOutput
    })
    .catch(errorHandler)
}
btn_translate.addEventListener('click', buttonHandler);
