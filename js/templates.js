this["JST"] = this["JST"] || {};
this["JST"]["icon"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<span class=\"octicon octicon-"
    + escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></span>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["orgs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"organizations\">\n  <div class=\"org-title\">Organizations</div>\n  <div class=\"org-icon\">\n    <img src=\""
    + escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\">\n  </div>\n</div>\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["profile"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"large-avatar\">\n  <img src=\""
    + escapeExpression(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\">\n</div>\n<div class=\"name\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n<div class=\"user-name2\">"
    + escapeExpression(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"login","hash":{},"data":data}) : helper)))
    + "</div>\n<div class=\"city\">\n  <div class=\"octicon octicon-location\"></div>\n  <div class=\"city-name\">"
    + escapeExpression(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"location","hash":{},"data":data}) : helper)))
    + "</div>\n</div>\n<div class=\"date\">\n  <div class=\"octicon octicon-clock\"></div>\n  <div class=\"date-joined\">Joined on "
    + escapeExpression(((helper = (helper = helpers.formattedDate || (depth0 != null ? depth0.formattedDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"formattedDate","hash":{},"data":data}) : helper)))
    + "</div>\n</div>\n\n<div class=\"stats\">\n  <div class=\"followers\">\n    <p class=\"value\">"
    + escapeExpression(((helper = (helper = helpers.followers || (depth0 != null ? depth0.followers : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"followers","hash":{},"data":data}) : helper)))
    + "</p>\n    <p class=\"text\">Follower</p>\n  </div>\n  <div class=\"starred\">\n    <p class=\"value\">"
    + escapeExpression(((helper = (helper = helpers.myStars || (depth0 != null ? depth0.myStars : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"myStars","hash":{},"data":data}) : helper)))
    + "</p>\n    <p class=\"text\">Starred</p>\n  </div>\n  <div class=\"following\">\n    <p class=\"value\">"
    + escapeExpression(((helper = (helper = helpers.following || (depth0 != null ? depth0.following : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"following","hash":{},"data":data}) : helper)))
    + "</p>\n    <p class=\"text\">Following</p>\n  </div>\n</div>\n\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["repo"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"content\">\n  <div class=\"repo\">\n    <div class=\"icon\">\n      <span class=\"octicon octicon-repo\"></span>\n    </div>\n    <div class=\"details\">\n      <div class=\"name\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n      <div class=\"desc\">"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n    </div>\n    <div class=\"stars\">\n      <span class=\"stars-count\">"
    + escapeExpression(((helper = (helper = helpers.stargazers_count || (depth0 != null ? depth0.stargazers_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"stargazers_count","hash":{},"data":data}) : helper)))
    + "</span>\n      <span class=\"octicon octicon-star\"></span>\n    </div>\n  </div>\n</div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["repotab"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"repo-contain\">\n  <div class= \"repo-info\">\n    <h2 class=\"repo-title\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n    <h3 class=\"repo-desc\">"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</h3>\n    <h4 class=\"repo-update\">Updated "
    + escapeExpression(((helper = (helper = helpers.updatedDate || (depth0 != null ? depth0.updatedDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"updatedDate","hash":{},"data":data}) : helper)))
    + "</h4>\n  </div>\n  <div class = \"file-icons\">\n    <ul> \n      <li class=\"file-type\">"
    + escapeExpression(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"language","hash":{},"data":data}) : helper)))
    + "</li>\n      <li class=\"octicon-icon\"><span class=\"octicon octicon-star\">"
    + escapeExpression(((helper = (helper = helpers.stargazers_count || (depth0 != null ? depth0.stargazers_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"stargazers_count","hash":{},"data":data}) : helper)))
    + "</span></li>\n      <li class=\"octicon-icon\"><span class=\"octicon octicon-git-branch\">"
    + escapeExpression(((helper = (helper = helpers.forks_count || (depth0 != null ? depth0.forks_count : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"forks_count","hash":{},"data":data}) : helper)))
    + "</span></li>\n    </ul>\n  </div>\n</div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["starred"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <div class=\"starred\">\n    <p class=\"value\">"
    + escapeExpression(((helper = (helper = helpers.stars || (depth0 != null ? depth0.stars : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"stars","hash":{},"data":data}) : helper)))
    + "</p>\n    <p class=\"text\">Starred</p>\n  </div>";
},"useData":true});