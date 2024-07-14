// 1. Create an application that shows a gray square. It should have a “Change” button, which when clicked on, the fill color of the square should change to light blue.

// When you click again, the color of the square should change to red.
// Make sure that every time there is a color change, the name of the color appears inside the square.

const colors = ["gray", "lightblue", "red", "green", "yellow", "purple", "orange", "pink", "black", "brown", "white"];
let colorSeleccionado = 0
document.getElementById("button").addEventListener("click", () => {
    colorSeleccionado = (colorSeleccionado + 1) % colors.length;
    const cambiarDiv = document.querySelector(".divColor")
    cambiarDiv.style.backgroundColor = colors[colorSeleccionado]
    cambiarDiv.innerText = colors[colorSeleccionado]
});

// 2. Create an application that shows a gray square. It must have a text input, and when writing in it, what is being written must appear printed inside the square.

// Create a button to clear the content of the square.
document.getElementById("input").addEventListener("input", (escribir) => {
    const cambiarDiv = document.querySelector(".divInput")
    cambiarDiv.innerText = escribir.target.value//target es el input que escribimos
});
document.getElementById("clear").addEventListener("click", () => {
    const inputField = document.getElementById("input")
    inputField.value = ""
    const cambiarDiv = document.querySelector(".divInput")
    cambiarDiv.innerText = ""
});

// 3. Create an application that calculates the body mass index. When you press the “calculate” button, it should show the result in the corresponding input.

const divCorporal = document.querySelector(".divCorporal")
const inputCms = document.getElementById("inputCms")
const inputKgs = document.getElementById("inputKgs")
document.getElementById("calculate").addEventListener("click", () => {
    const existingResultDiv = document.querySelector(".resultDiv");
    if (existingResultDiv) {
        existingResultDiv.remove();
    }
    const divResult = document.createElement("div")
    divResult.classList.add("resultDiv")
    divResult.innerHTML = `
    <div class="border-2 border-black mt-5 p-5">
    <h2 class="font-bold" >Resultado</h2 >
    <p>su índice de masa corporal es:</p>
    <input type="text" class="mt-5 border-2 border-gray-400" value=${inputCms.value / 100 * inputKgs.value}> 
    </div>
    `
    divCorporal.appendChild(divResult)
});

// 4. Create a currency conversion application.
// Taking by default 1 dollar = 500 (Argentine, Chilean, Uruguayan peso, etc.).

// The user must be able to enter an amount in a local currency and it must be converted to its equivalent in dollars.

// The program must also be able to convert from dollars to local currency and a button must also be included to clear the inputs.
const inputMoneda1 = document.getElementById("inputMoneda1")
const inputDolares1 = document.getElementById("inputDolares1")
document.getElementById("convert1").addEventListener("click", () => {
    if (inputMoneda1.value == "") {
        inputMoneda1.value = inputDolares1.value * 500
    }
    inputDolares1.value = inputMoneda1.value / 500
});

const inputMoneda2 = document.getElementById("inputMoneda2")
const inputDolares2 = document.getElementById("inputDolares2")
document.getElementById("convert2").addEventListener("click", () => {
    inputDolares2.value = inputMoneda2.value / 500
});

document.getElementById("borrar1").addEventListener("click", () => {
    inputMoneda2.value = "0"
    inputDolares2.value = "0"
});

const inputMoneda3 = document.getElementById("inputMoneda3")
const inputDolares3 = document.getElementById("inputDolares3")
document.getElementById("convert3").addEventListener("click", () => {
    inputDolares3.value = inputMoneda3.value * 500
});

document.getElementById("borrar2").addEventListener("click", () => {
    inputMoneda3.value = "0"
    inputDolares3.value = "0"
});


const searchedBeers = [];
const filterBeers = (beersList, partName, ibuChosen) => {
    const filteredBeers = beersList.filter((beer) => {
        return beer.name.toLowerCase().includes(partName.toLowerCase()) && beer.ibu > ibuChosen;
    });

    filteredBeers.forEach((beer) => {
        searchedBeers.push(beer.name)
    });

    //return filteredBeers
}

filterBeers(beers, "BE", 10)
console.log(searchedBeers);


