/**
 * Created by elane on 2016/12/14.
 */


var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './app/react01.js'),/*entry相当于指定入口*/
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    }
};

