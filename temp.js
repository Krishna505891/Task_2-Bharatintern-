document.addEventListener("DOMContentLoaded", function() {
    const temperatureInput = document.getElementById("temperatureInput");
    const unitSelect = document.getElementById("unitSelect");
    const convertButton = document.getElementById("convertButton");
    const result = document.getElementById("result");
    const convertedTemperature = document.getElementById("convertedTemperature");

    convertButton.addEventListener("click", function() {
        const inputValue = parseFloat(temperatureInput.value);
        const selectedUnit = unitSelect.value;
        let convertedValue;

        if (selectedUnit === "celsius") {
            convertedValue = (inputValue + 32) * (9 / 5);
        } else {
            convertedValue = (inputValue - 32) * (5 / 9);
        }

        convertedTemperature.textContent = `${inputValue}°${selectedUnit.toUpperCase()} is ${convertedValue.toFixed(2)}°${selectedUnit === "celsius" ? "F" : "C"}`;
        result.classList.remove("hidden");
    });
});