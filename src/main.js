const { invoke } = window.__TAURI__.tauri;


// Initialize scoring
let armyAntScore = 0
let bengalTigerScore = 0

// Set score to 0
document.getElementById("army-score").textContent += armyAntScore
document.getElementById("bengal-score").textContent += bengalTigerScore

//Army ants buttons
function increaseAnt(){
    armyAntScore += 1
    document.getElementById("army-score").textContent = "Current score: " + armyAntScore
}
function decreaseAnt(){
    armyAntScore -= 1
    document.getElementById("army-score").textContent = "Current score: " + armyAntScore
}

//Bengal tigers buttons
function increaseBengal(){
    bengalTigerScore += 1
    document.getElementById("bengal-score").textContent = "Current score: " + bengalTigerScore
}
function decreaseBengal(){
    bengalTigerScore -= 1
    document.getElementById("bengal-score").textContent = "Current score: " + bengalTigerScore
}

