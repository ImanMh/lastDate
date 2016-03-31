describe('Lastdate core', function () {
  describe('core functionality', function () {
    it('any function of core exist on the page', function () {
      assert.ok(typeof lastdateCore.createModel === 'function');
    });
    
    it('createModel should pass the created model id', function () {
      var id = lastdateCore.createModel();
      assert.ok(typeof id === 'number');
    });
    
    it('createModel should create months array', function () {
      var id = lastdateCore.createModel();
      var model = lastdateCore.getModel(id);
      
      assert.ok(model.months instanceof Array === true);
    });
    
    it('should be able to get specific model', function () {
      var id = lastdateCore.createModel();
      assert.ok(typeof id === 'number');
      assert.ok(typeof lastdateCore.getModel(id) === 'object');
      assert.ok(lastdateCore.getModel(id).id === id);
    });
  });
});
