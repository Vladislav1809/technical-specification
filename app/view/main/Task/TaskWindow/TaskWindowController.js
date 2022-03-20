Ext.define('task_schedule.view.main.Task.TaskWindow.TaskWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.taskWindow',

    ClickClose: function (button) {
        button.up("task_window").close()
    },


    ClickCreate: function (button){
        let gridTaskStore = Ext.ComponentQuery.query('#taskGrid')[0].getStore()
        let params = {
            id: null,
            name: button.up('#taskWindow').down('#taskName').getValue(),
            dateOfCreate: button.up('#taskWindow').down('#dateOfCreate').getSubmitValue(),
            deadline: button.up('#taskWindow').down('#deadline').getSubmitValue()
        }
        Ext.Ajax.request({
            url: 'http://localhost:63342/technical-specification/api.php?act=Task&method=save',
            method: 'POST',
            jsonData: JSON.stringify(params),
            success: function() {
                Ext.Msg.alert('good job');
                gridTaskStore.reload()
                button.up("task_window").close()
            },
            failure: function() {
                Ext.Msg.alert('some errors');
                button.up('task_window')
            },
        })
    },

    clickDeleteClose: function (button){
        button.up("task_delete_window").close()
    },

    clickDelete: function (button){
        alert('you have successfully deleted task!')
        button.up("task_delete_window").close()
    }

});