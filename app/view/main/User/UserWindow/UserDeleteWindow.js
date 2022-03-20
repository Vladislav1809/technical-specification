Ext.define('task_schedule.view.main.UserWindow.UserDeleteWindow', {
    extend: 'Ext.window.Window',

    xtype: 'user_delete_window',

    name: 'deleteButton',
    title: 'Are you sure?',

    layout: 'table',

    width: 300,
    height: 110,
    bodyPadding: 10,

    closable: false,


    controller: 'userWindow',

    buttons: [
        {
            style: 'background-color: #800080',
            scale: 'medium',
            text: 'Delete',
            handler: 'clickDelete'
        },

        {
            style: 'background-color: #800080',
            text: 'Close',
            scale: 'medium',
            handler: 'clickDeleteClose'
        }
    ]
})