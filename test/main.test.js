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
});

describe('Datepicker test suite', function () {
  describe('Initial behavior', function () {
    it('should add a memeber to jQuery.fn', function () {
      assert.ok(typeof $.fn.lastdate !== 'undefined');
    });
  });
});
