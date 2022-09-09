const highScores = document.querySelector("#high-scores-list");

let scoreslist =
    JSON.parse(window.localStorage.getItem("scoreslist")) || [];
console.log(scoreslist);

for (let i = 0; i < scoreslist.length; i++) {
    let scoreEl = document.createElement("li");
    scoreEl.textContent = `User: ${scoreslist[i].initials} - Score: ${scoreslist[i].score}`;
    highScores.appendChild(scoreEl);
}

