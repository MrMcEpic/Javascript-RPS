function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function compPick() {
    return Math.floor(Math.random() * 3);
}

dict = {
    0: "rock",
    1: "paper",
    2: "scissors"
};
let wins = 0;
let ties = 0;
let loss = 0;
let games = 0;
const win = (answer) => {
    if (answer) {
        document.getElementById("result").innerHTML = "Win!";
        wins++;
    } else {
        document.getElementById("result").innerHTML = "Lose";
        loss++;
    }
};

const updates = () => {
    document.getElementById("games").innerHTML = `Games: ${games}`;
    document.getElementById("wins").innerHTML = `Wins: ${wins}`;
    document.getElementById("losses").innerHTML = `Losses: ${loss}`;
    document.getElementById("ties").innerHTML = `Ties: ${ties}`;
};

function logic(user_choice) {
    games++;
    cpu = dict[compPick()];
    document.getElementById("cpu").innerHTML = "CPU: " + capitalizeFirstLetter(cpu);
    document.getElementById("player").innerHTML = "Player: " + capitalizeFirstLetter(user_choice);
    if (user_choice === cpu) {
        document.getElementById("result").innerHTML = "Tie";
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