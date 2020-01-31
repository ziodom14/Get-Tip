function getTip () {
    var percent = document.getElementById("percent-tip").value;
    var dollar = document.getElementById("dollar-amount").value;
    var decimalpercent = percent / 100;
    var tip = decimalpercent * dollar;
    alert("The tip is " + tip);

}


