"use strict";
import { variables } from "./variables.js";

let scores = 20;
let highscore = 0;
let mathRandomNumber = Math.trunc(Math.random() * 20) + 1;
variables.checkButton.addEventListener("click", checkButtonHandler);
variables.againButton.addEventListener("click", againButtonHandler);

function displayMessage (message) {
    variables.message.textContent = message;
}

function checkButtonHandler() {
let value = Number(document.querySelector(".guess").value);

    if (!value) {
        displayMessage("⛔️ Not a number");
    } else if (value === mathRandomNumber) {
        displayMessage("👍 Correct number");
        variables.numberField.textContent = mathRandomNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";

        if (scores > highscore) {
            highscore = scores;
            variables.highscore.textContent = highscore;
        }
    } else if (value !== mathRandomNumber) {
        if (scores > 1) {
            displayMessage(value < mathRandomNumber ? "Too low!" : "Too high");
            scores--;
            variables.score.textContent = scores;
        } else {
            displayMessage("u lost");
            variables.score.textContent = 0;
        }
    }
}

function againButtonHandler() {
    scores = 20;
    variables.score.textContent = scores;
    mathRandomNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    variables.numberField.textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".guess").value = "";
}