function getUser(userId, callback) {
    console.log("Get user from the db");
    setTimeout(function () {
        callback({
            userId,
            username: "TranDung"
        })
    }, 1000);
}

function getServices(user, callback) {
    console.log(`Get services of ${user.username} from the API`);
    setTimeout(function () {
        callback(['Email', 'VPN', 'CDN']);
    }, 2 * 1000);
}

function getServiceCost(services,callback){
    console.log(`Get service cost of ${services}`);
    setTimeout(function () {
        callback(services.length);
    }, 3 * 1000);
}

getUser(100, (user) =>{
    getServices(user, (services) =>{
        getServiceCost(services, (cost) =>{
            console.log(`Get service cost of ${user.username} with ${cost} of ${services}`);
        })
    })
})