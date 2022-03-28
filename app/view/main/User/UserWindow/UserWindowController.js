Ext.define('task_schedule.view.main.User.UserWindow.UserWindowController', {
    extend: 'task_schedule.view.main.MainController',

    alias: 'controller.userWindow',

    ClickClose: function (button) {
        button.up("user_window").close()
    },

    ClickCreate: function (button) {
        let me = this;
        const createNewRequest = this.getView();

        let gridUsersStore = Ext.ComponentQuery.query('#UserGrid')[0].getStore()
        let params = {
            id: this.getViewModel().data.UserWindow.id,
            name: this.getViewModel().data.UserWindow.name,
            taskIds: this.getViewModel().data.UserWindow.taskIds,
        }
        this.maskEl(createNewRequest);
        Ext.Ajax.request({
            url: 'http://localhost:63342/technical-specification/src/php-di/index.php?act=Client&method=save',
            method: 'POST',
            jsonData: JSON.stringify(params),

            success: function () {
                me.unmaskEl(createNewRequest);
                Ext.Msg.alert('good job');
                gridUsersStore.reload()
                button.up("user_window").close()
            },
            failure: function () {
                me.unmaskEl(createNewRequest);
                Ext.Msg.alert('some Error');
                button.up('user_window').close()
            },
        })
    },

    clickDeleteClose: function (button) {
        button.up("user_delete_window").close()
    },
    clickDelete: function (button) {
        alert('You have successfully deleted user!')
        button.up("user_delete_window").close()
    }

});