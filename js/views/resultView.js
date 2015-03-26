/*global Backbone*/

var ResultView = Backbone.View.extend({
  template: _.template($('#template-result').html()),
  render: function () {
    var data = this.model.toJSON();

    data.correct = this.model.isCorrect();
    this.$el.html(this.template(data));
  }
});
