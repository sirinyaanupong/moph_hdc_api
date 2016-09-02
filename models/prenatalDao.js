module.exports = {
	getPrenatalByCid: function(db, cid){
		return db('prenatal as pre')
			.select()
			.innerJoin('person as p', function () {
                this.on('p.pid', '=', 'pre.pid')
                    .andOn('p.hospcode', '=', 'pre.hospcode')
            })
			.where('p.cid', cid);
	},
	getPrenatalByGroupCid: function(db, cids){
		return db('prenatal as pre')
			.select()
			.innerJoin('person as p', function () {
                this.on('p.pid', '=', 'pre.pid')
                    .andOn('p.hospcode', '=', 'pre.hospcode')
            })
			.whereIn('p.cid', cids);
	},
};