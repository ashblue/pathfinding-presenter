$(document).ready(function () {
     window.Toggle = window.Class.extend({
         $el: null,
         $grid: null,

         init: function ($el) {
             this.$el = $el;

             this.addButton('Grid', 'grid');
             this.addButton('Type', 'type');

             this.$el.find('button').click(function () {
                 $el.toggleClass($(this).data('class'));
             });
         },

         addButton: function (title, className) {
             this.$grid = $('<button data-class="' + className + '">' + title + '</button>');
             this.$el.append(this.$grid);
         }
    });
});