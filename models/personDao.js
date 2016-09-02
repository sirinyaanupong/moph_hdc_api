module.exports = {
	getPerson: function(db){
		return db('person')
			.select()
			.limit(5);
	},
	getPersonByCid: function(db, cid){
		return db('person')
			.select()
			.where('cid', cid);
	},
};