const Tvshow = require('../models').Tvshow;

module.exports = {

    create(req,res){
        return Tvshow.create({
            name: req.body.name,
            date: Date.now(),
            description: req.body.description,
            rating: req.body.rating
        }).then(tvshow => res.status(201).send(tvshow))
        .catch(err => res.status(400).send(err));

    },
    findAll(req,res){
        return Tvshow
        .findAll()
        .then((tvshows) => 
        {
            res.status(201).send(tvshows);
           

        })
        .catch(err => res.status(400).send(err));
    },
    findById(req,res){
        return Tvshow
        .findByPk(req.params.id)
        .then( (tvshow) => {
            res.status(201).send(tvshow);
            
        })
            
        .catch(err => res.status(400).send(err));
    },
    update(req,res){
        return Tvshow
        .findByPk(req.params.id)
        .then( (tvshow) => {
            if(!tvshow)
                return res.status(400).send("Not found");
            return tvshow.update({
                name: req.body.name,
                description: req.body.description,
                rating : req.body.rating
            }).then(() => res.status(201).send(tvshow));
        } )
        .catch(err => res.status(400).send(err));
    },
    delete(req,res){
        return Tvshow
        .destroy({
           where : {id: req.params.id }
        })
        .then( () => {
            return res.status(200).send();
        })
        .catch(err => res.status(404).send(err));
    }


}