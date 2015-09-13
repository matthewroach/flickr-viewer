
var FeedViewer = Backbone.Collection.extend({
	url: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json',

	sync: function(method, collection, options) {
		options.dataType = 'jsonp';
		options.jsonpCallback = 'jsonFlickrFeed';
		return Backbone.sync(method, collection, options);
	},

	parse: function(data) {
		return data.items;
	}

});
