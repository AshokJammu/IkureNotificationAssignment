var express = require("express");
var router = express.Router();
var ikureRegistration = require("../models/ikureData");

router.post("/register", (req, res) => {
  var user = new ikureRegistration();
  let {
    fname,lname,age,email,password,company,userType,message,createdAt
  } = req.body;

  user.fname = fname;
  user.lname = lname;
  user.age = age;
  user.email = email;
  user.password = password;
  user.company = "ikure";
  user.userType = "user";
  user.message = `${fname} ${lname} is registered to ikure`;
  user.createdAt = new Date()
 // console.log(user)
  user.save(function (err, data) {
    console.log(user)
    if (err) {
      res.status(200).send("error saving users",err);
      console.log(err)
    } else {
      console.log(data);
      res.send("Data Added");
    }
  });

  // console.log(empId,name,password,department,designation,status,userType)
});

router.get("/", (req, res) => {
  console.log("getting all uers");
  // res.send('request is getting')

  ikureRegistration.find({ }).exec((err, data) => {
    if (err) {
      res.send("error has occured");
    } else {
      console.log(data);
      res.json(data);
    }
  });

  //   ikureRegistration.update(
  //     {},
  //     {
  //       $set: { 'date': new Date(), "days": 0 }
  //     },
  //     {multi:true},
  //   ).exec((err,data)=>{
  //       if(err){
  //           console.log(err)
  //       }else{

  //           console.log(data)
  //           res.send(data)
  //       }
  //   });
});

router.post("/statusUpdate", (req, res) => {
  let { empId,status, days } = req.body;

  ikureRegistration
        .update(
          { empId: empId },
          {
            $set: { date: new Date(), days: days, status: status },
          }
        )
        .exec((err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            res.send(data);
          }
        });

    })
 

module.exports = router;
