var App = (function(data) {
  function App(data) {
    this.data = data;

    this.$mainRepos = $(".main-repos");
    this.$sidebar = $(".sidebar");

    this.$repos = $(".repos");
    this.$orgs= $(".orgs");
    this.$starred = $(".starred");
    this.$user = $(".user");
    

    // this.showProfile();
    // this.addListeners();

    App.prototype = {

      showProfile: function() {
        var data = this.$user();
        var userInfo = new ProfileGroup(data);
        this.$sidebar.html( userInfo.render() );
      }
    
    };
  };
    return App;
});



// var sorted = _.sortBy(data, "stargazers_count")