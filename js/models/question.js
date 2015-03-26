var Question = Backbone.Model.extend({
  'defaults': {
    'correctAnswer': undefined,
    'givenAnswer': undefined,
    'answers': []
  },
  parse: function (data) {
    data.correctAnswer = data.answers[0]; // the first answer is always the correct one 
    return data;
  },
  'shuffleAnswers': function() {
    var answers = this.get('answers').sort(function() { return 0.5 - Math.random() });
    this.set('answers', answers);
  },
  'isCorrect': function () {
    var correct = false;
    console.log(this.get('correctAnswer'));
    if (this.get('givenAnswer') === this.get('correctAnswer')) {
      correct = true;
    }
    return correct;
  }
});
