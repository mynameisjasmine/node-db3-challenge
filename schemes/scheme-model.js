const db = require('../data/dbConfig.js');


module.exports = {
 find,
 findById,
 findSteps,
 add,
 update,
 remove,
};

function find() {
return db('schemes')
}

function findById(id) {
return db('schemes')
.where({ id: Number(id) })
.first()
}

function findSteps(id) {
return db('steps')
.orderBy()
}

function add(scheme) {
return db('schemes')
.insert(scheme)
.then(id => {
 return findById(id[0])
 });
}

function update(changes, id) {
return db('schemes')
.where({ id: Number(id)})
.update(changes)
}

function remove(id) {
return db('schemes')
.where('id', id)
.del();
}