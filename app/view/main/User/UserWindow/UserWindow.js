Ext.define('task_schedule.view.main.UserWindow.UserWindow', {
    extend: 'Ext.window.Window',
    xtype: 'user_window',
    itemId: 'userWindow',
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
    items: [
        {
            xtype: 'textfield',
            itemId: 'userName',
            fieldLabel: 'User',
            name: 'users',
            width: '400',
            bind: {
                value: '{UserWindow.name}'
            }
        },
        {
            xtype: 'combobox',
            multiSelect: true,
            itemId: 'userCombobox',
            fieldLabel: 'Tasks',
            name: 'Tasks',
            width: '400',
            store: Ext.create('task_schedule.store.WindowStore'),
            valueField: 'id',
            displayField: 'name',
            queryMode: 'local',

            bind: {
                value: '{UserWindow.taskIds}'
            }
        }
    ],

    buttons: [
        {
            style: 'background-color: #800080',
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