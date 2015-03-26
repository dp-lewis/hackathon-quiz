/*global Backbone*/
var BaseView = Backbone.View.extend({

  transitionIn: function (callback) {

    var view = this;

    var animateIn = function () {
      view.$el.addClass('is-visible');
      view.$el.one('transitionend', function () {
        if (_.isFunction(callback)) {
          callback();
        }
      });
    };

    _.delay(animateIn, 20);

  },

  transitionOut: function (callback) {

    var view = this;

    view.$el.removeClass('is-visible');
    view.$el.one('transitionend', function () {
      if (_.isFunction(callback)) {
        callback();
      }
    });

  },

  render: function (options) {

    options = options || {};

    if (options.page === true) {
      this.$el.addClass('page');
    }

    return this;

  },

});
