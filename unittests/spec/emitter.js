/*global beforeEach, describe, it, expect, sinon*/
describe("Emitter Tests", function() {
    beforeEach(function() {
        this.emitter = new nb.Emitter();
    });

    describe('#on', function() {
        it('should implement interface #on', function() {
            expect(this.emitter.on).to.be.ok();
        });
    });

    describe('#off', function() {
        it('should implement interface #off', function() {
            expect(this.emitter.off).to.be.ok();
        });

        it('should remove handler of event from object', function() {
            var eventHandler = this.emitter.on('test', sinon.stub());

            this.emitter.off('test', eventHandler);
            this.emitter.emit('test');

            expect(eventHandler.called).to.be.equal(false);
        });
    });

    describe('#emit', function() {
        it('should implement interface #trigger', function() {
            expect(this.emitter.emit).to.be.ok();
        });

        it('should trigger event on object', function() {
            var eventHandler = this.emitter.on('test', sinon.stub());

            this.emitter.emit('test');

            expect(eventHandler.called).to.be.equal(true);
        });
    });

    describe('How add emitter functionality to nanoblock', function() {
        beforeEach(function() {
            nb.define('test', {}, 'DomEmitter');
            this.bTest = nb.block($('<div data-nb="test"/>').get(0));
        });

        it('should trigger event on nanoblock', function() {
            var eventHandler = this.bTest.on('test', sinon.stub());

            this.bTest.trigger('test');

            expect(eventHandler.called).to.be.equal(true);
        });

        it('should trigger event on nanoblock node', function() {
            var eventHandler = sinon.stub();
            $(this.bTest.node).on('test', eventHandler);

            this.bTest.trigger('test');

            expect(eventHandler.called).to.be.equal(true);
        });

        it('should trigger event on nanoblock node without duplicate', function() {
            var eventHandler = sinon.stub();
            $(this.bTest.node).on('test', eventHandler);

            this.bTest.trigger('test');

            expect(eventHandler.calledOnce).to.be.equal(true);
        });

        it('should bubbling event triggered on nanoblock', function() {
            var $rootNode = $('<div id="rootNode"><b data-nb="test" /></div>');
            var eventHandler = sinon.stub();

            this.bTest = nb.block($rootNode.find('[data-nb="test"]').get(0));

            $rootNode.on('test', eventHandler);

            this.bTest.trigger('test');

            expect(eventHandler.called).to.be.equal(true);
        });
    });
});
