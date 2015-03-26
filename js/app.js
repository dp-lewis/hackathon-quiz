/*global ResultsView, Backbone, HomeView, QuestionListView, Questions, Player, TopicsView, DifficultyView*/
var myPlayer = new Player();

var activeQuestions = new Questions();

var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "topic": "topic",
    "topic/:id": "difficulty",
    "topic/:id/:difficulty": "startQuiz",
    "results": "results"
  },

  home: function () {
    var myHome = new HomeView();
    myHome.render();
    $('#app').html(myHome.el);
  },

  topic: function () {
    var myTopics = new TopicsView({
      model: myPlayer
    });
    myTopics.render();
    $('#app').html(myTopics.el);
  },

  difficulty: function (id) {
    myPlayer.set('topic', id);
    var myDifficultyView = new DifficultyView({
      model: myPlayer
    });
    myDifficultyView.render();
    $('#app').html(myDifficultyView.el);
  },

  startQuiz: function (topic, difficulty) {
    var myQuestions = new Questions(), myQuestionListView;

    myQuestions.fetch({
      'success': function () {

        activeQuestions = myQuestions.topic(topic, difficulty);
        myQuestionListView = new QuestionListView({
          'collection': activeQuestions
        });
        myQuestionListView.render();
        $('#app').html(myQuestionListView.el);
      }
    });
  },

  results: function () {
    var myResults = new ResultsView({
      'collection': activeQuestions
    });
    myResults.render();
    $('#app').html(myResults.el);
  }
});

var router = new Router();
Backbone.history.start();
