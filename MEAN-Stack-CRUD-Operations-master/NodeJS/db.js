const mongoose = require('mongoose');

mongoose.connect('mongodb://rahulkadam:rahulkadam7@ds221115.mlab.com:21115/cruddb1', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : \n' + JSON.stringify(err, undefined, 3));
});

module.exports = mongoose;