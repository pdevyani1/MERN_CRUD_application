//All the api's in the controlles
import User from "../model/userModel.js";

//creating api for the create

export const create = async(req, res)=> {
    try{
        // creating user data in it 

        const  userData = new User(req.body);
        
        if(!userData){
            return  res.status(404).json({msg:"User data not found"});
        }

            //if we get data the we will save it
            const savedData = await userData.save();

            //for sending the response 
            res.status(200).json({savedData});

    }catch(error){
        res.status(500).json({error :error});
    }
}


//api for fetching data

export const getAll = async(req , res)=>{

    try {
        //for getting all data from user 

        const userData = await User.find();
         //if data is not get into userData then
         if(!userData){
            return res.status(404).json({msg: "User data not found"});
         }
         // if data is get into userData
         res.status(200).json(userData);

    } catch (error) {
        res.status(500).json({error :error});
    }
}

// api for fetching one single record from its id

export const  getOne = async(req , res) => {
    try {
        //for accessing the id from routes
        const id = req.params.id;

        //find by the id
        //id we used in this is coming from routes
            const  userExist = await User.findById(id);
            //this findbyId function serach the (id) in the User model

            //if data is not found 
             if(!userExist){
                        return res.status(404).json({msg: "Data is not found"});
             }
              //if we get data then
              res.status(500).json(userExist);
        
    } catch (error) {
        res.status(500).json({error :error});
    }
}

//api for updating the data

export const update = async(req , res) => {
    try {

        //id we used in this is coming from routes
        const id = req.params.id;

        //this findbyId function serach the (id) in the User model
         const  userExist = await User.findById(id);

           //if data is not found 
           if(!userExist){
            return res.status(401).json({msg: "Data is not found"});
           }
                //if we get data then
                res.status(500).json(userExist);

                //if we get data then we will update 
                const updatedData = await User.findByIdAndUpdate(id , req.body , {new: true});
                //in this we id from which we are updating , after that req.body from which we are gettiing data , and new: true this is new object 
                    res.status(200).json({msg:"User Updated Successfully"})
    } catch (error) {
        res.status(500).json({error :error});
    }
}

//api for deleting the data

export const deleteUser = async(req , res) => {
    try {
        const  id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return  res.status(404).json({msg: "User  not exists"});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg: "User deleted Successfully"});
    } catch (error) {
        res.status(500).json({error :error});
        
    }

}