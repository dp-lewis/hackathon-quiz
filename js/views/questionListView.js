/*global BaseView, QuestionView*/
var QuestionListView = BaseView.extend({
  'className': 'question-list',
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
    BaseView.prototype.render.apply(this, arguments);
  },
  'addAll': function () {
    this.collection.forEach(this.add, this);
    this.$el.find('.question:last-child').attr('data-last-question', 'true');
  }
});
