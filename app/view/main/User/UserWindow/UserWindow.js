Ext.define('task_schedule.view.main.UserWindow.UserWindow', {
    extend: 'Ext.window.Window',

    xtype: 'user_window',
    // title: 'Create users',
    bind:
        {
            title: "{action}" + " User"
        },
    layout: 'vbox',

    width: 500,
    height: 350,
    bodyPadding: 10,

    closable: false,

    requires: [
        "task_schedule.view.main.User.UserWindow.UserWindowController",
        "task_schedule.view.main.User.UserWindow.UserWindowModel"
    ],
    controller: 'userWindow',
    viewModel: 'userWindow',
    // defaults: {
    //     xtype: 'textfield',
    //     labelAlign: 'top',
    //     padding: 5
    // },
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'User',
            name: 'users',
            width: '400',
            bind: {
                value: '{UserWindow.users}'
            }
        },
        {
            xtype: 'combobox',
            fieldLabel: 'tasks',
            name: 'Tasks',
            width: '400',
            bind: {
                value: '{UserWindow.tasks}'
            }
        }
    ],

    buttons: [
        {
            style: 'background-color: #800080',
            // text: 'Create',
            scale: 'large',
            handler: 'ClickCreate',
            bind: {
                text: "{action}"
            }

},
        {
            style: 'background-color: #800080',
            text: 'Close',
            scale: 'large',
            handler: 'ClickClose'
        }
    ],


})