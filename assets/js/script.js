const QUESTION_BANK = [
    {
      id: '1',
      question: 'Which team\'s nickname is X?',
      options: [
        {
          text: 'A',
          isCorrect: true
        },
        {
          text: 'B',
        },
        {
          text: 'C',
        },
        {
          text: 'D',
        }
      ]
    },
    {
      id: '2',
      question: 'Which team\'s nickname is Y?',
      options: [
        {
          text: 'A',
          isCorrect: true
        },
        {
          text: 'B',
        },
        {
          text: 'C',
        },
        {
          text: 'D',
        }
      ]
    },
    {
      id: '1',
      question: 'Which team\'s nickname is X?',
      options: [
        {
          text: 'A',
          isCorrect: true
        },
        {
          text: 'B',
        },
        {
          text: 'C',
        },
        {
          text: 'D',
        }
      ]
    }
  ]


/*

function redirectToGame(e) {
    e.preventDefault();
    const name = document.querySelector('#new-user-name').value;
    if (name) {
       window.location.href = `game.html?name=${name}`;
    }
 }

 */

  /* Initialise quiz and question bank */

  function initialiseQuiz() {
    let questions = QUESTION_BANK;

    let html = `
    <h2>${questions}</h2>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    `;
    return html;

    
    // Now randoimse it
    // Pick first MAX_QUESTIONS from the list

    
  }
  var quiz = initialiseQuiz();
    document.getElementById("quiz-area").innerHTML = quiz; 
  