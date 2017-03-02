module.exports = {
    getProvice: function (db) {
        return db('cchangwat')
            .select('changwatcode as id', 'changwatname as name')
            .where('changwatcode', '!=', '')
            .andWhere('changwatcode', '!=', '99');
    },

    getAmphoe: function (db) {
        return db('campur')
            .select('ampurcode as id', 'ampurname as name');
    },

    getTumbon: function (db) {
        return db('ctambon')
            .select('tamboncode as id', 'tambonname as name');
    },

    getAmphoeByProvice: function (db, provice) {
        return db('campur')
            .select('ampurcode as id', 'ampurname as name')
            .where('changwatcode', provice);
    },

    getTumbonByAmphoeAndProvice: function (db, provice, amphoe) {
        return db('ctambon')
            .select('tamboncode as id', 'tambonname as name')
            .where({
                'changwatcode': provice,
                'ampurcode': amphoe
            });
    }
}