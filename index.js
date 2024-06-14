let text = document.getElementById("inputs")
let charactercount = document.getElementById("characters")
let wordcount =  document.getElementById("words")
let textPreview = document.getElementById("textpreview")


const upperCase=()=>{
    let res = text.value.toUpperCase();
    text.value = res;
    textPreview.innerText = res;
}
const lowerCase=()=>{
    let res = text.value.toLowerCase();
    text.value = res;
    textPreview.innerText = res;
}

const Clear=()=>{
    text.value = "";
    textPreview.innerText = ""
}

const Copy=()=>{
    text.select();
    navigator.clipboard.writeText(text.value)
    alert("copied to clipboard")
}
const removeSpace=()=>{

    let res  = text.value.replace(/\s+/g , ' ')
    text.value = res;
    textPreview.innerText = res;
}
const characterCount=()=>{
    let res = text.value.length;
    charactercount.innerText = `Number of Characters: ${res}`;
}

const wordCount=()=>{
    let res = text.value.split(" ")
    let final = res.length
    wordcount.innerText = `Number of Words: ${final}`;
}


const isReverse=()=>{
    let res = text.value.split("").reverse().join("")
    text.value = res
    textPreview.innerText = res;
}



text.addEventListener('input',(e)=>{
        textPreview.innerText = e.target.value;
})


const speechListner=()=>{
    let msg = new SpeechSynthesisUtterance(text.value)
    window.speechSynthesis.speak(msg)
}