const questions = [
    {
    question: 'What are unit labor costs?',
    answers: [
    { text: 'Unit labor costs is the cost of labor in one country divided by the labour cost in another country', correct: false },
    { text: 'Unit labor costs is the cost of labor divided by the cost of capital.', correct: false },
    { text: 'Unit labor costs is the cost of labor divided by the output of labor within a given time frame', correct: true },
    { text: 'Unit labor costs is the cost of labor divided by the cost of land', correct: false },
    ],
    },
    {
    question: 'What are Relative unit labor costs?',
    answers: [
    { text: 'Relative unit labor costs compare the cost of labor in one country to another countries capital', correct: false },
    { text: 'Relative unit labor costs compare the cost of labor in one country to another.', correct: true },
    { text: 'Relative unit labor costs compare the cost of labor relative to capital', correct: false },
    { text: 'Relative unit labor costs compare the cost of labor relative to land', correct: false },
    ],
    },
    {
    question: 'Relative Export Prices are:',
    answers: [
    { text: 'Relative export prices compare the prices of a countries exports to those of its competitors.', correct: true },
    { text: 'Relative export prices compare the prices of a countries exports to the countries import prices', correct: false },
    { text: 'Relative export prices compare the prices of a countries capital prices', correct: false },
    { text: 'Relative export prices compare the prices of a countries labor costs', correct: false },
    ],
    },
    {
    question: 'Which of these factors DO NOT affect international competitiveness?',
    answers: [
    { text: 'Labor Costs', correct: false },
    { text: 'Production Efficiency', correct: false },
    { text: 'Exchange Rates', correct: false },
    { text: 'Allocative Efficiency', correct: true },
    ],
    },
    {
    question: 'How can Quality and Innovation influence international competitiveness?',
    answers: [
    { text: 'High product quality and continuous innovation can enhance allocative efficency.', correct: false },
    { text: 'High product quality and continuous innovation can enhance the provision of public goods', correct: false },
    { text: 'High product quality and continuous innovation can enhance political stability.', correct: false },
    { text: 'High product quality and continuous innovation can enhance competitiveness.', correct: true },
    ],
    },
    {
    question: 'Which of these is NOT a way in which Infrastructure and Logistics influence international competitiveness?',
    answers: [
    { text: 'Shortened supply chains can reduce costs and improve delivery times.', correct: false },
    { text: 'Efficient transportation, communication, and infrastructure support competitiveness.', correct: false },
    { text: 'Infrastructure allow governments to transfer public goods quickly.', correct: true },
    { text: 'Infrastructure allow companies to transfer raw materials quickly', correct: false },
    ],
    },
    {
    question: 'Which of these government policies do NOT directly influence international competitiveness?',
    answers: [
    { text: 'Favorable trade policies.', correct: false },
    { text: 'Tax incentives.', correct: false },
    { text: 'Government spending on local councils.', correct: true },
    { text: 'Stable political environments and legal systems', correct: false },
    ],
    },
    {
    question: 'Which of these are NOT Benefits of Being Internationally Competitive?',
    answers: [
    { text: 'Increased Exports: Competitive countries can sell more goods and services abroad, boosting economic growth.', correct: false },
    { text: 'Increased Imports: Competitive countries can buy more goods and services abroad, boosting economic growth.', correct: true },
    { text: 'Job Creation: Export-oriented industries often create jobs, reducing unemployment.', correct: false },
    { text: 'Higher Standards of Living: International competitiveness can lead to higher incomes and improved living standards for citizens.', correct: false },
    ],
    },
    {
    question: 'Which of these are NOT Problems of Being Internationally Uncompetitive?',
    answers: [
    { text: 'Trade Deficits: Uncompetitive countries may import more than they export, leading to trade imbalances.', correct: false },
    { text: 'Trade Surplus: Uncompetitive countries may export more than they import, leading to trade imbalances.', correct: true },
    { text: 'Unemployment: Uncompetitive industries may shed jobs, leading to high unemployment rates.', correct: false },
    { text: 'Income Inequality: A lack of competitiveness can exacerbate income inequality as some industries decline while others thrive.', correct: false },
    ],
    },
    ];
  
  const questionElement = document.getElementById('question');
  // questionElement.innerText = 'DELL BOY';
  const answerButtons = document.getElementById('answer-buttons');
  const nextButton = document.getElementById('next-btn');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + '. ' + currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
    });
  }
  
  function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
      selectedBtn.classList.add('correct');
      score++;
    } else {
      selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === 'true') {
        button.classList.add('correct');
      }
      button.disabled = true;
    });
    nextButton.style.display = 'block';
  }
  
  function showScore() {
      resetState();
      questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
      nextButton.innerHTML = "Play Again";
      nextButton.style.display = "block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  startQuiz();