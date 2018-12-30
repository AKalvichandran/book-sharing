const Book = require('./books.model')


const list =  (req,res) => {
    Book.find((err,books) => {
        if(err) {
            res.send(err);
        }
        res.send(books);
    });
}

const find = (req,res) => {
    Book.findById(req.params.bookId,(err,book) => {
        if(err) {
            res.send(err)
        }
        res.send(book);
    })
}
module.exports = {list,find}