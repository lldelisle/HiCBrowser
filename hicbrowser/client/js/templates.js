var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["Templates"] = this["Templates"] || {};

this["Templates"]["gene"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <h1 class=\"page-header\">\n            "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n            <small> \n                 chromosome "
    + alias4(((helper = (helper = helpers.chromosome || (depth0 != null ? depth0.chromosome : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chromosome","hash":{},"data":data}) : helper)))
    + " (start: "
    + alias4(((helper = (helper = helpers.start || (depth0 != null ? depth0.start : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start","hash":{},"data":data}) : helper)))
    + ", end: "
    + alias4(((helper = (helper = helpers.end || (depth0 != null ? depth0.end : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"end","hash":{},"data":data}) : helper)))
    + ")\n            </small>\n        </h1>\n        <a href=\"/browser?region="
    + alias4(((helper = (helper = helpers.chromosome || (depth0 != null ? depth0.chromosome : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chromosome","hash":{},"data":data}) : helper)))
    + ":"
    + alias4(((helper = (helper = helpers.start || (depth0 != null ? depth0.start : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"start","hash":{},"data":data}) : helper)))
    + "-"
    + alias4(((helper = (helper = helpers.end || (depth0 != null ? depth0.end : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"end","hash":{},"data":data}) : helper)))
    + "\">\n            <img class=\"img-responsive\" src=\""
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data}) : helper)))
    + "\" alt=\"\">\n        </a>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <div style=\"height:55%\">\n            <div class=\"alert alert-danger\" role=\"alert\">\n                <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Error:</span>\n                "
    + container.escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"error","hash":{},"data":data}) : helper)))
    + "\n            </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"col-lg-12\">\n    \n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    \n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    \n    <hr>\n</div>";
},"useData":true});

this["Templates"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<hr>\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <p>The Drosophila Chorogenome Navigator is simple web browser to visualize <strong>Hi-C</strong> and other genomic tracks. \n        <p>It is based on <strong>HiCExplorer</strong>, a set of programs that enable you to process, normalize, analyze and visualize Hi-C data.</p>\n    </div>\n    <div class=\"col-md-6\">\n        <!-- build:src /static/img/vis.png -->\n        <img class=\"img-responsive\" src=\"../static/img/vis.png\" alt=\"\">\n        <!-- /build -->\n    </div>\n</div>\n<br>\n<br>";
},"useData":true});

this["Templates"]["loading"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"modal fade bs-example-modal-sm\" style=\"color: #fff\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n            <div class=\"search-box\" style=\"width:100%\">\n                <!-- build:src /static/img/loading.gif -->\n                    <img src=\"../static/img/loading.gif\">\n                <!-- /build -->\n                <h1>Loading ...</h1>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});

if (typeof exports === 'object' && exports) {module.exports = this["Templates"];}