var uc = require("../Users/UsersCollection");

module.exports = {
    BasicList: Backbone.View.extend({
        el: $('body'),

        initialize: function () {
            this.collection = new uc.UsersCollection();
            this.collection.bind("reset", this.render, this);
            this.collection.bind("change", this.render, this);
            this.collection.fetch({
                success: function (collection) {

                    console.log("test" + collection.toJSON());
                }
            });
        },

        render: function () {
            alert("test" + this.collection.toJSON() + "123");
        }
    })
};