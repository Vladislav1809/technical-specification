Ext.define('task_schedule.view.main.Task.TaskGrid.TaskGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'taskgrid',
    itemId: 'taskGrid',
    layout: 'vbox',
    width: '100%',
    store: {
        type: "WindowStore"
    },
    requers: [
        'task_schedule.view.main.Task.TaskWindow.TaskWindowController',
    ],
    controller: "taskGrid",

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
            flex: 1,
            renderer: function (value)
            {
                let users = ''
                if (typeof(value) !== 'undefined'){
                    for (let i = 0; i < value.length; i++){
                        let element = value[i]
                        if (i !== value.length - 1){
                            users += element.name + ', '
                        }else{
                            users += element.name
                        }
                    }
                }
                return users
            }
        },
        {
            text: 'Date of create',
            dataIndex: 'dateOfCreate',
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
                handler: 'clickDelete',
                // listeners: {
                //     delete: 'delete'
                // }
            }
        }
    ],
    // listeners: {
    //     select: 'onItemGridSelected'
    // }
    listeners : {
        celldblclick: 'onItemGridSelected',
        beforerender: function(item) {
            item.getStore().load()
        }
    }


});