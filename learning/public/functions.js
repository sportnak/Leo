//get function to work
function changeColor(newStyle) {
    const buttons = document.getElementsByClassName('btn-info');
    for (var i=0; i<buttons.length; i++) {
        if (newStyle === 'style2'){
            buttons[i].classList.toggle("style1",false);
            buttons[i].classList.toggle("style2",true);
        } else {
            buttons[i].classList.toggle("style1",true);
            buttons[i].classList.toggle("style2",false);
        }
    }
}

function text(id){
    // remove all boxes
    var parent = document.getElementById("insertionDiv");
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }        
    // create new ones
    for (var i = 0; i < id; i++) {
        var div = document.createElement("div");
        var node = document.createTextNode("text");
        div.appendChild(node);

        var element = document.getElementById("insertionDiv");
        element.appendChild(div);
    }
}

function boxes(id){
    // remove all boxes
    var parent = document.getElementById("insertionDiv");
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }        
    // create new ones
    for (var i = 0; i < id; i++) {
        var div = document.createElement("div");
        var attrib = document.createAttribute("class")
        attrib.value = "box";
        div.setAttributeNode(attrib);
        //div.appendChild(div);

        var element = document.getElementById("insertionDiv");
        element.appendChild(div);
    }
}

