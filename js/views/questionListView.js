/*global Backbone, QuestionView*/
var QuestionListView = Backbone.View.extend({
  'tagName': 'question-list',
  'initialize': function () {
    this.collection.on('add', this.add, this);
    this.collection.on('reset', this.addAll, this);
  },
  'add':  function (model) {
    var view = new QuestionView({
      model: model
    });
    view.render();
    this.$el.append(view.el);
  },
  'render': function () {
    this.addAll();
  },
  'addAll': function () {
    this.collection.forEach(this.add, this);
  }
});
