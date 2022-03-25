Ext.define('task_schedule.store.WindowStore', {

    extend: 'Ext.data.Store',

    fields: ['id', 'name', 'users', 'date', 'deadline'],

    alias: 'store.WindowStore',
    proxy: {
        method: 'GET',
        type: 'ajax',
        url: 'http://localhost:63342/technical-specification/api.php?act=Task&method=getTasks',
        reader: {
            type: 'json',
        }
    },
    autoLoad: true
});