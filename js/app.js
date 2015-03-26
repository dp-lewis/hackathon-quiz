/*global Backbone, HomeView, QuestionListView, Questions, Player, TopicsView, DifficultyView*/
var myPlayer = new Player();

var Router = Backbone.Router.extend({
  routes: {
    "": "home",
    "topic": "topic",
    "topic/:id": "difficulty",
    "topic/:id/:difficulty": "startQuiz"
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
        myQuestionListView = new QuestionListView({
          'collection': myQuestions.topic(topic, difficulty)
        });
        myQuestionListView.render();
        $('#app').html(myQuestionListView.el);
      }
    });
  }
});

var router = new Router();
Backbone.history.start();
