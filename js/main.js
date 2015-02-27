$(function() {

  var api = new Github("ktrammell95");

  var app = (function(api) {

    console.log(api)
    return api;

  })
    api.loadAll(app);
});

//app links to app.js where it is a function that contains
//var orgs = data.orgs
//var starred = data.starred.



// App.js is where you will get your data to show (similar to photo album)
// one section for showing left side of screen
// one section for repo section

// $(function(){
//   $.ajax("images.json", {
//     success: function(data) {
//       // console.log(data)
//       window.app = new App(data);
//     },
//     error: function() {
//       console.log("failed to load images.json");
//     }
//   });
// });