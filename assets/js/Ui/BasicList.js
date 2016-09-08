var uc = require("../Users/UsersCollection");
var mw = require("./ModalWindow");

const TEMPLATE = `
  <ul class = "list-group">
    {{#each users}}
      <li class="list-group-item">{{name}}</li>
    {{/each}}
  </div>
`;

let template = Handlebars.compile(TEMPLATE);

module.exports = {
    BasicList: Backbone.View.extend({

        myModalWindow: new mw.ModalWindow(),

        events: {
            'click .list-group li': 'showModal'
        },

        initialize: function () {
            this.collection = new uc.UsersCollection();
            this.collection.bind("reset", this.render, this);
            this.collection.bind("change", this.render, this);
            this.collection.fetch();
        },

        render: function () {

            this.$el.html(template({ users: this.collection.toJSON() })).appendTo('body');

        },

        showModal: function (ev) {
            var myName = $(ev.currentTarget).text();
            var elem = this.collection.findWhere({ name: myName });
            console.log(elem);

            this.myModalWindow.show("Name is " + myName + "</br>" + "Age is " + elem.attributes.age);
        }
    })
};