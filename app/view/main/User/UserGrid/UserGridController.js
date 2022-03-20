Ext.define('task_schedule.view.User.UserGrid.UserGridContoller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.usergrid',

    onItemGridSelected:  function (item) {


        let rowRecords = item.getSelectionModel().getSelection()[0];
        // debugger
        Ext.create('task_schedule.view.main.UserWindow.UserWindow', {
            viewModel: {
                data: {
                    UserWindow: rowRecords.data,
                    action: 'Update',
                }
            }
        }).show();
    },

    clickDelete: function () {
        {
            Ext.create('task_schedule.view.main.UserWindow.UserDeleteWindow', {
                viewModel: {
                    data: {
                        action: "Create"
                    }
                }
            }).show();
        }
    }

});
