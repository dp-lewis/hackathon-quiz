/*global AppView, ResultsView, Backbone, HomeView, QuestionListView, Questions, Player, TopicsView, DifficultyView*/
var myPlayer = new Player();

var activeQuestions = new Questions();

var myAppView = new AppView();
myAppView.render();
$('#app').html(myAppView.el);

var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "topic": "topic",
    "topic/:id": "difficulty",
    "topic/:id/:difficulty": "startQuiz",
    "results": "results"
  },

  home: function () {
    var view = new HomeView();
    view.render({ page: true });
    myAppView.goto(view);
  },

  topic: function () {
    var view = new TopicsView({
      model: myPlayer
    });
    view.render({page: true});
    myAppView.goto(view);
  },

  difficulty: function (id) {
    myPlayer.set('topic', id);
    var view = new DifficultyView({
      model: myPlayer
    });
    view.render({page: true});
    myAppView.goto(view);
  },

  startQuiz: function (topic, difficulty) {
    var myQuestions = new Questions(), view;

    myQuestions.fetch({
      'success': function () {

        activeQuestions = myQuestions.topic(topic, difficulty);
        view = new QuestionListView({
          'collection': activeQuestions
        });
        view.render({page: true});
        myAppView.goto(view);
      }
    });
  },

  results: function () {
    var view = new ResultsView({
      'collection': activeQuestions
    });
    view.render({page: true});
    myAppView.goto(view);
  }
});

var router = new Router();
Backbone.history.start();
