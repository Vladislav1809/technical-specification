Ext.define('task_schedule.view.main.Task.TaskWindow.TaskWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.taskWindow',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});