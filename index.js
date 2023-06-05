let screen=document.getElementById("screen");

function display(value){
    screen.value += value;
}

function calculate(){
    try{
        screen.value= eval(screen.value);
    }
    catch(e)
    {
        "error"
    }
}

function AC(){
    screen.value= null;
}

