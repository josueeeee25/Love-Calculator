function calculateLove() {
    const name1 = document.getElementById("name1").value.trim().toLowerCase();
    const name2 = document.getElementById("name2").value.trim().toLowerCase();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
        return;
    }

    const loveScore = Math.floor(Math.random() * 100) + 1;

    document.getElementById("love-meter").innerHTML = `Love Score: ${loveScore}%`;

    if (loveScore > 80) {
        alert(`Your love score is ${loveScore}%. Wow, you're a perfect match!`);
    } else if (loveScore > 60) {
        alert(`Your love score is ${loveScore}%. You're quite compatible.`);
    } else if (loveScore > 40) {
        alert(`Your love score is ${loveScore}%. You are both sweet, but this may not be the right time.`);
    } else if (loveScore > 30) {
        alert(`Your love score is ${loveScore}%. You both have other priorities.`);
    } else {
        alert(`Your love score is ${loveScore}%. It's better to stay friends.`);
    }
}



