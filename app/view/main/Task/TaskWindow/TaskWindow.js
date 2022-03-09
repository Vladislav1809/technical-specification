Ext.define('task_schedule.view.main.TaskWindow.TaskWindow', {
    extend: 'Ext.window.Window',
    // bodyCls: 'popWindow',
    xtype: 'user_window',
    title: 'Create users',
    layout: 'vbox',
    width: 500,
    height: 350,
    bodyPadding: 10,
    // defaults: {
    //     xtype: 'textfield',
    //     labelAlign: 'top',
    //     padding: 5
    // },
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Assigned users',
            name: 'users',
            width: '400'
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Date of create',
            name: 'dateofcreate',
            width: '400'
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Deadline',
            name: 'deadline',
            width: '400'
        },
    ],

    buttons: [
        {
            style: 'background-color: #800080',
            text: 'Create',
            scale: "large"
        },
        {
            style: 'background-color: #800080',
            text: "Close",
            scale: "large"
        }
    ],


})