Ext.define('task_schedule.view.main.User.UserWindow.UserWindowController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.userWindow',

    ClickClose: function (button) {
        button.up("user_window").close()
    },

    // ClickCreate: function (button){
    //
    //     button.up("user_window").close()
    //
    // }


});