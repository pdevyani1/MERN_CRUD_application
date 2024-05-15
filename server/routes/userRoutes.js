import express from "express";
import  {create, deleteUser, getAll, getOne, update } from "../controller/userController.js";

//initializing the route 
const route =  express.Router();

//creating route for create api
//post method is used because we are inserting data
route.post("/create",create);


//creating route for fetching all data
//get method us user to fetching the data
route.get("/getall" , getAll);


//creating route for fetching one single data/record from its id
route.get("/getone/:id" , getOne);

//creating route for updating the data
//put method is used to update the values
route.put("/update/:id" , update);


//creating route for updating the data
//delete method is used to delete the values
route.delete("/delete/:id" , deleteUser)

export default route;