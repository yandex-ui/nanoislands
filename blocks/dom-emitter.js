/**
 * @desc Класс который генерирует события на
 * корневом узле блока.
 */
(function() {
    nb.define('DomEmitter', $.extend({
        /**
         * @desc Генерирует событие на блоке и
         * корневом узле этого блока
         * @param {String} eventName The name of event
         * @param {Object} eventObject The object which will be pass to handlers
         * of event
         */
        trigger: function(eventName, eventObject) {
            var $node = $(this.node);

            $node.trigger.apply($node, arguments);
            return this.emit.apply(this, arguments);
        }
    }, new nb.Emitter()));
}());
