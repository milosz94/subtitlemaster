'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tvshow = sequelize.define('Tvshow', {
    name: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    description: DataTypes.TEXT,
    rating: DataTypes.DOUBLE
  }, {});
  Tvshow.associate = function(models) {
    Tvshow.hasMany(models.TvshowSub, {
      foreignKey: 'tvshowId',
      as: 'tvshowsubs',
    });
  };
  return Tvshow;
};