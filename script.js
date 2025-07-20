let button = document.getElementsByClassName("btn");
let screen = document.getElementById("screen")

let text = "";
for (let i of button) {
    i.onclick = () => {
        if (i.innerHTML == "1" || i.innerHTML == "2" || i.innerHTML == "3" || i.innerHTML == "4" || i.innerHTML == "5" || i.innerHTML == "6" || i.innerHTML == "7" || i.innerHTML == "8" || i.innerHTML == "9" || i.innerHTML == "0" || i.innerHTML == "00") {
            text += i.innerHTML;
            screen.innerHTML = text;
        } else if (["+", "-", "*", "/", "%"].includes(i.innerHTML) && ["+", "-", "*", "/", "%"].includes(text.slice(-1))) {
            text = text.slice(0, -1) + i.innerHTML;
            screen.innerHTML = text;
        } else if (i.innerHTML == "+" || i.innerHTML == "-" || i.innerHTML == "*" || i.innerHTML == "/" || i.innerHTML == "." || i.innerHTML == "%") {
            text += i.innerHTML;
            screen.innerHTML = text;
        } else if (i.innerHTML == "c") {
            text = "";
            screen.innerHTML = "0";
        } else if (i.innerHTML == "X") {
            text = text.slice(0, text.length - 1);
            screen.innerHTML = text;
        } else if (i.innerHTML == "=") {
            try {
                text = eval(text).toString();
            } catch {
                text = "Error";
            }
            screen.innerHTML = text;
        }
    }
}
