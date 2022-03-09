Ext.define('task_schedule.view.main.Task.TaskGrid.TaskGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'taskgrid',

    layout: 'vbox',
    width: 1200,

    columns: [
        { text: 'id', dataIndex: 'id'},
        { text: 'Name', dataIndex: 'name', flex: 1},
        { text: 'Users', dataIndex: 'users', flex: 1},
        { text: 'Date of create', dataIndex: 'dateofcreate', flex: 1},
        { text: 'Deadline', dataIndex: 'deadline', flex: 1}
    ],
});