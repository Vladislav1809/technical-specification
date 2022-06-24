Ext.define('task_schedule.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'id', 'name', 'phone'
    ],


    data: {
        items: [
            {id: 1, name: "Nastya", phone: 'Nastya'},
            {id: 2, name: "Petya", phone: "555-111-1111"},
            {id: 3, name: "Stepan", phone: "555-222-2222"},
            {id: 4, name: "Vlad", hone: "555-333-3333"},
            {id: 5, name: "Alex", phone: "555-444-4444"}
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
