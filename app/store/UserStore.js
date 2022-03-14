Ext.define('task_schedule.store.UserStore', {

    extend: 'Ext.data.Store',

    fields:[ 'id', 'users', 'tasks'],

    alias: 'store.UserStore',

    data: {
        items: [
            {id: '1', users: 'Petya', tasks: 'Home Work'},
            {id: '2', users: 'Vasya', tasks: 'Go home'},

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