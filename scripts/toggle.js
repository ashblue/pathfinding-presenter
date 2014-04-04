$(document).ready(function () {
    var _event = {
        clickGrid: function () {
            var $el = $(this);
            $el.toggleClass()
        }
    };

     window.Toggle = window.Class.extend({
         $el: null,
         $grid: null,

         init: function ($el) {
             this.$el = $el;

             this.$grid = $('<button class="path-grid">Grid</button>');
             $el.append(this.$grid);
             this.$grid.click(this.grid.bind(this));
         },

         grid: function () {
             this.$el.toggleClass('grid');
         }
    });
});