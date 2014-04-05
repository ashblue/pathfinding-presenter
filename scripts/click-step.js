$(document).ready(function () {
    var _event = {
        clickMap: function () {
            this.nextStep();
        }
    };

    window.ClickStep = window.Class.extend({
        $el: null,
        stack: null,
        index: 0,

        init: function ($el, stack) {
            this.$el = $el;
            this.stack = stack;
            this.index = stack.length - 1;

            this.bind();
        },

        bind: function () {
            this.$el.click(_event.clickMap.bind(this));
        },

        nextStep: function () {
            this.index -= 1;

            if (this.index < 0) {
                this.index = 0;
                return;
            }

            var pos = this.stack[this.index];
            var $player = this.$el.find('.player');
            this.getTile(pos.x, pos.y).append($player);
        },

        getTile: function (x, y) {
            return this.$el.find('.row:nth-child(' + (y + 1) + ') .voxel:nth-child(' + (x + 1) + ')');
        }
    });
});