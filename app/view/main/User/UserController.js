Ext.define('task_schedule.view.main.User.UserContoller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.user',

    ClickCreate: function ()
    {
        Ext.create('task_schedule.view.main.UserWindow.UserWindow', {
            viewModel: {
                data: {
                    action: "Create"
                }
            }
        }).show();
    }
});