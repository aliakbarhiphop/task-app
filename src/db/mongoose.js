const mongoose = require('mongoose')
process.env.PORT
mongoose.connect(process.env.MONGODBPATH, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})