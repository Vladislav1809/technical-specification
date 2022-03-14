Ext.define('task_schedule.store.WindowStore', {

    extend: 'Ext.data.Store',

    fields:[ 'id', 'name', 'users','date','deadline'],

    alias: 'store.WindowStore',

    data: {
        items: [
            {id: '1', name: 'Home Work', users: 'user', date: '11.03.2022', deadline: '20.03.2022'},
            {id: '2', name: 'Home Work1', users: 'user1', date: '11.03.2022', deadline: '20.03.2022'},

        ],
    },
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },

});