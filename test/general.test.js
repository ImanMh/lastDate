describe('Testing Environment', function () {
  describe('Test runner is working correctly', function () {
    it('should always pass', function () {
      assert.ok(true);
    });
    it('should see jQuery in global scope', function () {
      assert.ok(typeof jQuery !== 'undefined');
      assert.ok(typeof $ !== 'undefined');
    });
  });
  
  describe('dependencies are loaded', function () {
    it('should see jQuery global', function () {
      assert.ok(typeof jQuery === 'function');
    });
  });
});
