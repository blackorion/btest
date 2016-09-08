(function () {
    var bl = require("./Ui/BasicList");
    
    var myView = new bl.BasicList();

    $('#btn').click(function (e) {
        e.preventDefault();
        myView.render();
    });

})();