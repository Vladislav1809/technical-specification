Ext.define('task_schedule.view.User.UserGrid.UserGridContoller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.usergrid',

    onItemGridSelected:  function (item) {

        debugger;
        let rowRecords = item.getSelectionModel().getSelection()[0];
        Ext.create('task_schedule.view.main.UserWindow.UserWindow', {
            viewModel: {
                data: {
                    UserWindow: rowRecords.data,
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
