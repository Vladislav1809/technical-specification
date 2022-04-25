Ext.define('task_schedule.view.User.UserGrid.UserGridContoller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usergrid',

    onItemGridSelected: function (item) {
        let rowRecords = item.getSelectionModel().getSelection()[0];
        let taskIds = [];
        if (typeof rowRecords.data.tasks !== 'undefined') {
            rowRecords.data.tasks.forEach(task => {
                taskIds.push(task.id)
            })
        }
        rowRecords.data.taskIds = taskIds;
        debugger;
        Ext.create('task_schedule.view.main.UserWindow.UserWindow', {
            viewModel: {
                data: {
                    UserWindow: rowRecords.data,
                    action: 'Update',
                }
            }
        }).show();
    },

    clickDelete: function (grid, rowIndex, colIndex) {
        {
            let UserId = grid.getStore().getRange()[rowIndex].get('id')
            Ext.create('task_schedule.view.main.User.UserDeleteWindow.UserDeleteWindow', {
                viewModel: {
                    data: {
                        UserId: UserId
                    }
                }
            }).show();
        }
    },

});
