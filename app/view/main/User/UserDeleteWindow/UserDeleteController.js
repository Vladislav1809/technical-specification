Ext.define('task_schedule.view.main.User.UserDeleteWindow.UserDeleteController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.userDeleteWindow',

    clickClose: function (button) {
        button.up("user_delete_window").close()
    },

    ClickDeleteUser: function (button) {
        let gridTaskStore = Ext.ComponentQuery.query('#UserGrid')[0].getStore()
        let params = {
            id: this.getViewModel().get('UserId')
        }
        debugger
        Ext.Ajax.request({
            url: 'http://localhost:63342/technical-specification/api.php?act=Client&method=delete',
            method: 'POST',
            jsonData: JSON.stringify(params),
            success: function () {
                gridTaskStore.reload()
                button.up("user_delete_window").close()
            },
            failure: function () {
                button.up("user_delete_window").close()
            }
        })
    }
});