export const middleware2 = (req, res, next) => {
  console.log("Middkware 2");
  next();
};
