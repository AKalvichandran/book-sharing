const User = require('./user.model')


const list =  (req,res) => {
    User.find((err,users) => {
        if(err) {
            res.send(err);
        }
        res.send(users);
    });
}

const find = (req,res) => {
    User.findById(req.params.userId,(err,user) => {
        if(err) {
            res.send(err)
        }
        res.send(user);
    })
}
module.exports = {list,find}