var mongoose = require('mongoose');
var Task = mongoose.model('Task');

module.exports = {
    
    // Function to show all the tasks

    showAll: function(req, res) {
        Task.find({}, function(err, tasks) {
            if(err) {
                console.log("Something went wrong", err);
            } else {
                console.log("All the tasks--------------------", tasks);
                res.json(tasks);
            }
        })
    },

    // Function to show task by ID

    showTask: function(req, res) {
        Task.findOne({_id: req.params.id}, function(err, task) {
            if(err) {
                console.log("Something went wrong", err);
            } else {
                console.log("Here is your task", task);
                res.json(task);
            }
        })
    },

    // Function to create a new task

    createTask: function(req, res) {
        console.log("Data from the URL: ", req.params);
        Task.create(req.params, function(err, task) {
            if(err) {
                console.log("Something went wrong", err);
            } else {
                console.log("Here is your task", task);
                res.send("Added a new task", task);
            }
        })
    },

    // Function to update a task by its ID

    updateTask: function(req, res) {
        Task.update({_id: req.params.id}, function(err, task) { 
            if(err) {
                console.log("Something went wrong", err);
            } else {
                console.log("Here is your task", task);
                res.send("Updated a new task", task);
            }
        })
    },

    // Function to delete a task by its ID

    deleteTask: function(req, res) {
        Task.remove({_id: req.params.id}, function(err, task) {
            if(err) {
                console.log("Something went wrong", err);
            } else {
                console.log("Here is your task", task);
                res.send("Deleted a task", task);
            }
        })
    }
}