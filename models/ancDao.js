module.exports = {
	getAncByCid: function(db, cid){
		return db('anc as a')
			.select()
			.innerJoin('person as p', function () {
                this.on('p.pid', '=', 'a.pid')
                    .andOn('p.hospcode', '=', 'a.hospcode')
            })
			.where('p.cid', cid);
	},
	// getAncByPeriod: function(db, startDate, endDate){
	// 	return db('anc as a')
	// 		.select()
	// 		.whereBetween('a.date_serv', [startDate, endDate])
	// 		.limit(5);
	// },
	getAncByPeriod: function(db, startDate, endDate){
		var sql = `select DATE_FORMAT(date_serv,'%Y%m%d') as date_serv
                  from anc 
                  where date_serv between ? and ?
                  limit 5`;
		// select * from anc
		// where DATE_FORMAT(date_serv,'%Y%m%d') between DATE_FORMAT('20140302','%Y%m%d') and DATE_FORMAT('20140302','%Y%m%d');
		return db.raw(sql, [startDate, endDate]);
	},
};