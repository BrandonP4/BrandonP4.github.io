function bigFont(){
    document.getElementById("textArea").style.fontSize = "24pt"; 
}

function fancyRadio(){
    document.getElementById("textArea").style.fontWeight = "bold";
    document.getElementById("textArea").style.color = "blue";
    document.getElementById("textArea").style.textDecoration = "underline";
}
function boringRadio(){
    document.getElementById("textArea").style.fontWeight = "normal";
    document.getElementById("textArea").style.color = "black";
    document.getElementById("textArea").style.textDecoration = "none";
    document.getElementById("textArea").style.fontSize = "10pt"; 
}

function addMoo(){
    var text = document.getElementById("textArea").value;
    var parts = text.split(".");
    text = parts.join("-Moo");
    document.getElementById("textArea").value = text;
}