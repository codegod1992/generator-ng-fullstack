'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var util = require('util');

var NgFullstack = function() {
  yeoman.generators.Base.apply(this, arguments);
}

util.inherits(NgFullstack, yeoman.generators.Base)

NgFullstack.prototype.initializing = function() {
  this.pkg = require('../package.json');
}

NgFullstack.prototype.prompting = function() {
  this.log(yosay('Welcome to the terrific ' + chalk.green('NgFullstack') + ' generator!'));
}

NgFullstack.prototype.writing = function() {
  var _app = {app: this.appName};
  var _username = {username: this.githubUsername};
  var _appAndUsername = {app: _app.app, username: _username.username};
  var _server = this.server;
  var _transpilerServer = this.transpilerServer;
  var _jspm = this.jspm;

  this.template('_package.json', 'package.json', _appAndUsername);
  this.template('_bower.json', 'bower.json', _appAndUsername);
  this.template('_README.md', 'README.md', _appAndUsername);

  this.template('_gulpfile.js', 'gulpfile.js', _app);
  this.template('_karma.conf.js', 'karma.conf.js', _app);
  this.template('_protractor.conf.js', 'protractor.conf.js', _app);

  this.template('_newrelic.js', 'newrelic.js', _app);

  this.template('_procfile.txt', 'procfile.txt', _app);

  this.template('_.bowerrc', '.bowerrc');
  this.template('_.travis.yml', '.travis.yml');
  this.template('_.gitignore', '.gitignore');
  this.template('_.editorconfig', '.editorconfig');
  this.template('_.jshintrc','.jshintrc');

  this.directory('client', 'client');

  if (_jspm) {
    this.template('client_jspm/dev/config.js', 'client/dev/config.js');
    this.template('client_jspm/dev/index.js', 'client/dev/index.js');
    this.template('client_jspm/dev/index.html', 'client/dev/index.html');

    this.directory('client_jspm/dev/views', 'client/dev/views');
    this.directory('client_jspm/dev/js', 'client/dev/js');
  }

  switch(_server) {
    case "node":
                  if (_transpilerServer !== "Typescript")
                  {
                    this.directory('server_node_babel', 'server');
                    this.template('index.js', 'index.js');
                    break;
                  }

                  this.directory('server_node_typescript', 'server');
                  this.template('index_tsc.js', 'index.js');

                  break;

    //TODO: in case it's go server, change the paths, because the username and appname will have to be part of it
    case "Go": this.directory('server_go', 'server');
               this.template('server_go/main.go', 'server/main.go', {appName: _app.app, username: _username.username});
               this.template('server_go/routes/routes.go', 'server/routes/routes.go', {appName: _app.app, username: _username.username});
               break;
  }

  this.directory('tests', 'tests');
}

NgFullstack.prototype.install = function() {
  var _installOpts = {skipInstall: this.options['skip-install']};

  this.installDependencies(_installOpts);
}

NgFullstack.prototype.prompUser = function() {
  var done = this.async();

  var prompts =
    [
      {
        name: 'appName',
        message: 'What is the name of your app?',
        default: 'some-name-here'
      },
      {
        name: 'githubUsername',
        message: 'What is your username on Github?',
        default: 'some-username-here'
      },
      {
        type: "list",
        name: "server",
        message: "What are you using in server side?",
        choices: ["node", "Go"],
        default: 0
      },
      {
        type: "list",
        name: "angular",
        message: "What AngularJS version do you want?",
        choices: ["1.x ", "2.x"],
        default: 0
      }
    ];

  this.prompt(prompts, function(props) {
    this.appName = props.appName;
    this.githubUsername = props.githubUsername;
    this.server = props.server;
    this.jspm = props.jspm;
    this.angular = props.angular;

    this.config.set('server', this.server);
    this.config.set('username', this.githubUsername);
    this.config.set('appName', this.appName);
    this.config.set('angular', this.angular);

    done();
  }.bind(this));

  this.config.save();
}

NgFullstack.prototype.promptUserTranspilerServer = function() {

  var done = this.async();

  var _prompts = [{
        type: "list",
        name: "transpilerServer",
        message: "What transpiler do you want to use in server side?",
        choices: ["Babel", "Typescript"],
        default: 0,
        when: function() {
            return this.server === "node";
        }.bind(this)
      }];

  this.prompt(_prompts, function(props) {
    this.transpilerServer = props.transpilerServer;

    this.config.set('transpilerServer', this.transpilerServer);

    done();
  }.bind(this));

  this.config.save();
}

module.exports = NgFullstack;
