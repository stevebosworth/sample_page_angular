sample_page_angular
===================

Angular Based Sample Page

####About

The goal of this project is to setup a boilerplate for a fully responsive single-page webapp that can be easily extended as needed.  

####Dependencies

- [Node.js](http://nodejs.org/)
- [NPM](https://www.npmjs.org/)
- [Bower](http://bower.io/)
- [Browserify](http://browserify.org/)
- [Gulp](http://gulpjs.com/)
- [Foundation (css only)](http://foundation.zurb.com/)
- [AngularJS](https://angularjs.org/)
- 

####Installation Instructions

Make sure you have Node, NPM and Bower setup on your system.  They all need to be available globally.

Install Gulp globally as well, if you don't have it installed yet
`npm install -g gulp`

run `npm install`

run `bower install`

run `gulp`

Enjoy!

####Notes

The boilerplate is based off the [Yeoman Angular Generator](https://github.com/yeoman/generator-angular) but with some modifications.

Because of the use of browserify the Yeoman generators no longer work as expected and I abandoned the Yeoman gruntfile for gulp as an experiment.

Also, the app is setup to use [apiary.io](http://apiary.io/) to mock-up the backend.

Please see the [issues page](https://github.com/stevebosworth/sample_page_angular/issues) for more info on what doesn't work and what the next steps are.
