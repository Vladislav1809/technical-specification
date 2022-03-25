Ext.define('task_schedule.view.main.Task.TaskController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.task',

    ClickCreate: function () {
        Ext.create('task_schedule.view.main.TaskWindow.TaskWindow', {
            viewModel: {
                data: {
                    action: "Create",
                    TaskWindow: {
                        id: null,
                    }
                }
            }
        }).show();
    },
    getPdf: function(){
        window.open(
            'http://localhost:63342/technical-specification/api.php?act=Task&method=getPdf','_blank'
        )
    }
});