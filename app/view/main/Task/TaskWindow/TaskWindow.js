Ext.define('task_schedule.view.main.TaskWindow.TaskWindow', {
    extend: 'Ext.window.Window',

    xtype: 'task_window',
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
    // defaults: {
    //     xtype: 'textfield',
    //     labelAlign: 'top',
    //     padding: 5
    // },
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
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
            name: 'date',
            format: 'd.m.Y',
            width: '400',
            bind: {
                value: '{TaskWindow.date}'
            }
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Deadline',
            name: 'deadline',
            format: 'd.m.Y',
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