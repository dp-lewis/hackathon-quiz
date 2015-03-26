var Question = Backbone.Model.extend({
  'defaults': {
    'correctAnswer': undefined,
    'givenAnswer': undefined,
    'answers': []
  },
  parse: function (data) {
    data.correctAnswer = data.answers[0]; // the first answer is always the correct one 
    data.id = Math.floor(Math.random() * 1000000);
    data.topic = data.niche.replace(' ', '-');
    return data;
  },
  'shuffleAnswers': function() {
    var answers = this.get('answers').sort(function() { return 0.5 - Math.random() });
    this.set('answers', answers);
  },
  'isCorrect': function () {
    var correct = false;
    if (this.get('givenAnswer') === this.get('correctAnswer')) {
      correct = true;
    }
    return correct;
  }
});
