let ProjectModel = require("../models/project")

//create project..
const createProjects = (req, res) => {
    console.log("New Project added", req.body)
    var newproject = req.body;

    ProjectModel.insertProjects(newproject,(err,result)=> {
        if (err){
            res.json({statusCode: 400,message: err})
        }
        else{
            res.json({statusCode: 200, message:"project successfully added", data: result})
        }
        })
    
}

//retrieve project..
const retrieveProjects = (req,res) =>{
ProjectModel.getProjects((err, result)=> {
    if (err){
        res.json({statusCode: 400,message: err})
    }
    else{
        res.json({statusCode: 200, message:"success", data: result})
    }
    })
}
module.exports = {retrieveProjects, createProjects}