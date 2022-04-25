Ext.define('task_schedule.view.main.User.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'user',
    requires: [
        'task_schedule.view.main.User.UserContoller'
    ],

    layout: {
        type: 'vbox',
    },
    controller: 'user',

    items: [
        {
            xtype: 'panel',
            margin: '0 0 5 0',
            items: [
                {
                    style: 'background-color: #800080',
                    border: 0,
                    xtype: 'button',
                    text: 'Create',
                    scale: 'large',
                    handler: 'ClickCreate'
                },
            ]
        },
        {
            xtype: 'usergrid',
            width: '100%'
        }
    ],
    buttons: [
        {
            style: 'nackground-color: #800080',
            border: 0,
            xtype: 'button',
            text: 'Get PDF',
            scale: 'large',
            handler: 'getPdf',
            margin: 5,
        },
    ]
});

