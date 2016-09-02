module.exports = {
	getCardByCid: function(db, cid){
		return db('card as c')
			.select()
			.innerJoin('person as p', function () {
                this.on('p.pid', '=', 'c.pid')
                    .andOn('p.hospcode', '=', 'c.hospcode')
            })
			.where('p.cid', cid);
	},
};