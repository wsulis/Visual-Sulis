const celciusInput = document.getElementById("celcius");
const reamurInput = document.getElementById("reamur");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i< inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);

        switch (e.target.name) {
            case "celcius":
                reamurInput.value = value * 0.8; 
                fahrenheitInput.value = (value * 1.8 ) + 32;
                kelvinInput.value = value + 273.15;
                break;
            case "reamur":
                celciusInput.value = value * 1.25;
                fahrenheitInput.value = (value * 2.25) + 32;
                kelvinInput.value = (value * 1.25) + 273.15;
            case "fahrenheit":
                celciusInput.value = (value - 32 ) / 1.8;
                reamurInput.value = (value - 32)* 0.444;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                break;
            case "kelvin":
                celciusInput.value = value - 273.15;
                reamurInput.value = (value - 273.15) * 0.8;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                break;
        }
    })
}