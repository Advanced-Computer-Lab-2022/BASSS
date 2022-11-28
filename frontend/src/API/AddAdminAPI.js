import axios from 'axios';
const { useState } = require("react");


const AddAdminAPI = () => { 

    const AddAdmin=  async () => {
        var userName = req.body.adminUserName;
        var password = req.body.adminPassword;
    
      admin.create({Name: userName, Password: password, Email: userName});
       res.render("../views/admin.ejs",{title:"admin home page"});
         await axios.post()
        

    }
    return(0)
}
export default AddAdminAPI;