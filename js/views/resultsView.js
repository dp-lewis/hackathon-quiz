/*global Backbone*/

var ResultsView = BaseView.extend({
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
    BaseView.prototype.render.apply(this, arguments);
  },
  'addAll': function () {
    this.collection.forEach(this.add, this);
  }
});
