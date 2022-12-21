const { default: mongoose } = require('mongoose');
const express = require("express");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const users = require('../Models/userSchema')
const courses = require('../Models/courseSchema')

const maxAge = 3 * 24 * 60 * 60; //3 days

const createToken = (username) => {
    return jwt.sign({ username },process.env.secret , {
        expiresIn: maxAge
    });
};

const signup =  async (req, res) => {
    const { username, password, email, firstname, lastname, gender}= req.body;
    const exists = await users.findOne({UserName: username})
    if(exists){
        throw Error('Username already exists')
    }
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await users.create({ UserName: username, Password: hashedPassword, Type: "Individual Trainee" });
        await individualTrainees.create({UserName: username, FirstName: firstname, LastName: lastname, Email: email,Password: hashedPassword, Gender: gender})
        const token = createToken(user.UserName);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const login =  async (req, res) => {
    const {username, pass}= req.body;
    
    if(!username) {
        return res.json({error: "Username Required"})
    }
    if(!pass){
        return res.json({error: "Password Required"})
    }
    const user = await users.findOne({UserName:username});
    if(!user){
       return res.json({error: "Username Not Found"})
    }
    try{
        const hashedpass = user.Password;
        bcrypt.compare(pass,hashedpass,(err,data)=>{
            if(err){
                return res.json({error: "idk"})
            }
            if(!data){
                return res.json({error: "Incorrect Password"})
            }
            const token = createToken(user.UserName, user.Type);
            res.cookie('token', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(200).json({token: token, type: user.Type})
        });
    } catch (error) {
        res.json({error: error.message})
    }
}

const logout = (req,res) => {
    return res.clearCookie('token').status(200).json({ message: "Successfully logged out" })
}

const search = async (req,res) => {
    const key = req.params.searchkey;
    var array = [];
    if(key!= null){
        var query = await courses.find({});
        for(let i = 0 ; i<query.length ; i++)
        {
            course = query[i];
            if (course.Title.toLowerCase().includes(key.toLowerCase()) ||
                course.Subject.toLowerCase().includes(key.toLowerCase()) ||
                course.InstructorUserName.toLowerCase().includes(key.toLowerCase()))
            {
                array=array.concat(course);
            }
        }
        res.status(200).json(array)
    }
    else{
        res.status(404);
    }
}



module.exports = { signup, logout, login, search };
