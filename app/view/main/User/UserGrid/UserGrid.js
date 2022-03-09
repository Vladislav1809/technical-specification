Ext.define('task_schedule.view.main.Task.UserGrid.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergrid',

    layout: 'vbox',
    width: 1200,

    columns: [
        { text: 'id', dataIndex: 'id', flex: 1},
        { text: 'Username', dataIndex: 'name', flex: 1}
    ],
});