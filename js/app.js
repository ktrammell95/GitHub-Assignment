var renderAll = function(data) {

  var reposData   = data.repos;
  var userData    = data.user;
  var orgsData    = data.orgs;
  var starredData = data.starred;

// console.log(userData);

  var renderUser = function() {
    var userTemplate = JST["profile"];
    // console.log(userData);

    var createdAt = new Date(userData.created_at);
    var m = moment(createdAt);
    var formattedDate = m.format("MMM D, YYYY");
    userData.formattedDate = formattedDate;

    userData.myStars = starredData.length;

    $(".sidebar").html(userTemplate(userData));   
   };


  var renderOrg = function() {
    var userTemplate = JST["orgs"];
    // console.log(orgsData);
      $(".sidebar").append(userTemplate(orgsData[0]));
   };

  var renderRepo = function(repo) {
    var repoTemplate = JST["repotab"];

    var updatedAt = new Date(repo.updated_at);
    var update = moment(updatedAt);
    var updatedDate = update.fromNow();
    repo.updatedDate = updatedDate;

    var $el = $(".main-repos");
        $el.append(repoTemplate(repo));
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
