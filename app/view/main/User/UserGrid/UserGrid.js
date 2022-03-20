Ext.define('task_schedule.view.main.User.UserGrid.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergrid',
    itemId: 'UserGrid',
    store: 'task_schedule.store.UserStore',

    requires: [
        'task_schedule.view.main.User.UserWindow.UserWindowController',
    ],
    controller: "usergrid",

    columns: [
        {
            text: 'id',
            dataIndex: 'id'
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
                if (typeof value !== 'undefined'){
            //
            //         return value.map((val, index) => {
            //              return index !== (value.length - 1) ? val.name + ' ' : val.name;
            //         });
                    for (let i = 0; i < value.length; i++ ){
                        let element = value[i]
                        if (i !== value.length - 1){
                            tasks += element.name + ', '
                        } else{
                            tasks += element.name
                        }
                    }
                    return tasks;
                }
                // debugger;
                // return tasks;
            }
        },
        {
            text: '',
            align: 'center',
            xtype: 'widgetcolumn',
            size: '100%',
            widget: {
                xtype: 'button',
                align: 'center',
                pack: 'center',
                text: "Delete",
                defaultBindProperty: true, //important
                handler: 'clickDelete'
                // listeners: {
                //     // some function to delete row
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