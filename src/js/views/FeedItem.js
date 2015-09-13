
var FeedItem = Backbone.View.extend({
	template: _.template($('#feed-item-template').html()),
	className: 'feed-item',

	initialize: function() {
	},

	render: function() {
		this.formatDate();
		this.formatTags();

		this.$el.html( this.template( this.model.toJSON() ) );
		return this;
	},

	formatDate: function() {
		this.model.set( 'publishedDate', moment(this.model.get('published')).format('Do MMM YYYY') );
		this.model.set( 'publishedTime', moment(this.model.get('published')).format('HH:mm') );
	},

	formatTags: function() {
		var tags = this.model.get('tags');
		this.model.set( 'tagList', tags.split(' ') );
	}

});
