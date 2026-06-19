export const logMiddleware = (req, res, next) => {
  console.log("middeleware successfull");
  next();
};
