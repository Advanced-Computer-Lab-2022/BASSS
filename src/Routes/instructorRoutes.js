<<<<<<< HEAD
const { instructors } = require("../Models/instructorSchema");
const {courses} = require("../Models/courseSchema");
const express = require("express");
const instructorR = express.Router();
const mongoose = require('mongoose');
const { json } = require("body-parser");

instructorR.get("/",(req, res) => {
    res.render("../views/instructor.ejs",{title:"add a course"})});

instructorR.post("/addcourse",function(req,res){
        // console.log(req.body)
        var instructor = req.body.instructor;
        var title = req.body.title;
        var subject = req.body.subject;
        var price = req.body.price;
        var outline = req.body.outline;
        var shortsummary = req.body.shortsummary;
        var totalhours = req.body.subtitle;


        courses.create({Instructor:instructor,
            Title:title,
            Subject:subject,
            Price:price,
            Uutline:outline,
            ShortSummary:shortsummary,
            TotalHours:totalhours,

        }
          );    
          res.render("../views/instructor.ejs",{title:"add a course"});

       /* var query = subtitles.find({Name:"salama"})
            query.exec(function(err,result){
                if (err) throw err;
                if(result.length==0){
                    res.render("../views/instructor.ejs",{title:"add course"});
                }else{
                    subtitles.create({TotalHours:totalhours,
                        ShortDescription:shortdescription}
                      );    
                  res.render("../views/instructor.ejs",{title:"add course"});
                }
              })*/
        }) 

        instructorR.post("/searchcourse", async function(req,res){
            var search = req.body.search;
            var query = await courses.find({});
            var array =[];
            for (let i = 0; i < query.length; i++) {
                if (query[i].Title.toLowerCase().includes(search.toLowerCase()))
                {
                    array = array.concat([query[i]]);
                }                
            }

                // res.send(array);
                // res.render("../views/guest.ejs",{list:JSON.stringify(array)});
                res.render("../views/instructor.ejs",{list:array});

            //res.status(200).json(query);
            //console.log(query);
            // res.render("../views/instructor.ejs",{title:"search for a course"});


        })

        module.exports = instructorR;
=======
<<<<<<< HEAD
const { instructorSchema,instructors } = require("../Models/instructorSchema");
const express = require("express");
const instructorR = express.Router();
const mongoose = require('mongoose');
const course = require("../Models/courseSchema");


instructorR.get("/",(req, res) => {
    res.render("../views/instructor.ejs",{title:"instructor"})});
 instructorR.get('/instructorViewtitles', function(req, res) { 
    var query = course.find({Instructor:"salama"})
    query.exec(function(err,result){
        if (err) throw err;
        if(result.length==0){
            res.render("../views/instructor.ejs",{title:"view course"});
        }else{
            course.find({Instructor:"salama"})      
          //  console.log(result)
          
        //   var list = result[0].list
        //   var temp=""
        //   temp+=JSON.stringify(list[0]+"..........")
          
       // res.setHeader('bassel', 'instructorViewtitles.ejs');
        res.send(result);
          res.render("../views/instructorViewtitles.ejs",{title:"view courses"});
        }
      })

   
    })
    instructorR.get('/instructorViewcourses', function(req, res) { 
        var query = course.find();
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
                res.render("../views/instructor.ejs",{title:"view course"});
            }else{
                course.find()      
              //  console.log(result)
              
            //   var list = result[0].list
            //   var temp=""
            //   temp+=JSON.stringify(list[0]+"..........")
              
           // res.setHeader('bassel', 'instructorViewtitles.ejs');
            res.send(result);
              res.render("../views/instructorViewcourses.ejs",{title:"view courses"});
            }
          })
    
       
        })
 

module.exports = instructorR;
=======
const express = require("express");
const instRouter = express.Router();
const mongoose = require('mongoose');
const instructors = require("../Models/instructorSchema");
const courses = require("../Models/courseSchema");


