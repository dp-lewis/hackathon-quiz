/*global Backbone, HomeView, QuestionListView, Questions*/

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
  startQuiz: function () {
    var myQuestions, myQuestionListView;

    myQuestions = new Questions();

    myQuestionListView = new QuestionListView({
      'collection': myQuestions
    });

    myQuestions.fetch();
    myQuestionListView.render();
    $('#app').html(myQuestionListView.el);    
  }
});

var router = new Router();
Backbone.history.start();
