var questions = [
  '',
  'Favourite vegetable?',
  'Favourite fruit?',
  'Favourite country?',
  'Favourite sport to watch?',
  'Favourite sport to play?',
  'Favourite outdoor activity?',
  'Favourite cuisine?',
  'Favourite instrument?',
  'Favourite comedy?',
  'Favourite childhood book?',
  'Favourite actor/actress?',
  'Rivers or lakes?',
  'Cities or countryside?',
  'Travelling or settling?',
  'Rome or New York?',
  'Evenings or mornings?'
];
var noOfQuestions = questions.length;
var answers = [];
var myAnswers = ['', 
    'onion', 
    'pineapple', 
    'france', 
    'football',
    'table tennis',
    'climbing',
    'chinese',
    'piano',
    'blackadder',
    'horrid henry',
    'tom hanks',
    'rivers',
    'countryside',
    'travelling',
    'new york',
    'evenings'
];

setBackground();
main();

function setBackground() {
  document.body.style.backgroundColor = '#03C9A9';
}

function main() {
  //Setting up listeners
  var submit = document.getElementById('submit-answer');
  //Enter key listener
  window.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
      //Run submission code
      submission(submit);
    }
  });
  //Button click listener
  submit.addEventListener('click', () => submission(submit));
}

function submission(submit) {
    var answer = document.getElementById('answer');
    answer.focus();
    answer.classList.remove('invisible');
    var question = document.getElementById('question'); 
    answers.push(answer.value);
    question.innerHTML = '';
    console.log(answers);
    var text = getQuestion();
    answer.value = '';
    question.innerHTML = text;
    if (noOfQuestions == (answers.length )) {
      var endResult = finish();
      question.innerHTML = 'You matched ' + endResult + '% with Ed';
      submit.remove();
      answer.remove();
    }
}

function getQuestion() {
  questions = questions.slice(1);
  return questions[0];
}

function finish() {
  var percentage, match = (0, 0);
  for (var i=1; i<= answers.length - 1; i++) {
    console.log(i);
    if (answers[i].toLowerCase() == myAnswers[i].toLowerCase()) {
      match += 1;
    }
  }
  return calculatePercentage(answers.length - 1, match);
}

function calculatePercentage(total, matched) {
  return (matched / total) * 100;
}

//Features to implement
//Binary OR questions
//More complex data structure - [id, open/binary, option1, option2(opt.)]
//ex. [1, 'binary', 'rivers', 'lakes'], [2, 'open', 'vegetable', null]
var testQuestions = [
  [1, 'open', 'vegetable', null],
  [2, 'open', 'fruit', null],
  [3, 'open', 'country', null],
  [4, 'open', 'sport to watch', null],
  [5, 'open', 'sport to play', null],
  [6, 'open', 'outdoor activity', null],
  [7, 'open', 'cuisine', null],
  [8, 'open', 'instrument', null],
  [9, 'open', 'comedy', null],
  [10, 'open', 'childhood book', null],
  [11, 'open', 'actor/actress', null],
  [12, 'binary', 'rivers', 'lakes'],
  [13, 'binary', 'cities', 'countryside'],
  [14, 'binary', 'travelling', 'settling'],
  [15, 'binary', 'Rome', 'New York'],
  [16, 'binary', 'Evenings', 'Mornings']
];
