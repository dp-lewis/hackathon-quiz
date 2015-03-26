/*global BaseView*/
var AppView = BaseView.extend({

  goto: function (view) {

    var previous = this.currentPage || null;
    var next = view;

    if (previous) {
      previous.transitionOut(function () {
        previous.remove();
      });
    }

    next.render({ page: true });
    this.$el.append(next.$el);
    next.transitionIn();
    this.currentPage = next;

  }

});
