/*global Backbone, BaseView*/

var HomeView = BaseView.extend({
  template: _.template($('#template-home').html()),
  render: function () {
    this.$el.html(this.template());
    BaseView.prototype.render.apply(this, arguments);
  }
});
