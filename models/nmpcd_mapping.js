module.exports = {
	getDc24ByQuery: function (db, query) {
		return db('dc24')
			.select('std_code', 'T_Code', 'tradeName', 'item', 'comp')
			.where('std_code', 'like', query)
			.orWhere('tradeName', 'like', query)
			.orWhere('item', 'like', query)
			.orWhere('comp', 'like', query);
	},

	getTpByQuery: function (db, query) {
		return db('tp')
			.select('TPID', 'FSN')
			.where('TPID', 'like', query)
			.orWhere('FSN', 'like', query)
			.orWhere('MANUFACTURER', 'like', query);
	},

	insertDc24ToTp: function (db, stdCode, tpId) {
		return db('dc24totp')
			.insert([{
				STD_CODE: dc24
				, TPID: tp
				, blnConfirmed: 0
			}]);
	},

	updateDc24ToTp: function (db, stdCode, tpId, confirm) {
		return db('dc24totp')
			.where('STD_CODE', dc24)
			.andWhere('TPID', tp)
			.update({
				blnConfirmed: 'archived',
				thisKeyIsSkipped: undefined
			});
	},

	deleteDc24ToTp: function (db, stdCode, tpId) {
		return db('dc24totp')
			.where('STD_CODE', dc24)
			.andWhere('TPID', tp)
			.del();
	},

	searchLabeler: function (db) {
		return db('tblabeler');
	},

	getLabelerById: function (db, id) {
		return db('tblabeler')
			.where('strlabelerid', id);
	},

	getOrganizationById: function (db, id) {
		return db('tborganization')
			.where('strlabelerid', id);
	},

	insertLabeler: function (db, strlabelerid, strlabelername, strdescription, strnin,
		strlabelertype, strstatus, strdisabledate, straddress, strtumbon,
		stramphoe, strprovice, strzipcode, strphone, strurl) {
		return db('tblabeler')
			.insert({
				'strlabelerid': strlabelerid,
				'strlabelername': strlabelername,
				'strdescription': strdescription,
				'strnin': strnin,
				'strlabelertype': strlabelertype,
				'strstatus': strstatus,
				'strdisabledate': strdisabledate,
				'straddress': straddress,
				'strtumbon': strtumbon,
				'stramphoe': stramphoe,
				'strprovice': strprovice,
				'strzipcode': strzipcode,
				'strphone': strphone,
				'strurl': strurl
			})
	},

	updateLabeler: function (db, strlabelerid, strlabelername, strdescription, strnin,
		strlabelertype, strstatus, strdisabledate, straddress, strtumbon,
		stramphoe, strprovice, strzipcode, strphone, strurl) {
		return db('tblabeler')
			.where('strlabelerid', strlabelerid)	
			.update({
				'strlabelername': strlabelername,
				'strdescription': strdescription,
				'strnin': strnin,
				'strlabelertype': strlabelertype,
				'strstatus': strstatus,
				'strdisabledate': strdisabledate,
				'straddress': straddress,
				'strtumbon': strtumbon,
				'stramphoe': stramphoe,
				'strprovice': strprovice,
				'strzipcode': strzipcode,
				'strphone': strphone,
				'strurl': strurl
			})
	},

	insertOrganization: function (db, strlabelerid, strorgno, stryearregister, stryearestablished,
		strcountry, strfdanumber, strlatitude, strlongitude) {
		return db('tborganization')
			.insert({
				'strlabelerid': strlabelerid,
				'strorgno': strorgno,
				'stryearregister': stryearregister,
				'stryearestablished': stryearestablished,
				'strcountry': strcountry,
				'strfdanumber': strfdanumber,
				'strlatitude': strlatitude,
				'strlongitude': strlongitude
			})
	},

	updateOrganization: function (db, strlabelerid, strorgno, stryearregister, stryearestablished,
		strcountry, strfdanumber, strlatitude, strlongitude) {
		return db('tborganization')
			.where('strlabelerid', strlabelerid)	
			.update({
				'strorgno': strorgno,
				'stryearregister': stryearregister,
				'stryearestablished': stryearestablished,
				'strcountry': strcountry,
				'strfdanumber': strfdanumber,
				'strlatitude': strlatitude,
				'strlongitude': strlongitude
			})
	},
};