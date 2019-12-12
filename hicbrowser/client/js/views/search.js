var _ = require('underscore');
var templates = require('../templates');


var prev_id = _.uniqueId('prev_id_'),
    next_id = _.uniqueId('next_id_') ,
    zoomout_id = _.uniqueId('zoomout_id_'),
    browser_search_input = _.uniqueId('search_input_'),
    search_btn = _.uniqueId('search_btn_'),
    browser_btn = _.uniqueId('browser_btn_'),
    browser_example_id = _.uniqueId('browser_example_');

function _redirect(url){
    App.router.navigate(url, {trigger: true});
}

module.exports = Backbone.View.extend({

    initialize: function(options){
        this.options = options;
    },

    events: {
        'click li' : 'onLiClick',
        'click button' : 'search',
        'keydown input' : 'keyAction',
        'click a' : 'linkClick'
    },

    render: function(data){

        data = _.isUndefined(data) ? {} : data.attributes;

        data.prev_id = prev_id;
        data.next_id = next_id;
        data.zoomout_id = zoomout_id;
        data.browser_search_input = browser_search_input;
        data.browser_btn = browser_btn;
        data.browser_example_id = browser_example_id;


        var tpl = templates.search(data);
        $(this.options.el).html(tpl);
    },

    renderError: function(error){

      $('#error').html(error).show();

    },

    update : function(obj){

        onBrowserButton();
        updateButtons(obj)
    },

    search: function(){
        var val = $( '#' + browser_search_input).val();

        $('#error').hide();

        if(val.length > 0){
            var url = '/browser/' + val;
            App.router.navigate(url, {trigger: true});
        }
    },

    onLiClick : function(e){
        e.preventDefault();

        var id = $(e.currentTarget).data('id');

        if(id === browser_btn) {
            this.showBrowserView();

            App.router.navigate('/browser', {trigger: true, replace:true});
        }

    },

    linkClick: function(e){
        e.preventDefault();

        var id = $(e.currentTarget).data('id');

        if(id === browser_example_id){
            App.router.navigate('/browser/' + App.config.attributes.browser_example, {trigger: true});
        }else if(!_.isUndefined(_links)){
            if(id === prev_id){
                App.router.navigate('/browser/' + _links.previous, {trigger: true});
            }else if(id === next_id){
                App.router.navigate('/browser/' + _links.next, {trigger: true});
            }else if(id === zoomout_id){
                App.router.navigate('/browser/' + _links.out, {trigger: true});
            }
        }
    },

    keyAction: function(e){
        if(e.which === 13) this.search();
    },

    showBrowserView : function(links){
        _links = links;

        if(!_.isUndefined(links)) $( '#' + browser_search_input ).val(links.id);

        $( '#' + browser_btn).addClass('active');

        $( '#' + browser_search_input ).parent().parent().css({opacity: 0.0, display: 'block'}).animate({opacity: 1.0}, 800);
    }
});
