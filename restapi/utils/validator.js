module.exports = {
  user: (app, req, res) => {
    req.assert("_name", "O campo Nome é obrigratório.").notEmpty();
    req
      .assert("_email", "E-mail inválido.")
      .notEmpty()
      .isEmail();

    let errors = req.validationErrors();
    if (errors) {
      app.utils.error.send(errors, req, res);
      return false;
    } else {
      return true;
    }
  }
};
