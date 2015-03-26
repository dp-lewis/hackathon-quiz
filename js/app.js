/*global Question, QuestionView*/

var myQuestion = new Question({
  'question': 'this is the question for the test',
  'answers': [
    'correct answer',
    'wrong one',
    'wrong two',
    'wrong three'
  ]
}, { parse: true});

var myQuestionView = new QuestionView({
  'model': myQuestion
});


myQuestionView.render();

$('#app').html(myQuestionView.el);
