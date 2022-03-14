Ext.define('task_schedule.view.Task.TaskGrid.TaskGridContoller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.taskgrid',

    onItemGridSelected:  function (item) {

        debugger;
        let rowRecords = item.getSelectionModel().getSelection()[0];
        Ext.create('task_schedule.view.main.TaskWindow.TaskWindow', {
            viewModel: {
                data: {
                    TaskWindow: rowRecords.data,
                    action: 'Update',
                }
            }
        }).show();
    }

    // onConfirm: function (choice) {
    //     if (choice === 'yes') {

        // }
    // },

});
