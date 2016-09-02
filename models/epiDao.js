module.exports = {
	getEpi: function(db){
		return db('epi')
			.select()
			.limit(5);
	},
	getEpiByCid: function(db, cid){
		return db('epi as e')
			.select()
			.innerJoin('person as p', function () {
                this.on('p.pid', '=', 'e.pid')
                    .andOn('p.hospcode', '=', 'e.hospcode')
            })
            // .innerJoin('cvaccinetype as v', 'v.id_vaccinetype', 'e.vaccinetype')
			.where('p.cid', cid);
	},
	getEpiByGroupCid: function(db, cids){
		return db('epi as e')
			.select()
			.innerJoin('person as p', function () {
                this.on('p.pid', '=', 'e.pid')
                    .andOn('p.hospcode', '=', 'e.hospcode')
            })
			.whereIn('p.cid', cids);
	},
};