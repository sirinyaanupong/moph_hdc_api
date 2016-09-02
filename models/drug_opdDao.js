module.exports = {
	getDrug_opdByCid: function(db, cid){
		return db('drug_opd as d')
			.select()
			.innerJoin('person as p', function () {
                this.on('p.pid', '=', 'd.pid')
                    .andOn('p.hospcode', '=', 'd.hospcode')
            })
			.where('p.cid', cid);
	},
};