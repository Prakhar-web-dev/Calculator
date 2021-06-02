// console.log("hello")

let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button');

let screenValue = " ";

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log("it is pressed", buttonText);

        if (buttonText == 'X') {
            buttonText = "*";
            // screen.value += buttonText;
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if (buttonText == "C") {
            screenValue = " ";
            screen.value = screenValue;
        }
        else if (buttonText == "=") {
            screen.value = eval(screenValue);
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}