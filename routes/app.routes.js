module.exports = function(app) {
    const form = require("../controller/form.controller.js");
    app.route("/")
        .get(form.get_main_app)
    app.route('/webdesign')
        .get(form.get_webdesign_page)
    app.route("/form")
        .get(form.get_react_app);
    // app.route("/form")
    //     .post(form.create_a_form);
};