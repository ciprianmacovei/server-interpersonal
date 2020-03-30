const path = require("path");
const Form = require('../model/app.model.js');

exports.create_a_form = function(req, res) {
    var new_form = new Form(req.body);

    //handles null error 
    if (!new_form.form) {
        res.status(400).send({ error: true, message: 'Please provide task/status' });
    } else {

        Form.saveForm(new_task, function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    }
};


exports.get_react_app = function(req, res) {
    console.log(path.join(__dirname, '/public/build', 'index.html'));
    res.sendFile('/Users/macoveiciprian/Desktop/React Server/server-interpersonal/public/build/index.html');
}

exports.get_main_app = function(req, res) {
    res.sendFile(path.join(__dirname, '/public', 'index.html'))
}