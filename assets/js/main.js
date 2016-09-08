(function () {
    var bl = require("./Ui/BasicList");
    var mw = require("./Ui/ModalWindow");
    
    var myView = new bl.BasicList();
    var myModalWindow = new mw.ModalWindow();

    $('#btn').click(function (e) {
        e.preventDefault();
        myView.render();
    });

})();