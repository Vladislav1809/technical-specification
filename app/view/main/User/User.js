Ext.define('task_schedule.view.main.User.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'user_task',

    layout: 'vbox',
    width: 1200,

    items: [
        {
            style: 'background-color: #800080',
            border: 0,
            xtype: 'button',
            text: 'Create',
            scale: 'large'
        },
        {
            xtype: 'usergrid'
        }
    ]

});

