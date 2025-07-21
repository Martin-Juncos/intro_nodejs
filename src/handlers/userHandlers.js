const getUsersHandler = (req, res) => {
  res.send("Solicitando a todos los usuarios");
};

const getUserByIdHandler = (req, res) => {
  const { id } = req.params;
  res.send(`Este es el usuario con Id ${id}`);
};

const createUserHandler = (req, res) => {
  const { name, lastname, age, mail } = req.body;
  res.send(
    `El usuario llamado ${name} ${lastname}, con edad de ${age} y correo ${mail} fue creado con exito`
  );
};

const putUserHandler = (req, res) => {
  const { name, lastname } = req.query;
  res.send(`Modificamos al usuario con nombre ${name} ${lastname}`);
};

const deletUserHandler = (req, res) => {
  res.send("Eliminando un usuario");
};

module.exports = {
  getUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  putUserHandler,
  deletUserHandler,
};
