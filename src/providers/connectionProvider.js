const mongoose = require('mongoose');
const config = require('config');
const connectionConfig = config.get('connection-string');

//Conexão ao MONGO
// mongodb+srv://m001-donate:BM5VWRo0xjHDj3eH@sandbox.5kgav.mongodb.net/?retryWrites=true&w=majority
exports.connect = ()=> {
    mongoose.connect(connectionConfig.value,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
            // useFindAndModify: false
        })
    .then(() => console.log('DB connected'))
    .catch(err => {
        console.log('DB connection Error ' + err)
    });
};
