
function addNum(value) {
    var screen = document.getElementById("screen")
    screen.style.fontSize = "30px"
    screen.style.fontFamily = "Cabin"

    if (document.getElementById("screen").innerHTML === "") {
            if (value === "/" || value === "*" || value === "+" || value === ".") {
                document.getElementById("screen").innerHTML = null
            } else {
                document.getElementById("screen").innerHTML += value
            }
    } else {
        var validLast = checkOperator(value)
        if (validLast) {
            document.getElementById("screen").innerHTML += value
        }
    }  
}

function result() {
    if (document.getElementById("screen").innerHTML !== "") {
        document.getElementById("screen").innerHTML = eval(document.getElementById("screen").innerHTML)
    }
}

function reset() {
    document.getElementById("screen").innerHTML = null
}

function checkOperator(value) {
    var operators = ["+", "-", "/", "*", "."];
    if (jQuery.inArray(value, operators) !== -1) {
        var digits = document.getElementById("screen").innerHTML;
        var lastDigit = digits[digits.length - 1];
        
        if (jQuery.inArray(lastDigit, operators) === -1) {
            return true
        } else {
            return false
        }
    } else {
        return true
    }
}