Ext.define('task_schedule.view.main.Task.Task', {
    extend: 'Ext.panel.Panel',
    xtype: 'task',
    requires: [
        'task_schedule.view.main.Task.TaskController'
    ],
    layout: 'vbox',
    width: '100%',
    controller: 'task',
    items: [
        {
            style: 'background-color: #800080',
            border: 0,
            xtype: 'button',
            text: 'Create',
            scale: 'large',
            handler: 'ClickCreate'

        },
        {
            xtype: 'taskgrid'
        }
    ],
    buttons: [
        {
            style: 'background-color: #800080',
            border: 0,
            xtype: 'button',
            text: 'Get PDF',
            scale: 'large',
            handler: 'getPdf',
            margin: 5,
        },
    ]

});

