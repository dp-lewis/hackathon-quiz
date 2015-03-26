var TopicsView = Backbone.View.extend({
	template: _.template($('#template-topics').html()),
	render: function () {
		this.$el.html(this.template());
	}
});
