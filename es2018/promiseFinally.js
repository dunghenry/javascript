class Connection {
  execute(query) {
    if (query != "Insert" && query != "Update" && query != "Delete") {
      throw new Error(`The ${query} is not supported`);
    }
    console.log(`Execute the ${query}`);
    return this;
  }
  close() {
    console.log("Close the connection");
  }
}

const success = true;
function connect() {
  return new Promise(function (resolve, reject) {
    if (success) {
      resolve(new Connection());
    } else {
      reject("Could not open the database connection");
    }
  });
}

let globalConnection;
connect()
  .then((connection) => {
    globalConnection = connection;
    return globalConnection.execute("Insert");
  })
  .then((connection) => {
    globalConnection = connection;
    return globalConnection.execute("Select");
  })
  .catch((error) => console.error(error))
  .finally(() => {
    if (globalConnection) {
      globalConnection.close();
    }
  });
