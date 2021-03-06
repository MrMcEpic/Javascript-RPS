let docResult = document.getElementById("result"),
    docGames = document.getElementById("games"),
    docWins = document.getElementById("wins"),
    docLoss = document.getElementById("losses"),
    docTies = document.getElementById("ties"),
    docCPU = document.getElementById("cpu"),
    docPlayer = document.getElementById("player"),
    dict = {
        0: "rock",
        1: "paper",
        2: "scissors"
    },
    wins = 0,
    ties = 0,
    loss = 0,
    games = 0;

function capFL(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function compPick() {
    return Math.floor(Math.random() * 3);
}

win = (answer) => {
    if (answer) {
        docResult.className = "wins";
        docResult.innerHTML = "Win!";
        wins++;
    } else {
        docResult.className = "losses";
        docResult.innerHTML = "Lose";
        loss++;
    }
};

updates = () => {
    docGames.innerHTML = `Games: ${games}`;
    docWins.innerHTML = `Wins: ${wins}`;
    docLoss.innerHTML = `Losses: ${loss}`;
    docTies.innerHTML = `Ties: ${ties}`;
};

function logic(user_choice) {
    games++;
    cpu = dict[compPick()];
    docCPU.innerHTML = "CPU: " + capFL(cpu);
    docPlayer.innerHTML = "Player: " + capFL(user_choice);
    if (user_choice === cpu) {
        docResult.className = "ties";
        docResult.innerHTML = "Tie";
        ties++;
    } else {
        switch (user_choice) {
            case "rock":
                cpu === "scissors" ? win(true) : win(false);
                break;
            case "paper":
                cpu === "rock" ? win(true) : win(false);
                break;
            case "scissors":
                cpu === "paper" ? win(true) : win(false);
                break;
        }
    }
    updates();
}