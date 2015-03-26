/*global Backbone, Question*/
var Questions = Backbone.Collection.extend({
  'url': './data/questions.json',
  'model': Question
});
