Ext.define('task_schedule.view.main.Task.TaskGrid.TaskGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskGrid',

    onItemGridSelected: function (item) {
        let rowRecords = item.getSelectionModel().getSelection()[0];

        let userIds = [];
        if (typeof rowRecords.data.users !== 'undefined') {
            rowRecords.data.users.forEach(user => {
                userIds.push(user.id)
            })
        }
        rowRecords.data.userIds = userIds;
        Ext.create('task_schedule.view.main.TaskWindow.TaskWindow', {
            viewModel: {
                data: {
                    TaskWindow: rowRecords.data,
                    action: 'Update',
                }
            }
        }).show();
    },


    clickDelete: function (grid, rowIndex, colIndex) {
        {
            let TaskId = grid.getStore().getRange()[rowIndex].get('id')
            Ext.create('task_schedule.view.main.TaskDeleteWindow.TaskDeleteWindow', {
                viewModel: {
                    data: {
                        taskId: TaskId
                    }
                }
            }).show();
        }
    },

});
