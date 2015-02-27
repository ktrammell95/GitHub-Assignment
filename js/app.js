var renderAll = function(data) {

  var reposData   = data.repos;
  var userData    = data.user;
  var orgsData    = data.orgs;
  var starredData = data.starred;

console.log(userData);

  var renderUser = function() {
    var userTemplate = JST["profile"];
    // console.log(userData);
      $(".sidebar").html(userTemplate(userData));   
   };

  var renderOrg = function() {
    var userTemplate = JST["orgs"];
    console.log(orgsData);
      $(".sidebar").append(userTemplate(orgsData[0]));
   };

  // var renderRepos = function() {
  //   var reposTemplate = JST["repos"];
  //   console.log(reposData);
  //     $(".repos")_.each.append(reposTemplate(reposData))
  // };  

  renderUser();
  renderOrg();
 // renderRepos();
    
    
}
