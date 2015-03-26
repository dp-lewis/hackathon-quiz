/*global Backbone*/
var QuestionView = Backbone.View.extend({
  template: _.template($('#template-question').html()),
  initialize: function () {
    this.model.on('change:givenAnswer', this.renderSelection, this);
  },
  events: {
    'click button': 'answer'
  },
  render: function () {
    this.model.shuffleAnswers();
    this.$el.html(this.template(this.model.toJSON()));
  },
  answer: function (ev) {
    this.model.set('givenAnswer', $(ev.target).data('answer'));
    this.checkAnswer();
  },
  renderSelection: function () {
    this.$el.find('button.is-selected').removeClass('is-selected');
    this.$el.find('button[data-answer="' + this.model.get('givenAnswer') + '"]').addClass('is-selected');
  },
  checkAnswer: function () {
    if (this.model.isCorrect()) {
      alert('yup');
    } else {
      alert('nope');
    }
  }
});
