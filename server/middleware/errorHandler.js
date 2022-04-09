const mongoose = require('mongoose');

const errorHandler = async (err,req,res,next) => {
    if(err instanceof mongoose.Error.ValidationError){
        const errors ={title:'',description:'', time:''};
        Object.values(err.errors).forEach(({properties}) => errors[properties.path] = properties.message);
        return res.status(400).json({ msg: errors });
        }
    return res.status(500).json({ msg: 'Something went wrong, please try again' });
}

module.exports = errorHandler;