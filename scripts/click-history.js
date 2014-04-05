$(document).ready(function () {
    window.ClickHistory = window.ClickStep.extend({
        init: function ($el, stack) {
            this._super($el, stack);
            this.index = 0;
        },

        nextStep: function () {
            if (this.index >= this.stack.length) {
                this.index = this.stack.length;
                return;
            }

            var tile = this.stack[this.index].step;
            var group = this.stack[this.index].group;
            var $tile = this.getTile(tile.x, tile.y);

            // Delete all contents except player span
            $tile.children().not('.player').detach();

            // Inject direction, open/closed, step cost, heuristic cost, total
            $tile.removeClass('open')
                .removeClass('closed')
                .addClass(group)
                .addClass(tile.direction)
                .append('<span class="stat step">' + tile.g + '</span> ' +
                    '<span class="stat heuristic">' + tile.h + '</span> ' +
                    '<span class="stat total">' + tile.f + '</span>');

            this.index += 1;
        }
    });
});