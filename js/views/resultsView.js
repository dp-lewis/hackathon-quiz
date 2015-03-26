/*global Backbone*/

var ResultsView = Backbone.View.extend({
  template: _.template($('#template-results').html()),
  render: function () {
    this.$el.html(this.template());
  },
  'initialize': function () {
    this.collection.on('add', this.add, this);
    this.collection.on('reset', this.addAll, this);
  },
  'add':  function (model) {
    var view = new ResultView({
      model: model
    });
    view.render();
    this.$el.append(view.el);
  },
  'render': function () {
  	this.$el.html(this.template());
    this.addAll();
  },
  'addAll': function () {
    this.collection.forEach(this.add, this);
  }
});
