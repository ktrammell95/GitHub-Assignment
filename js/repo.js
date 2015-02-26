function icon(name) {
  return JST.icon({icon: name});
}

$(function() {

  var url = "https://api.github.com/users/ktrammell95/repos"

  $.ajax(url, {

    // dataType: "jsonp",

    success: function(data) {
      //stargazers_count

      var sorted = _.sortBy(data, "stargazers_count").reverse();
      var topFive = sorted.slice(0,5);
      _.each(topFive, function(data){
        $(".repos").append( JST.repo(data) );
      });
    }

  });

});