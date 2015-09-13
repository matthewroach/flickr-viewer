
var FeedItems = Backbone.View.extend({
	el: '#feed-list',

	events: {
		'click .feed-item--image': 'viewDetails'
	},

	initialize: function() {
		this.listenTo( this.collection, 'sync', this.render );
	},

	render: function() {
		var $list = this.$el.empty();

		this.collection.each(function( model, index ) {
			var m = model;
			m.attributes.id = index;

			var item = new FeedItem({ model: m });
			$list.append(item.render().$el);

			this.listenTo( item, 'event', this.show );

		}, this);

		return this;
	},

	hide: function() {
		this.$el.hide();
	},

	show: function() {
		this.$el.show();
	},

	viewDetails: function(e) {
		e.preventDefault();

		var id = $(e.currentTarget).attr('data-id');
		var itemDetails = this.collection.at(id);
		var details = new ItemDetails({ model: itemDetails.attributes });

		// Listen to the remove event of the child view
		this.listenTo(details, 'remove', this.show);

		details.render();

		this.hide();
	}

});

