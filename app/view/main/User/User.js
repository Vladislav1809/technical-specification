Ext.define('task_schedule.view.main.User.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'user',
    requires: [
        'task_schedule.view.main.User.UserContoller'
    ],
    layout: 'vbox',
    width: '100%',
    controller: 'user',
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
            xtype: 'usergrid'
        }
    ]

});

