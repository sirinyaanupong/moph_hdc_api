module.exports = {
	getFunctionalByCid: function(db, cid){
		return db('functional as f')
			.select()
			.innerJoin('person as p', function () {
                this.on('p.pid', '=', 'f.pid')
                    .andOn('p.hospcode', '=', 'f.hospcode')
            })
			.where('p.cid', cid);
	},
};