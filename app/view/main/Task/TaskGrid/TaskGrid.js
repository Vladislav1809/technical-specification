Ext.define('task_schedule.view.main.Task.TaskGrid.TaskGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'taskgrid',

    layout: 'vbox',
    width: '100%',
    store: {
        type: "WindowStore"
    },
    requers: [
        'task_schedule.view.main.Task.TaskWindow.TaskWindowController',
    ],
    controller: "taskgrid",

    columns: [
        {
            text: 'id',
            dataIndex: 'id'
        },
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        },
        {
            text: 'Users',
            dataIndex: 'users',
            flex: 1
        },
        {
            text: 'Date of create',
            dataIndex: 'date',
            flex: 1
        },
        {
            text: 'Deadline',
            dataIndex: 'deadline',
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