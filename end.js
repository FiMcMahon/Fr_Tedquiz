const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const totalScore = document.getElementById('totalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

totalScore.innerText = mostRecentScore;

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };