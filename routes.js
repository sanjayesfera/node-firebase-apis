var express = require("express");
var firebase = require("./firebase-connection.js");

const router = express.Router();

router.get("/", function(req, res) {
    console.log("Application successfully connected");
    res.status(200).json({
        message:"Application Started."
    });
  });

//Fetch instances
router.get("/employee", function(req, res) {
    console.log("HTTP Get Request");
    var userReference = firebase.database().ref("/Employees/");
  
    //Attach an asynchronous callback to read the data
    userReference.on(
      "value",
      function(snapshot) {
        console.log(snapshot.val());
        res.json(snapshot.val());
        userReference.off("value");
      },
      function(errorObject) {
        console.log("The read failed: " + errorObject.code);
        res.send("The read failed: " + errorObject.code);
      }
    );
  });
  
  //Create new instance
  router.post("/employee", function(req, res) {
    console.log("HTTP POST Request");
  
    var userName = req.body.UserName;
    var empID = req.body.empID;
    var name = req.body.Name;
    var age = req.body.Age;
  
    var referencePath = "/Employees/" + empID + "/";
    var userReference = firebase.database().ref(referencePath);
    userReference.set({ Name: name, Age: age, Username: userName }, function(error) {
      if (error) {
        res.send("Data could not be saved." + error);
      } else {
        res.status(200).json({
            message:"New Employee created successfully"
        });
      }
    });
  });
  
  //Update existing instance
  router.put("/employee", function(req, res) {
    console.log("HTTP PUT Request");
  
    var userName = req.body.UserName;
    var empID = req.body.empID;
    var name = req.body.Name;
    var age = req.body.Age;
  
    var referencePath = "/Employees/" + empID + "/";
    var userReference = firebase.database().ref(referencePath);
    userReference.update({ Name: name, Age: age, Username: userName }, function(error) {
      if (error) {
        res.send("Data could not be updated." + error);
      } else {
        res.status(200).json({
            message:"Employee updated successfully"
        });
      }
    });
  });
  
  //Delete an instance
  router.delete("/employee", function(req, res) {
    console.log("HTTP DELETE Request");
    
    var empID = req.body.empID;
  
    var referencePath = "/Employees/" + empID + "/";
    var userReference = firebase.database().ref(referencePath);
    userReference.remove(function() {
        res.status(200).json({
            message:"Employee removed successfully"
        });
      }).catch(function(error) {
        res.send("Failed to delete data.");
      });
  });

  module.exports = router;