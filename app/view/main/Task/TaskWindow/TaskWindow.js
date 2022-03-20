Ext.define('task_schedule.view.main.TaskWindow.TaskWindow', {
    extend: 'Ext.window.Window',

    xtype: 'task_window',
    itemId: 'taskWindow',
    // title: 'Create tasks',
    bind:
        {
            title: "{action}" + " Task"
        },
    layout: 'vbox',

    width: 500,
    height: 350,
    bodyPadding: 10,

    closable: false,

    requires: [
        "task_schedule.view.main.Task.TaskWindow.TaskWindowController",
        "task_schedule.view.main.Task.TaskWindow.TaskWindowModel"
    ],
    controller: 'taskWindow',
    viewModel: 'taskWindow',

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            itemId: 'taskName',
            name: 'name',
            bind: {
                value: '{TaskWindow.name}'
            }
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Assigned users',
            name: 'users',
            width: '400',
            bind: {
                value: '{TaskWindow.users}'
            }
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Date of create',
            name: 'dateOfCreate',
            format: 'd.m.Y',
            itemId: 'dateOfCreate',
            width: '400',
            bind: {
                value: '{TaskWindow.dateOfCreate}'
            }
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Deadline',
            name: 'deadline',
            format: 'd.m.Y',
            itemId: 'deadline',
            width: '400',
            bind: {
                value: '{TaskWindow.deadline}'
            }
        },
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