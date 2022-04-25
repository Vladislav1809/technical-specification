Ext.define('task_schedule.view.main.User.UserGrid.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergrid',
    itemId: 'UserGrid',
    store: 'task_schedule.store.UserStore',

    requires: [
        'task_schedule.view.User.UserGrid.UserGridContoller',
    ],
    controller: "usergrid",

    columns: [
        {
            text: 'id',
            dataIndex: 'id',
            xtype: 'rownumberer'
        },
        {
            text: 'User',
            dataIndex: 'name',
            flex: 1
        },
        {
            text: 'Tasks',
            dataIndex: 'tasks',
            flex: 1,
            renderer: function (value) {
                let tasks = ''
                if (typeof value !== 'undefined') {
                    for (let i = 0; i < value.length; i++) {
                        let element = value[i]
                        if (i !== value.length - 1) {
                            tasks += element.name + ', '
                        } else {
                            tasks += element.name
                        }
                    }
                    return tasks;
                }
            }
        },
        {
            align: 'center',
            xtype: 'actioncolumn',
            flex: 0.5,
            items: [
                {
                    xtype: 'button',
                    itemId: 'delBtn',
                    iconCls: 'x-btn-delete',
                    handler: 'clickDelete'
                }
            ]
        }
    ],
    listeners: {
        celldblclick: 'onItemGridSelected',
        beforerender: function (item) {
            item.getStore().load()
        }
    }


});