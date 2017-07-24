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

function id2screen(id){
    document.getElementsByName('result').value='12345';
}