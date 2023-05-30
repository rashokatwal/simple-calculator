var buttons = document.getElementsByClassName('grid-item');
var calculation = document.getElementById('calculation');
var resultDisplay = document.getElementById('result');
var value = "";
var result = "";
var tempValue = "";
var tempResult = "";
var displayValue = "";
var tempDisplayValue = "";

Object.values(buttons).forEach(button => {

    if (button.getAttribute('value') != null){
        button.onclick = function(){
            update(this.getAttribute('value'));
        };
    }
});

function clear() {
    value = "";
    result = "";
    tempValue = "";
    displayValue = "";
}

function del() {
    if (displayValue == "error") {
        value = tempValue;
        displayValue = tempDisplayValue;
    }
    value = value.slice(0,-1);
    displayValue = displayValue.slice(0,-1);
    
    
    l = value.length - 1;
    tempValue = value;

    if (value[l] == "+" || value[l] == "-" || value[l] == "/" || value[l] == "*") {
        console.log(value.slice(0,-1))
        result = eval(value.slice(0,-1));
    }
    else if (value[l] != "+" && value[l] != "-" && value[l] != "/" && value[l] != "*" && value[l] != null){
        result = eval(value);   
    }
    else {
        result = "";
    }
}

function equal() {
    calculation.style.fontSize = "45px"
    console.log(value)
    try {
        value = eval(value).toString();
        displayValue = value;
        result = "";
    }
    catch (error) {
        tempValue = value;
        tempDisplayValue = displayValue;
        displayValue = "error";
        result = "";
    }
}

function update(val) {

    if (calculation.style.fontSize == "45px") {
        calculation.style.fontSize = "35px"
    }

    if (val != "clear" && val != "delete" && val != "equal") {
        value += val;
        displayValue += val.replace("*","x");
        if (val != "*" && val != "+" && val != "-" && val != "/") {
            result = eval(value);
        }
    }
    else if (val == "clear") {
        clear()
    }
    else if (val == "delete") {
        if (value != "") {
            del()
        }
    }
    else if (val == "equal") {
        if (value != "") {
            equal()
        }
        
    }

    
    
    calculation.innerHTML = displayValue
    resultDisplay.innerHTML = result
}    

function toggleMode() {

    
    document.body.classList.toggle('light-mode')
}