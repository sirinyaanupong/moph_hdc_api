module.exports = {
	getDrug_ipdByCid: function(db, cid){
		return db('drug_ipd as d')
			.select()
			.innerJoin('person as p', function () {
                this.on('p.pid', '=', 'd.pid')
                    .andOn('p.hospcode', '=', 'd.hospcode')
            })
			.where('p.cid', cid);
	},
};