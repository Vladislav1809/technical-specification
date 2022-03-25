Ext.define('task_schedule.view.main.User.UserWindow.UserWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.userWindow',

    ClickClose: function (button) {
        button.up("user_window").close()
    },

    ClickCreate: function (button) {
        let gridUsersStore = Ext.ComponentQuery.query('#UserGrid')[0].getStore()
        let params = {
            id: this.getViewModel().data.UserWindow.id,
            name: this.getViewModel().data.UserWindow.name,
            taskIds: this.getViewModel().data.UserWindow.taskIds,
        }
        Ext.Ajax.request({
            url: 'http://localhost:63342/technical-specification/api.php?act=Client&method=save',
            method: 'POST',
            jsonData: JSON.stringify(params),
            success: function () {
                Ext.Msg.alert('good job');
                gridUsersStore.reload()
                button.up("user_window").close()
            },
            failure: function () {
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