/*global Backbone*/

var HomeView = Backbone.View.extend({
  template: _.template($('#template-home').html()),
  render: function () {
    this.$el.html(this.template());
  }
});
