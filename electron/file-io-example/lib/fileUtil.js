const glob = require("glob");

const fileUtil = {
  fetchReadmeList: function (cb) {
    glob("node_modules/**/README.md", function (err, matches) {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, matches);
    });
  },
};

module.exports = fileUtil;
