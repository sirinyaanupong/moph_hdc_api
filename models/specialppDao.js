module.exports = {
	getSpecialppByCid: function(db, cid){
		return db('specialpp as s')
			.select()
			.innerJoin('person as p', function () {
                this.on('p.pid', '=', 's.pid')
                    .andOn('p.hospcode', '=', 's.hospcode')
            })
			.where('p.cid', cid);
	},
};