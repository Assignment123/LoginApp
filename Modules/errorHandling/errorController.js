const errorModel = require("./errorModule");

exports.posting = (err, req, res, next) => {
    let user = new User({
      messageErr: err
    });

    user
      .save()
      .then(data => {
        res.json({ message: "error logs are saved" });
      })
      .catch(err => {
        res.status(500).json({
          message: "server error",
          messageErr: toString()
        });
      });
  };

  
  exports.getAll = ( req, res) => {
    errorModel.find()
      .sort({ added_on: "desc" })
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        res.status(500).json({
          message: "server error",
          messageErr: toString()
        });
      });
  };
  