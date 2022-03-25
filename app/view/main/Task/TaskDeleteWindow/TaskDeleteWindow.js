Ext.define('task_schedule.view.main.TaskDeleteWindow.TaskDeleteWindow', {
    extend: 'Ext.window.Window',

    xtype: 'task_delete_window',
    itemId: 'deleteWindow',
    name: 'deleteButton',
    title: 'Are you sure?',

    layout: 'vbox',

    width: 300,
    height: 110,
    bodyPadding: 10,

    closable: false,

    requires: [
        "task_schedule.view.main.Task.TaskDeleteWindow.TaskDeleteController",
        "task_schedule.view.main.Task.TaskDeleteWindow.TaskDeleteWindowModel"
    ],
    controller: 'taskDeleteWindow',
    viewmodel: 'taskDeleteWindow',

    buttons: [
        {
            style: 'background-color: #800080',
            scale: 'medium',
            text: 'Delete',
            handler: 'ClickDeleteTask'
        },

        {
            style: 'background-color: #800080',
            text: 'Close',
            scale: 'medium',
            handler: 'clickClose'
        }
    ]
})