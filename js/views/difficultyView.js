/*global Backbone*/
var DifficultyView = Backbone.View.extend({
  template: _.template($('#template-difficulty').html()),
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
