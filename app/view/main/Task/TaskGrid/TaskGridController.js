Ext.define('task_schedule.view.Task.TaskGrid.TaskGridController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.taskGrid',

    onItemGridSelected:  function (item) {

        let rowRecords = item.getSelectionModel().getSelection()[0];
        Ext.create('task_schedule.view.main.TaskWindow.TaskWindow', {
            viewModel: {
                data: {
                    TaskWindow: rowRecords.data,
                    action: 'Update',
                }
            }
        }).show();
    },

    clickDelete: function () {
        {
            Ext.create('task_schedule.view.main.TaskWindow.TaskDeleteWindow', {
                viewModel: {
                    data: {
                        action: "Create"
                    }
                }
            }).show();
        }
    }

});
