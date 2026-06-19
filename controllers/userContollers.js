import express from "express";
export const getUsers = (req, res) => {
  console.log(req);
  res.json({ message: "This returns all users" });
};

export const createUser = (req, res) => {
  const userData = req.body;
  res.json({ message: "User created Sucessfully", data: userData });
};

export const getParamsUser = (req, res) => {
  const params = req.params;
  res.json({ message: "The parms is", params });
};
