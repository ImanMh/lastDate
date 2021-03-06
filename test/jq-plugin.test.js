function makeTestElement () {
  var $elem = $('<div>'),
      id = Math.ceil(Math.random() * 100000000);
      
  $elem.attr('id', id);
  $('body').append($elem);
  return $elem;
}

describe('jQuery plugin', function () {
  describe('jQuery boiler plate', function () {
    it('should add a memeber to jQuery.fn', function () {
      assert.ok(typeof $.fn.lastdate !== 'undefined');
    });

    it('should be able to pass strings as commands', function () {
      var $target = makeTestElement(),
          result = $target.lastdate('testCommand');
      assert.ok(result === true);
      
      $target.remove();
    });
    
    it('should be able to accept default params', function () {
      var $target = makeTestElement(),
          defaultOptions = $target.lastdate('getOptions');

      assert.ok(defaultOptions.testTrue === true);
      
      $target.remove();
    });
    
    it('should be able to change global default values by plugin setup method', function () {
      var $target = makeTestElement();
      $.lastdateSetup({testTrue: false});
      var defaultOptions = $target.lastdate('getOptions');
      
      assert.ok(!defaultOptions.testTrue);

      $.lastdateSetup({testTrue: true});
      $target.remove();
    });
    
  });
  
});
