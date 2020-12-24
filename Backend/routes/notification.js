var express = require('express');
var router = express.Router();
var userNotification = require('../models/notificationData')
var ikureRegistration = require("../models/ikureData");

router.put("/",async (req,res)=>{
     var userCount = await ikureRegistration.find({}).count()
     var oldCount = 0

     await userNotification.find({}).exec((err,data)=>{
         if(err){
             console.log("error")
         }else{
             console.log(data,"dataaddd")
             oldCount = data[0].oldCount

         }
     })
    //  res.send("Hello World")
     console.log(oldCount,"oldCount")
     setTimeout(async ()=>{

         await ikureRegistration.find({}).skip(oldCount).exec( async (err, data) => {
             if(err) {
                 console.log(err)
             }else {
                 await userNotification.update({_id:"5fe4d87487b6e446e07f0a26"}, {
                     $set: { oldCount: userCount},
                   }).exec((err,updateData)=>{
                       if(err){
                           console.log(err)
                       }else{
                         //   res.send(updateData)
                         console.log(updateData)
                         res.json(data)
                       }
                   })
     
             }
         })
     },3000)
    // res.json({userCount:userCount,oldCount:oldCount})

    //  console.log(userCount)
    // var nodeData = new userNotification()

    //  nodeData.oldCount = 0
    //  nodeData.newData = []

    //  nodeData.save((err,data)=>{
    //      if(err){
    //          console.log(err)
    //      }else{
    //          console.log(data,"data")
    //      }
    //  })

})



router.delete('/delete', (req, res) => {
    let {id} = req.body
    userNotification.findOneAndDelete({_id:id}).exec((err, data) => {
        if(err) {
            res.send('error has occured')
        }else {
            res.json(data)
        }
    })

    // covidRegistration.collection.drop()
})

module.exports = router;