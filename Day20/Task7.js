// Build an object user with login and logout methods.
const user = {
  username: "Suba",
  login: function () {
    console.log(this.username + " logged in");
  },
  logout: function () {
    console.log(this.username + " logged out");
  },
};

user.login();
user.logout();
