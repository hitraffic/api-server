"use strict";

module.exports = Task;
var Task = sequelize.define("task", {
  location: Sequelize.STRING
}, {
  classMethods: {
    associate: function(models) {
      Task.hasMany(models.Data);
    }
  }
});
