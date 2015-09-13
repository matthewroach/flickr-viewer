$(document).ready(function() {

	feedList = new FeedViewer();
	feedView = new FeedItems({ collection: feedList });

	feedList.fetch();

});
