Ext.define('task_schedule.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'task_schedule.view.main.MainController',
        'task_schedule.view.main.MainModel',
        'task_schedule.view.main.Task.Task',
        'task_schedule.view.main.User.User'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        style: 'background-color: #800080',
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        style: 'background-color: #800080',
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        style: 'background-color: #800080',
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            style: 'background-color: #800080',
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Task',
        glyph: '?',
        scrollable: true,
        items: [{
            xtype: 'task'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        scrollable: true,

        items: [{
            xtype: 'user'
        }]
    }]
});
