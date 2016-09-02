module.exports = {
	getCommunity_serviceByCid: function(db, cid){
		return db('community_service as c')
			.select()
			.innerJoin('person as p', function () {
                this.on('p.pid', '=', 'c.pid')
                    .andOn('p.hospcode', '=', 'c.hospcode')
            })
			.where('p.cid', cid);
	},
};