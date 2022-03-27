const quizData = [
    {
        question: 'How old am I?',
        a: '20',
        b: '9',
        c: '2',
        d: '5',
        correct: 'a'
    }, {
        question: 'Best programming language?',
        a: 'Java',
        b: 'Python',
        c: 'C',
        d: 'JavaScript',
        correct: 'a'
    }, {
        question: 'Question 3',
        a: 'Answear 1',
        b: 'Answear 2',
        c: 'Answear 3',
        d: 'Answear 4',
        correct: 'c'
    }, {
        question: 'Question 4',
        a: 'Answear 1',
        b: 'Answear 2',
        c: 'Answear 3',
        d: 'Answear 4',
        correct: 'b'
    }, {
        question: 'Question 5',
        a: 'Answear 1',
        b: 'Answear 2',
        c: 'Answear 3',
        d: 'Answear 4',
        correct: 'd'
    }
]

const quiz = document.getElementById('quiz');  
const answersEl = document.querySelectorAll(".answer");


const a_text = document.getElementById('a_text');  
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text'); 
const d_text = document.getElementById('d_text'); 

const submitBtn = document.getElementById('submit');
const questionEl = document.getElementById('question');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function getSelected() {
    const answersEl = document.querySelectorAll(".answer");
    let answer = undefined;
    answersEl.forEach((answerEl) => {
        if (answerEl.checked){
            answer =  answerEl.id;
        }
    });
    return answer;
}

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function deselectAnswer(){
    answersEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected();
    
    if (answer){
        if (answer == quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = 
                `<h2>
                    You answered correctly at ${score}/
                    ${quizData.length} questions.
                </h2>
                <button onClick="location.reload()">Reload</button>`;
        }    
    }

})