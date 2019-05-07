const movieController = require('../controllers').movie;
const tvshowController = require('../controllers').tvshow;
module.exports = (app) => {
    app.get('/api' , (req,res) => res.status(200).send({
        message: 'Welcome to api'
    }));
    app.post('/api/movie', movieController.create);
    app.get('/api/movie' ,movieController.findAll);
    app.get('/api/movie/:id', movieController.findById);
    app.put('/api/movie/:id',movieController.update);
    app.delete('/api/movie/:id', movieController.delete);
    app.get('/api/movie/print/:file',movieController.print);


    app.post('/api/tvshow', tvshowController.create);
    app.get('/api/tvshow' ,tvshowController.findAll);
    app.get('/api/tvshow/:id', tvshowController.findById);
    app.put('/api/tvshow/:id',tvshowController.update);
    app.delete('/api/tvshow/:id', tvshowController.delete);


};