// instRouter.get("/",(req, res) => {
//     res.render("../views/instructor.ejs",{title:"instructor"})});

    instRouter.post("/selectcountry",function(req,res){
    console.log(req.body)
    var country = req.body.country;
    var query = instructors.find({username:"adham"})
        query.exec(function(err,result){
            if (err) throw err;
            if(result.length==0){
                res.render("../views/instructor.ejs",{title:"instructor country"});
            }else{
                instructors.findOneAndUpdate({username:"adham"},{country:country},{upsert:true},function(err,doc){
                    if(err) throw err;
                  });         
              res.render("../views/instructor.ejs",{title:"instructor country"});
            }
})

})
instRouter.post("/searchtitle",async function(req,res){
    var search = req.body.searchtitle
    var query = await courses.find({});
    var array = [];
    for(let i = 0 ; i<query.length ; i++)
    {
        if (query[i].Title.toLowerCase().includes(search.toLowerCase()))
        {
            array=array.concat([query[i]]);
        }
    }
    res.send(array);
})

instRouter.post("/searchsubject",async function(req,res){
    var search = req.body.searchsubject
    var query = await courses.find({});
    var array = [];
    for(let i = 0 ; i<query.length ; i++)
    {
        if (query[i].Subject.toLowerCase().includes(search.toLowerCase()))
        {
            array=array.concat([query[i]]);
        }
    }
    res.send(array);
})


instRouter.post("/searchinstructor",async function(req,res){
    var search = req.body.searchinstructor
    var query = await courses.find({});
    var array = [];
    for(let i = 0 ; i<query.length ; i++)
    {
        if (query[i].Instructorname.toLowerCase().includes(search.toLowerCase()))
        {
            array=array.concat([query[i]]);
        }
    }
    res.send(array);
})

// instructorR.post("/searchinstructor",async function(req,res){
//     var search = req.body.searchinstructor
//     var ins = await instructors.find({});
//     var array = [];
//     for(let i = 0 ; i<ins.length ; i++)
//     {
//         if (ins[i].username.toLowerCase().includes(search.toLowerCase()))
//         {
//             array=array.concat([ins[i]]);
//         }
//     }
//     var cour = await courses.find({});
//     var array2 = [];
//     for(let i =0 ; i<array.length ; i++)
//     {
//         for(let j =0; j<cour.length ; j++)
//         {
//             if(array[i]==cour[j].Instructor)
//             {
//                 array2 = array2.concat([cour[j]]);
//             }
//         }
//     }
//     res.send(array2);
// })
    

// const { instructorSchema,instructors } = require("../Models/instructorSchema");
instRouter.get("/",(req, res) => {
    courses.collection.distinct("Subject", function(error, results){
        res.render("../views/instructor.ejs", {
            subjects: results,
          });;
      });

});

instRouter.route('/filterBySubject')
.post((req,res,next)=> {
    const sub = req.body.Subject
    courses.find({Subject: sub})
    .then((courses) => {
        res.send(courses)
    }, (err) => next(err))
    .catch((err) => next(err));
})

instRouter.route('/filterByRating')
.post((req,res,next)=> {
    const rating = req.body.Rating;
    courses.find({Rating: rating})
    .then((courses) => {
        res.send(courses)
    }, (err) => next(err))
    .catch((err) => next(err));

})

instRouter.route('/filterByPrice')
.post((req,res,next)=> {
    if(req.body.Price == 0){
        courses.find({Price: 0 })
        .then((courses) => {
            res.send(courses)
        }, (err) => next(err))
        .catch((err) => next(err));
        }
    else{
        const parsedData = req.body.Price.toString()
        const priceA = parsedData.split('-')[0];
        const priceB = parsedData.split('-')[1];
        if(priceB == ''){
            courses.find({Price: {$gte:priceA}})
            .then((courses) => {
                res.send(courses)
            }, (err) => next(err))
            .catch((err) => next(err));
        }
        else {
            courses.find({Price: {$gte:priceA,$lt:priceB}})
            .then((courses) => {
                res.send(courses)
            }, (err) => next(err))
            .catch((err) => next(err));

        }
    }



})

module.exports = instRouter;
>>>>>>> 3819f8295f8b6c49cedacaa079559368d12ebcd9
>>>>>>> 327565635577ab09c1273dcc871baed92548ff1b
