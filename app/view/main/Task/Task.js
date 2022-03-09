Ext.define('task_schedule.view.main.Task.Task', {
    extend: 'Ext.panel.Panel',
    xtype: 'task',

    layout: 'vbox',
    width: 1200,

    items: [
        {
            style: 'background-color: #800080',
            border: 0,
            xtype: 'button',
            text: 'Create',
            scale: 'large',
            handler: function () {
                Ext.create('task_schedule.view.main.TaskWindow.TaskWindow').show();
            }
        },
        {
            xtype: 'taskgrid'
        }
    ]

});

