module.exports = {
	getAddressByCid: function(db, cid){
		return db('address as a')
			.select()
			.innerJoin('person as p', function () {
                this.on('p.pid', '=', 'a.pid')
                    .andOn('p.hospcode', '=', 'a.hospcode')
            })
			.where('p.cid', cid);
	},
};