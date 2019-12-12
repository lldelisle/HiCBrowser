//Required global libs
global.jQuery = $ = require('jquery');
Backbone = require('backbone');
Backbone.$ = jQuery;
require('bootstrap');

// Views
var Loading = require('./js/views/loading');
var Search = require('./js/views/search');
var Index = require('./js/views/index');
var BrowserView = require('./js/views/browser');

App = {};

//Views
App.views = {};
App.views.loading = new Loading({el:'body'});
App.views.search = new Search({el:'#search'});
App.views.index = new Index({el:'#content'});
App.views.browser = new BrowserView({el:'#content'});

// Models
App.models = {};
App.models.Browser = require('./js/models/browser');
App.models.Config = require('./js/models/config');

//Router
App.router = require('./js/router');

// listen to ajax
$(document).ajaxStart(function() {
    App.views.loading.show();
}).ajaxStop(function() {
    setTimeout(App.views.loading.hide, 800);
});

App.init = function(config){

    // Init config
    App.config = new App.models.Config();
    App.config.set(config);

    // Render loading
    App.views.loading.render();

    // Select all elements with data-toggle="tooltips" in the document
    $('[data-toggle="tooltip"]').tooltip();

    // Render initial views
    App.views.search.render(App.config);
};
