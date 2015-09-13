
var ItemDetails = Backbone.View.extend({
	el: '#feed-details',
	template: _.template($('#feed-item-details').html()),

	events: {
		'click .feed-item--image': 'view',
		'click .feed-view--back': 'destroy'
	},

	render: function() {
		this.$el.html( this.template( this.model ) );
		return this;
	},

	destroy: function(e) {
		e.preventDefault();
		this.trigger('remove');
		this.$el.empty();
	}

});
