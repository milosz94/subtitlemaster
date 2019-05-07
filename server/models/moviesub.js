'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieSub = sequelize.define('MovieSub', {
    path: DataTypes.STRING,
    language: DataTypes.STRING
  }, {});
  MovieSub.associate = function(models) {
    MovieSub.belongsTo(models.Movie, {
        foreignKey: 'movieId',
        onDelete: 'CASCADE',
    });


  };
  return MovieSub;
};