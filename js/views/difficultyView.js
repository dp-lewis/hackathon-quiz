/*global BaseView*/
var DifficultyView = BaseView.extend({
  template: _.template($('#template-difficulty').html()),
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    BaseView.prototype.render.apply(this, arguments);
  }
});
