const { Router } = require("express");
const {
  getUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  putUserHandler,
  deletUserHandler,
} = require("../handlers/userHandlers");

const userRoutes = Router();

userRoutes.get("/", getUsersHandler);

userRoutes.get("/:id", getUserByIdHandler);

userRoutes.post("/", createUserHandler);

userRoutes.put("/", putUserHandler);

userRoutes.delete("/:id", deletUserHandler);

module.exports = userRoutes;
