Ext.define('task_schedule.view.main.User.UserContoller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.user',

    ClickCreate: function () {
        Ext.create('task_schedule.view.main.UserWindow.UserWindow', {
            viewModel: {
                data: {
                    action: "Create",
                    UserWindow: {
                        id: null
                    }
                }
            }
        }).show();
    },
    getPdf: function (){
        window.open(
            'http://localhost:63342/technical-specification/src/php-di/index.php?act=Client&method=getPdf','_blank'
        )
    }
});