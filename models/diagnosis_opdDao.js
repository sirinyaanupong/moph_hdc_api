module.exports = {
	getDiagnosis_opdByCid: function(db, cid){
		return db('diagnosis_opd as d')
			.select()
			.innerJoin('person as p', function () {
                this.on('p.pid', '=', 'd.pid')
                    .andOn('p.hospcode', '=', 'd.hospcode')
            })
			.where('p.cid', cid);
	},
};