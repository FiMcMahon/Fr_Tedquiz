const question = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('options'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];