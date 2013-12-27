/**
 * @desc Класс реализованный на jQuery, который позволяет генерировать и прослушивать
 * события на объекте
 */
(function() {
    var Emitter = function() {};

    /**
     * @desc Add event handler
     * @param {String} eventName The name of event
     * @param {Function} eventHandler The handler of event on the object
     * @return {Function} The handler of event
     */
    Emitter.prototype.on = function(eventName, eventHandler) {
        var $this = $(this);

        $this.on.apply($this, arguments);

        return eventHandler;
    };

    /**
     * @desc Remove event handler from object
     * @param {String} eventName The name of event
     * @param {Function} eventHandler Then event handler function
     * @return {Function} The event handler function
     */
    Emitter.prototype.off = function(eventName, eventHandler) {
        var $this = $(this);

        $this.off.apply($this, arguments);

        return eventHandler;
    };

    /**
     * @desc Trigger event on the object
     * @param {String} eventName The name of event
     * @param {Object} [eventObject] The object which pass to handlers
     */
    Emitter.prototype.emit = function(eventName, eventObject) {
        var $this = $(this);

        return $this.trigger.apply($this, arguments);
    };

    nb.Emitter = Emitter;
}());
