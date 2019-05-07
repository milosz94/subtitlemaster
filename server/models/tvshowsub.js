'use strict';
module.exports = (sequelize, DataTypes) => {
  const TvshowSub = sequelize.define('TvshowSub', {
    path: DataTypes.STRING,
    language: DataTypes.STRING,
    episode: DataTypes.INTEGER,
    season: DataTypes.INTEGER
  }, {});
  TvshowSub.associate = function(models) {
    TvshowSub.belongsTo(models.Tvshow, {
      foreignKey: 'tvshowId',
      onDelete: 'CASCADE',
  });
  };
  return TvshowSub;
};