let dataBase = require("../../../db.json");

export function mockAPI(request) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (request.method) {
        case "get":
          resolve({ status: 200, data: dataBase });
          break;
        default:
          resolve({ status: 200, message: "Bad Request" });
      }
    }, 300);
  });
}
