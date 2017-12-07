'use strict';

const db = require('../index');
db.Campus = require('./campus')
db.Student = require('./student')

db.Student.belongsTo(db.Campus, {
	foreignKey: {
    field: 'campusId',
    allowNull: false
  },
  onDelete: 'cascade'
});

module.exports = db
