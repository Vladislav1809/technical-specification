Ext.define('task_schedule.store.UserStore', {

    extend: 'Ext.data.Store',

    fields: ['id', 'name', 'tasks'],

    alias: 'store.UserStore',
    proxy: {
        method: 'GET',
        type: 'ajax',
        url: 'http://localhost:63342/technical-specification/api.php?act=Client&method=getClients',
        reader: {
            type: 'json',
        }
    },
    // data: {
    //     items: [
    //         {id: '1', users: 'Petya', tasks: 'Home Work'},
    //         {id: '2', users: 'Vasya', tasks: 'Go home'},
    //
    //     ],
    // },
    // proxy: {
    //     type: 'memory',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'items'
    //     }
    // },
    autoLoad: true

});