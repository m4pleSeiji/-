let display = document.getElementById("display");


function append(value) {

    display.value += value;

}



function clearDisplay() {

    display.value = "";

}



function deleteNumber() {

    display.value = display.value.slice(0, -1);

}



function calculate() {


    let expression = display.value;


    // Secret code
    if (expression === "6*7") {


        document.querySelector(".calculator").style.display = "none";


        document.getElementById("videoBox").style.display = "block";


        return;

    }



    try {

        display.value = eval(expression);

    }

    catch {

        display.value = "Error";

    }

}