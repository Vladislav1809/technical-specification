Ext.define('task_schedule.view.main.User.UserGrid.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergrid',

    layout: 'column',
    width: '100%',
    store: {
        type: "UserStore"
    },
    requers: [
        'task_schedule.view.main.User.UserWindow.UserWindowController',
    ],
    controller: "usergrid",

    columns: [
        {
            text: 'id',
            dataIndex: 'id'
        },
        {
            text: 'Users',
            dataIndex: 'users',
            flex: 1
        },
        {
            text: 'Tasks',
            dataIndex: 'tasks',
            flex: 1
        },
        {
            text: '',
            align: 'center',
            xtype: 'widgetcolumn',
            widget: {
                xtype: 'button',
                text: "Delete",
                defaultBindProperty: null, //important
                handler: function(widgetColumn) {
                    alert("Got data!");
                },
                listeners: {
                    //some function to delete row
                }
            }
        }
    ],
    // listeners: {
    //     select: 'onItemGridSelected'
    // }
    listeners : {
        celldblclick: 'onItemGridSelected'
    },


});