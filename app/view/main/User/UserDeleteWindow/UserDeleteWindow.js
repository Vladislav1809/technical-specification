Ext.define('task_schedule.view.main.User.UserDeleteWindow.UserDeleteWindow', {
    extend: 'Ext.window.Window',

    xtype: 'user_delete_window',
    itemId: 'deleteWindow',
    name: 'deleteButton',
    title: 'Are you sure?',

    layout: 'vbox',

    width: 300,
    height: 110,
    bodyPadding: 10,

    closable: false,

    requires: [
        "task_schedule.view.main.User.UserDeleteWindow.UserDeleteController",
        "task_schedule.view.main.User.UserDeleteWindow.UserDeleteWindowModel"
    ],
    controller: 'userDeleteWindow',
    viewmodel: 'userDeleteWindow',

    buttons: [
        {
            style: 'background-color: #800080',
            scale: 'medium',
            text: 'Delete',
            handler: 'ClickDeleteUser'
        },

        {
            style: 'background-color: #800080',
            text: 'Close',
            scale: 'medium',
            handler: 'clickClose'
        }
    ]
})