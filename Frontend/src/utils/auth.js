const { default: axios } = require("axios");

module.exports.loginAuth = (email, password) => {
  const key = email.split("@")[0];
  var temp_dict = {
    inspector: {
      username: "Inspector",
      userType: "IP",
    },
    admin: {
      username: "Admin",
      userType: "AD",
    },
    resident: {
      username: "Resident",
      userType: "RE",
    },
  };

  return temp_dict[key];
};

module.exports.registerUser = (data) => {
  console.log(data)
 axios.post(),
 {
   data: data
 }
 
}
