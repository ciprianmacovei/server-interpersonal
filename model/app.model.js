// const sql = require("../db.js");

const Form = function(form) {
    this.form = form.form;
    this.created_at = new Date();
};

Form.saveForm = function(newForm, result) {
    // sql.query(" INSERT INTO forms set ?", newForm, function(err, res) {
    //     if (err) {
    //         console.log("error : ", err);
    //         result(err, null);
    //     } else {
    //         console.log("inserted form with the id", res.insertId);
    //         result(null, res);
    //     }
    // })
}

module.exports = Form;