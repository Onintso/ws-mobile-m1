module.exports = (app) => {
    const resto = require("../controller/restaurant.controller.js");
    const plat = require("../controller/plat.controller.js");
    const user = require("../controller/user.controller.js");
  
    app.post("/create-resto", resto.create);

    app.post("/create-plat", plat.create);

    app.post("/insert-client", user.create);

    app.post("/login", user.login);
  
    app.get("/get-all-resto", resto.findAll);

    app.get("/get-plat-resto/:idResto", plat.findByResto);
  
    app.get("/message/:messageId", resto.findOne);
  
    app.put("/message/:messageId", resto.update);
  
    app.delete("/message/:messageId", resto.delete);
  };