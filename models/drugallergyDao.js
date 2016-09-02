module.exports = {
	getDrugallergyByCid: function(db, cid){
		return db('drugallergy as d')
			.select()
			.innerJoin('person as p', function () {
                this.on('p.pid', '=', 'd.pid')
                    .andOn('p.hospcode', '=', 'd.hospcode')
            })
			.where('p.cid', cid);
	},
};