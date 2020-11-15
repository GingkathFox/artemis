exports.npm = function () {
  request = require(`request`);
  Discord = require("discord.js");
  db = require("better-sqlite3")("./scores.sqlite");
  ln = require("./ln.js");
  wtf = require("wtf_wikipedia");
  fs = require("fs");
  moment = require("moment");
  googleIt = require("google-it");
  translate = require("translate-google");
  Client = require("../client/Client");
  YouTube = require("simple-youtube-api");
  ytdl = require("ytdl-core");
  curl = require("curl");
  htmlText = require("html-text");
  Canvas = require("canvas");
  configfile = require("../config.json");
  dashboard = require("./discord-bot-dashboard.js");
  htmlToText = require("html-to-text");
  ffmpeg = require("fluent-ffmpeg");
  Captcha2 = require("./captcha.js");
  https = require("https");
  Stream = require("stream");
  path = require("path");
  gis = require('g-i-s');
  searchGoogle = require("npm-search-google/disk/search-keyword-google");
  Twitch = require("./twitchModule.js");
  cleverbot = require("cleverbot-free");
  search = new searchGoogle();
  youtube = new YouTube(configfile.youtubekey);
  msgRecently = new Set();
  noticeset = new Set();
  congratulationsRecently = new Set();
};
