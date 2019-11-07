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
// return db('steps')
// .select("steps.id", "scheme.scheme_name", "steps.step_number", "steps.instructions")
// .join("schemes", "steps.scheme_id", "schemes.id")
// .where({id})
// .orderBy("steps.step_number","asc")
  return db('schemes')
    .select('schemes.id',
            'schemes.scheme_name',
            'steps.step_number',
            'steps.instructions'
    )
    // .from('schemes')
    .join('steps', 'schemes.id', 'steps.scheme_id')
    .where({ scheme_id: id })
    .orderBy('step_number');
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