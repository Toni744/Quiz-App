const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const submitButton = document.getElementById('submit')

const myQuestions = [
    {
        question: "Who first flew an aeroplane?",
        answers: {
            a: "James edison",
            b: "Patrice lumumba",
            c: "The Wright brothers"
        },
        correctAnswer: "c"
    },
    {
        question: " What is the capital of France?",
        answers: {
            a: "Caracas",
            b: "San Diego",
            c: "Normandy",
            d: "Paris"
        },
        correctAnswer: "d"
    },
    {
        question: "What tool can you use to ensure code quality?",
        answers: {
            a: "angular",
            b: "spherical",
            c: "ESLint",
            d: "jQuery"
        },
        correctAnswer: "c"
    }


]

function buildQuiz(){
    const output = []; // variable to store the HTML output

    myQuestions.forEach( //for each question
        (currentQUestion, questionNumber) => {

            const answers = []; // variable to store list of possible answers

            for(letter in currentQuestion.answers){ // for each available answers
                answers.push( // radio button addition
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}"></input>
                        ${letter} :
                        ${currentQUestion.answers[letter]} 
                    </label>`
                );
            } 
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')}`// add this q and its answers to output
            );
        }
    );
    quizContainer.innerHTML = output.join('');
}
function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers'); // gather answers from our quiz
    let numCorrect = 0; // keeping track of users answers
    myQuestions.forEach((currentQuestion, questionNumber) => {
        //find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name =question${questionNumber}]: checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value

        //if answer is correct
        if (userAnswer === currentQUestion.correctAnswer){

        //add to correct answers
        numCorrect++

        // color answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
        }
        //if answer is wrong or blank
        else{
            //color the answer red
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    //show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}



buildQuiz();

submitButton.addEventListener('click', showResults);

