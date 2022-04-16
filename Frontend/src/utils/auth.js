const axios = require("axios");

// module.exports.url = "http://backend.sst0847.uta.cloud/functions/";
module.exports.url = "http://localhost:8000/functions/";

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
  const regUser = () => {
    return axios({
      url: module.exports.url + "insertUsers.php",
      method: "post",
      data: data,
    }).then((res) => {
      console.log(res);
    });
  };
  if (data.Password === data.confirm_password) {
    regUser();
    module.exports.loginAuth(data.email_id, data.Password);
  } else {
    alert("Password mismatch");
  }
};

module.exports.registerSchool = (data) => {
  if (data.name) {
    axios({
      url: module.exports.url + "insertSchools.php",
      method: "post",
      data: data,
    }).then((res) => {
      // console.log(res);
    });
  }
};

module.exports.registerBusiness = (data) => {
  if (data.Name) {
    axios({
      url: module.exports.url + "insertBusiness.php",
      method: "post",
      data: data,
    }).then((res) => {
      // console.log(res);
    });
  }
};

module.exports.registerMoveOut = (data) => {
  if (data.currentLocation) {
    axios({
      url: module.exports.url + "insertMoveOut.php",
      method: "post",
      data: data,
    }).then((res) => {
      console.log(res);
    });
  }
};
