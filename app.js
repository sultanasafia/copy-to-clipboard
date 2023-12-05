let csstext = document.getElementById('csstext')
let cssbtn = document.getElementById('cssbtn')
cssbtn.onclick = function(){
    csstext.select()
    document.execCommand('copy')
    cssbtn.innerText= "copied"
}
// ==================css
let text = document.getElementById('text')
let htmlbtn = document.getElementById('htmlbtn')
htmlbtn.onclick = function(){
    text.select()
    document.execCommand('copy')
    htmlbtn.innerText= "copied"
}
// ==================js
let jstext = document.getElementById('jstext')
let JavaScriptbtn = document.getElementById('JavaScriptbtn')
JavaScriptbtn.onclick = function(){
    jstext.select()
    document.execCommand('copy')
    JavaScriptbtn.innerText= "copied"
}