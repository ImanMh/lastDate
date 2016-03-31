describe('Lastdate core', function () {
  describe('core functionality', function () {
    it('core file should be browserified seperately for testing', function () {
      assert.ok(lastdateCore.coreProperty === true);
    });
  });
});
