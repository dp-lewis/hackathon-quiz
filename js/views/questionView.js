/*global Backbone*/
var QuestionView = Backbone.View.extend({
  'className': 'question',
  template: _.template($('#template-question').html()),
  initialize: function () {
    this.model.on('change:givenAnswer', this.renderSelection, this);
  },
  events: {
    'submit form': 'answer'
  },
  render: function () {
    this.model.shuffleAnswers();
    this.$el.html(this.template(this.model.toJSON()));
  },
  answer: function (ev) {
    ev.preventDefault();
    this.model.set('givenAnswer', this.$el.find('input:checked').val());
    this.checkAnswer();
  },
  renderSelection: function () {
    this.$el.find('button.is-selected').removeClass('is-selected');
    this.$el.find('button[data-answer="' + this.model.get('givenAnswer') + '"]').addClass('is-selected');
  },
  checkAnswer: function () {
    this.$el.addClass('done');
    if (this.model.isCorrect()) {
      alert('yup');
    } else {
      alert('nope');
    }
  }
});
