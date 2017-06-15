
function addNum(value) {
    var screen = $("#screen");
    var screenHTML = $("#screen").html();

    screen.css("fontSize", 30);
    screen.css("fontFamily", "Cabin");

    if (screenHTML === "") {
            if (value === "/" || value === "*" || value === "+" || value === ".") {
                $("#screen").html(null)
            } else {
               $("#screen").html(value)
            }
    } else {
        var validLast = checkOperator(value)
        if (validLast) {
            $("#screen").append(value)
        }
    }  
}

function result() {
    var screenHTML = $("#screen").html();
    if (screenHTML !== "") {
        $("#screen").html(eval(screenHTML));
    }
}

function reset() {
    $("#screen").html(null);
}

function checkOperator(value) {
    var operators = ["+", "-", "/", "*", "."];
    if (jQuery.inArray(value, operators) !== -1) {
        var digits = $("#screen").html();
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