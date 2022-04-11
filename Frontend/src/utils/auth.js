const axios = require("axios");

module.exports.loginAuth = (email, password) => {
  const getList = () => {
    return axios({
      url: module.exports.url + "get_list.php",
      method: "post",
      data: {
        table: "Users",
      },
    }).then((res) => {
      var data = res.data.filter(
        (user) => user.email_id === email && user.Password === password
      );
      if (data.length && data[0].Name) {
        window.sessionStorage.setItem("user", JSON.stringify(data[0]));
        window.location.assign("/dashboard");
      } else {
        alert("Invalid credentials!");
      }
    });
  };
  getList();
};

module.exports.registerUser = (data) => {
  console.log(data);
};

module.exports.url = "http://localhost:8000/functions/";
