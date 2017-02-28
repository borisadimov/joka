require('shelljs/global');
const path = require('path');
const ora = require('ora');
var replace = require("replace");

const webpackConfig = require('./webpack.prod.conf');


let spinner = ora('cleaning production build');
spinner.start();

let oldPath = path.resolve(__dirname)
let destPath = path.resolve(__dirname, '../dist');


cd(destPath);

rm('-rf', '.git');
exec('git init .');
exec("git add -A");
exec("git commit -m 'updated static views'");
exec("git remote add origin git@github.com:iamjoka/iamjoka.github.io.git");
exec("git push -f --set-upstream origin master");

cd(oldPath);



spinner.stop();
