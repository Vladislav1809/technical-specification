Ext.define('task_schedule.view.main.Task.TaskWindow.TaskWindowController', {
    extend: 'task_schedule.view.main.MainController',

    alias: 'controller.taskWindow',

    ClickClose: function (button) {
        button.up("task_window").close()
    },


    ClickCreate: function (button) {
        let me = this;
        const createNewRequest = this.getView();

        let gridTaskStore = Ext.ComponentQuery.query('#taskGrid')[0].getStore()
        let params = {
            id: this.getViewModel().data.TaskWindow.id,
            name: this.getViewModel().data.TaskWindow.name,
            dateOfCreate: button.up('#taskWindow').down('#dateOfCreate').getSubmitValue(),
            deadline: button.up('#taskWindow').down('#deadline').getSubmitValue(),
            userIds: this.getViewModel().data.TaskWindow.userIds,

        }
        this.maskEl(createNewRequest);
        Ext.Ajax.request({
            url: 'http://localhost:63342/technical-specification/src/php-di/index.php?act=Task&method=save',
            method: 'POST',
            jsonData: JSON.stringify(params),
            success: function () { //handler
                me.unmaskEl(createNewRequest);
                Ext.Msg.alert('good job');
                gridTaskStore.reload()
                button.up("task_window").close()
            },
            failure: function (response, options) {
                me.unmaskEl(createNewRequest);
                Ext.Msg.alert(JSON.parse(response.responseText)['Error massage']);
                button.up('task_window').close()
            },
        })
    },

});