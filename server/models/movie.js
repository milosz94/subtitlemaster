'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    name: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    description: DataTypes.TEXT,
    rating: DataTypes.DOUBLE
  }, {});
  Movie.associate = function(models) {
    Movie.hasMany(models.MovieSub, {
      foreignKey: 'movieId',
      as: 'moviesubs',
    });
  };
  return Movie;
};