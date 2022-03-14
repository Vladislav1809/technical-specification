Ext.define('task_schedule.view.main.Task.TaskContoller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.task',

    ClickCreate: function ()
    {
        Ext.create('task_schedule.view.main.TaskWindow.TaskWindow', {
            viewModel: {
                data: {
                    action: "Create"
                }
            }
        }).show();
    }
});