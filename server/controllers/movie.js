const Movie = require('../models').Movie;
const xlsx = require('xlsx');
const fs = require('fs');
module.exports = {
    create(req,res){
        return Movie.create({
            name: req.body.name,
            date: Date.now(),
            description: req.body.description,
            rating: req.body.rating
        }).then(movie => res.status(201).send(movie))
        .catch(err => res.status(400).send(err));

    },
    findAll(req,res){
        return Movie
        .findAll()
        .then((movies) => 
        {
            res.status(201).send(movies);
           

        })
        .catch(err => res.status(400).send(err));
    },
    findById(req,res){
        return Movie
        .findByPk(req.params.id)
        .then( (movie) => {
            res.status(201).send(movie);
            
        })
            
        .catch(err => res.status(400).send(err));
    },
    update(req,res){
        return Movie
        .findByPk(req.params.id)
        .then( (movie) => {
            if(!movie)
                return res.status(400).send("Not found");
            return movie.update({
                name: req.body.name,
                description: req.body.description,
                rating : req.body.rating
            }).then(() => res.status(201).send(movie));
        } )
        .catch(err => res.status(400).send(err));
    },
    delete(req,res){
        return Movie
        .destroy({
           where : {id: req.params.id }
        })
        .then( () => {
            return res.status(200).send();
        })
        .catch(err => res.status(404).send(err));
    },
    print(req,res)
    {
          Movie
          .findAll({
            raw : true,
            attributes: ['id', 'name', 'rating']
          })
          .then((movies) => 
          {
            
            const ws = xlsx.utils.json_to_sheet(movies);
            const wb = xlsx.utils.book_new();
            xlsx.utils.book_append_sheet(wb,ws,req.params.file);
            xlsx.writeFile(wb,req.params.file + '.xlsx');
            res.status(201).send();
             
  
          })
          .catch(err => res.status(400).send(err));
      

    }

}