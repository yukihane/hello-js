"use strict";

const electron = require("electron");
const remote = electron.remote;
const fileUtil = remote.require("./lib/fileUtil");

fileUtil.fetchReadmeList(function (err, matches) {
  if (!err) document.write(matches.join());
});
