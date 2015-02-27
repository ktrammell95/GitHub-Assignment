$(function() {

  var api = new Github("ktrammell95");

  var renderAll = (function(data) {

    console.log(data)
    // var render = new renderAll(data);

  })
    api.loadAll(renderAll);
});

//creating new copy of Github to pull in user data
//creating a callback to run the api.loadAll
//pass in the data from the callback into the new App
