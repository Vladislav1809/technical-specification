Ext.define('task_schedule.view.main.Task.TaskWindow.TaskWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.taskWindow',

    ClickClose: function (button) {
        button.up("task_window").close()
    },

    // ClickCreate: function (button){
    //
    //     button.up("task_window").close()
    //
    // }


});