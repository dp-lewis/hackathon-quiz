/*global Backbone, Question*/
var Questions = Backbone.Collection.extend({
  'url': './data/questions.json',
  'model': Question,
  'topic': function (topic, difficulty, total) {
  	total = total || 10;
  	var collection = new Questions(this.where({ 'topic': topic }));

  	collection = new Questions(collection.shuffle());
  	collection = collection.first(10);

  	return new Questions(collection);
  }
});
