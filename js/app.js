var renderAll = function(data) {

  var reposData   = data.repos;
  var userData    = data.user;
  var orgsData    = data.orgs;
  var starredData = data.starred;

// console.log(userData);

  var renderUser = function() {
    var userTemplate = JST["profile"];
    // console.log(userData);
      $(".sidebar").html(userTemplate(userData));   
   };

  var renderOrg = function() {
    var userTemplate = JST["orgs"];
    // console.log(orgsData);
      $(".sidebar").append(userTemplate(orgsData[0]));
   };

  var renderRepo = function(repo) {
    var repoTemplate = JST["repotab"];
    // console.log(reposData);
    // $(".main-repos").html(repoTemplate(reposData[0]));

      var $el = $(".main-repos");
        // _.each(data, function(name) {
        $el.append(repoTemplate(repo));
    // })
  };

  var renderRepos = function() {
    _.each(reposData, function(repo){
      renderRepo(repo)
    });
  };

  renderUser();
  renderOrg();
  renderRepos();
   
    
}

    // var $el = $(".container");
    //   _.each(data, function(title) {
    //     var preview = new Section(title);
    //     $el.append( preview.render() );
