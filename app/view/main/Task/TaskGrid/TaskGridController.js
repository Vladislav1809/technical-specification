Ext.define('task_schedule.view.main.Task.TaskGrid.TaskGridController', {
    extend: 'task_schedule.view.main.MainController',
    alias: 'controller.taskGrid',

    onItemGridSelected: function (item) {
        let me = this;
        const createNewRequest = this.getView();
        let rowRecords = item.getSelectionModel().getSelection()[0];
        this.maskEl(createNewRequest);
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
        me.unmaskEl(createNewRequest);
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
