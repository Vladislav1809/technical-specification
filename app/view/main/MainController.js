/**
 //  * This class is the controller for the main view for the application. It is specified as
 //  * the "controller" of the Main view class.
 //  *
 //  * TODO - Replace this content of this view to suite the needs of your application.
 //  */
Ext.define('task_schedule.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    maskEl: function(el) {
        if (el.maskCount == null) {
            el.maskCount = 1;
        } else {
            el.maskCount++;
        }
        if (el.maskCount === 1 && (el.rendered || el === Ext.getBody())) {
            el.mask('Загрузка данных..');
        }
    },

    unmaskEl: function(el) {
        if (el.maskCount == null) {
            return 0;
        } else if (el.maskCount === 0) {
            return 0;
        } else {
            el.maskCount--;
        }
        if (el.maskCount === 0 && (el.rendered || el === Ext.getBody())) {
            el.unmask(false);
        }
    }
});
