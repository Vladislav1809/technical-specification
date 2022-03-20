Ext.define('task_schedule.view.main.TaskWindow.TaskDeleteWindow', {
    extend: 'Ext.window.Window',

    xtype: 'task_delete_window',

    name: 'deleteButton',
    title: 'Are you sure?',

    layout: 'table',

    width: 300,
    height: 110,
    bodyPadding: 10,

    closable: false,

    requires: [
        "task_schedule.view.main.Task.TaskWindow.TaskWindowController",
        "task_schedule.view.main.Task.TaskWindow.TaskWindowModel"
    ],
    controller: 'taskWindow',

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