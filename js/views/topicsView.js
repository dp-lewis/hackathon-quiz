/*global BaseView*/
var TopicsView = BaseView.extend({
  template: _.template($('#template-topics').html()),
  render: function () {
    this.$el.html(this.template());
    BaseView.prototype.render.apply(this, arguments);
  }
});
