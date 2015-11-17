A simple FlickrFeed Viewer

Basic FlickrFeed Viewer using BackboneJS. My first go at using BackboneJS.

To run locally, you will require the following globally:
* Grunt
* nightwatch

To get running:
1. Clone repo
2. npm install
3. run `grunt dev`

Grunt Dev - will run a local development server and watch the Sass and JS file, and place them in the app/a folder


## Testing

Change the server_path to point to the seleinum location on your computer, and also update the chrome driver location, if not on your PATH.

Initial testing is located in the tests folder, at the moment just a basic test to check inital page is rendering.
