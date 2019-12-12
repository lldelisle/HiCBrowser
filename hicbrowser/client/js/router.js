var _ = require('underscore');

var AppRouter = Backbone.Router.extend({
    routes: {
        "browser" : 'getBrowser',
        "browser/:id" : 'getBrowserId',

        "*actions": "defaultRoute"
        // Backbone will try to match the route above first
    }
});

function setIndex(){
    if(!App.views.index.rendered) App.views.index.render();
    App.views.index.setVisible();
}

var _current = {};

function _renderBrowser(browser){

    App.views.search.showBrowserView(browser);
    App.views.browser.render(browser);
    App.views.browser.setVisible();
}

// Instantiate the router
var app_router = new AppRouter();

app_router.on('route:getBrowser', function(){

    if(!_.isUndefined(_current.browser)){
        App.router.navigate('/browser/' + _current.browser.id, {trigger: false});
        _renderBrowser(_current.browser);
        return;
    }

    App.views.search.showBrowserView();
    setIndex();
});

app_router.on('route:getBrowserId', function (id) {

    if(!_.isUndefined(_current.browser) && _current.browser.id === id){
        _renderBrowser(_current.browser);
        return;
    }

    var browser = new App.models.Browser({id:id}),
        errorMsg = 'Your search - <em>' + id + ' - </em> did not match any region.';

    browser.fetch({
        success: function(browser){
            browser = browser.toJSON();

            var tracks = _.flatten(browser.tracks);

            if(tracks.length === 0){
              App.views.search.renderError(errorMsg);
              setIndex();
            }else {

              // Check if first image exists, if not, show error
              $.ajax({
                url:tracks[0],
                success: function(){
                  _current.browser = browser;
                  _renderBrowser(browser);
                },
                error: function(){
                  App.views.search.renderError(errorMsg);
                  setIndex();
                }
              });
            }
        },
        error: function(browser, res){
          App.views.search.renderError(errorMsg);
          setIndex();
        }
    });
});

app_router.on('route:defaultRoute', setIndex);

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

module.exports = app_router;
