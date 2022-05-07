"use strict";

let Generator = require('yeoman-generator');
module.exports = class extends Generator {
    work() {
        console.log("Welcome to your new Data Science Project!");
        console.log("copying files and folders...");
        this.fs.copy(
            this.templatePath('**/!(*.tpl)'),
            this.destinationPath()
        );
    }
};