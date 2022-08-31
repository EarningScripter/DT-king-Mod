"use strict";
// Animation delay multiplier for the number balls display sequence:
const animationDelayMultiplier = 0.15;
// build the numbers row:
const _buildResultsHTML = numbers => {
    return numbers.map((number, index) => {
        const animationDelay = index * animationDelayMultiplier + 's';
        return `<span class="number" style="animation-delay: ${animationDelay};">${number}</span>`;
    }).join('');
};
// Generate a single unique number:
const _generateNumber = (numbersArray, numbersHTML, totalNumbers = 6, minNumber = 1, maxNumber = 60) => {
    let number = Math.ceil(Math.random() * (maxNumber - minNumber + 1)) - 1 + minNumber;
    const formatedNumber = number < 10 ? String('0' + number) : number;
    return numbersArray.indexOf(formatedNumber) < 0 ? numbersArray.push(formatedNumber) : _generateNumber(...arguments);
};
// Helper function to get the value of an element by id:
const getVal = id => parseInt(document.getElementById(id).value);
// Main Function:
const getLockyNumbers = () => {
    // Create the Array to store the numbers and the string for HTML template:
    const numbersArray = [];
    let numbersHTML = '';
    // Update the values:
    const qtySlots = getVal('numberSlots');
    const minNumber = getVal('minNumber');
    const maxNumber = getVal('maxNumber');
    // ---
    // Start mapping the numbers:
    if (maxNumber >= qtySlots) {
        for (let i = 0; i < qtySlots; i++) {
            _generateNumber(numbersArray, numbersHTML, qtySlots, minNumber, maxNumber);
        }
    }
    else {
        window.alert("Number of slots is lower than the available numbers.\nTry to higher the Max Number value.");
    }
    // Check if the numbers fill all the slots:
    if (numbersArray.length === qtySlots) {
        // order the numbers and convert it to html formated string:
        const luckyNumbers = _buildResultsHTML(numbersArray.sort());
        // Set the complete html:
        const resultsTemplate = `<h1>Teenpatti Winner Hacked Successfully:</h1><div class="numbers">${luckyNumbers}</div>`;
        // Write the results in DOM:
        document.getElementById('resultsContainer').innerHTML = resultsTemplate;
    }
};
getLockyNumbers();
