module.exports = {
	'List View': function( _browser ) {
		_browser
			.init()
			.waitForElementVisible( 'body', 1000 )
			.assert.containsText('h1', 'Flickr Public Feed')
			.assert.visible('#main-body')
			.assert.visible('#feed-list')
	}
}
