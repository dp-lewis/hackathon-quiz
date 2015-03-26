/*global BaseView*/

var ResultView = BaseView.extend({
  template: _.template($('#template-result').html()),
  render: function () {
    var data = this.model.toJSON();
    data.correct = this.model.isCorrect();
    this.$el.html(this.template(data));
    BaseView.prototype.render.apply(this, arguments);
  }
});
