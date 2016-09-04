const TEMPLATE = `
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">{{title}}</h4>
      </div>
      <div class="modal-body">{{{body}}}</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
`;

let template = Handlebars.compile(TEMPLATE);

module.exports = {
    ModalWindow: Backbone.View.extend({
        className: 'modal fade',
        _title   : null,

        initialize: function (options = {title: null}) {
            this._title = options.title;
        },

        render(html){
            this.$el.html(template({title: this._title, body: html})).appendTo('body');
        },

        show(modalBody){
            if (modalBody instanceof Backbone.View) {
                this.render("");
                this.$('.modal-body').html(modalBody.render().$el);
            }
            else
                this.render(modalBody);

            this.$el.modal();
            this.$el.one('hide.bs.modal', () => this._destroy());
        },

        close(){ this.$el.modal('toggle'); },

        _destroy(){
            this.$el.off('hide.bs.modal');
            this.remove();
        }
    })
};