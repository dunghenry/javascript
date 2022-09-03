function getUser(userId) {
  return new Promise(function (resolve, reject) {
    console.log("Get user from database");
    setTimeout(function () {
      resolve({ userId, username: "TranDung" });
    }, 1000);
  });
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get services of  ${user.username} from the API.`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 2 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate service costs of ${services}.`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 3 * 1000);
  });
}

getUser(100)
  .then(getServices)
  .then(getServiceCost)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() =>{
    console.log("Done!");
  })
