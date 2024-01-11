function enter(e) {
    if (e.key === "Enter") {
        check();
    }

}
function check() {
    let check = document.getElementById("name");
    let result = document.getElementById("result");

    if (check.value.toUpperCase() == "HEDGEHOG") {
        result.style = "visibility: visible";
        result.innerText = "CORRECT";
        result.style.backgroundColor = "#24E055";
    }
    else {
        result.style = "visibility: visible";
        result.innerText = "INCORRECT, TRY AGAIN ";
        result.style.backgroundColor = "#E02429";
        /*
        if (check.value == "hedgehog") {
            result.style = "visibility: visible";
            result.innerText = "CORRECT";
            result.style.backgroundColor = "#24E055";
        }
        else {
            result.style = "visibility: visible";
            result.innerText = "INCORRECT, TRY AGAIN ";
            result.style.backgroundColor = "#E02429";
        }
        */
    }
}

function reset() {
    let check = document.getElementById("name");
    check.value = "";

    let result = document.getElementById("result");
    result.style = "visibility: hidden";
}