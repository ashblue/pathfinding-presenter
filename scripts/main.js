$(document).ready(function () {
    var pathfindingSetup = {
        init: function () {
            var self = this;

            $('.pathfinder').each(function () {
                var $el = $(this);
                var $start = $el.find('[data-pos="start"]');
                var $end = $el.find('[data-pos="end"]');

                new window.Toggle($el);

                var map = new Map(self.getMap($el));
                var pathfinder = new PathFinder(map);
                var start = {
                    x: $start.index(),
                    y: $start.parent('div').index()
                };
                var end = {
                    x: $end.index(),
                    y: $end.parent('div').index()
                };

                var stepClicker = new ClickStep($el, pathfinder.findPath(start.x, start.y, end.x, end.y));

                // Create pathfinder by passing in map
                // Generate path from start to finish
                // Store path in a click progression object that will visually move player through the path it has generated
            });
        },

        getMap: function ($el) {
            var $rows = $el.find('.row');
            var stack = [];

            $rows.each(function () {
                var stackRow = [];
                $(this).children().each(function () {
                    var cost = parseInt($(this).data('cost'), 10);
                    if (isNaN(cost)) cost = 1;
                    stackRow.push(cost);
                });
                stack.push(stackRow);
            });

            return stack;
        }
    };

    pathfindingSetup.init();
});