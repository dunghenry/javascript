function getUser(id) {
  if (id <= 0) {
    return null;
  }
  return {
    id: id,
    username: "admin",
    profile: {
      avatar: "/avatar.png",
      language: "English",
    },
  };
}
let user1 = getUser(1);
let profile1 = user1.profile;
console.log(profile1);

let user2 = getUser(2);
let profile2 = user2 !== null || user2 !== undefined ? user2.profile : undefined;
console.log(profile2);


let user3 = getUser(-1);
console.log(user3?.profile); //undefined


// Combining with the nullish coalescing operator

let defaultProfile =  { default: '/default.png', language: 'English'};

let user = getUser(-1);
let profile = user ?. profile ?? defaultProfile;
console.log(profile);

//Using optional chaining operator with function calls

let file = {
    read() {
        return 'file content';
    },
    write(content) {
        console.log(`Writing ${content} to file...`);
        return true;
    }
};

let data = file.read();
console.log(data);

// let compressedData = file.compress();
// console.log(compressedData); //optionalChainingOperator.js:50 Uncaught TypeError: file.compress is not a function

//fix
let compressedData = file.compress?.();
console.log(compressedData); //undefined


//

function getData(id, callback){
    let user = {
        id: id,
        username: 'admin'
    };
    if(typeof callback === 'function'){
        callback(user);
    }
    return user;
}
function myCallback(user){
    console.log("My callback is called");
    console.log(user);
}

let dt = getData(1, 2);
console.log(dt);

getData(1, myCallback);

//or


function getData1(id, callback){
    let user = {
        id: id,
        username: 'admin'
    };
    callback?.(user)
    return user;
}

getData1(1, myCallback);