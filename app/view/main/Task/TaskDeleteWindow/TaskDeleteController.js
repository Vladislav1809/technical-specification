Ext.define('task_schedule.view.main.Task.TaskDeleteWindow.TaskDeleteController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.taskDeleteWindow',

    clickClose: function (button) {
        button.up("task_delete_window").close()
    },

    ClickDeleteTask: function (button) {
        let gridTaskStore = Ext.ComponentQuery.query('#taskGrid')[0].getStore()
        let params = {
            id: this.getViewModel().get('taskId')
        }
        Ext.Ajax.request({
            url: 'http://localhost:63342/technical-specification/api.php?act=Task&method=delete',
            method: 'POST',
            jsonData: JSON.stringify(params),
            success: function () {
                gridTaskStore.reload()
                button.up("task_delete_window").close()
            },
            failure: function () {
                button.up("task_delete_window").close()
            }
        })

    }

});