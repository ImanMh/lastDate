define(['lastdate'], function (lastdate) {
  
  var $dp = $('input.arrivals').lastdate({
    calendar: 'jalaali',
    
    disabled: {
      form: moment(),
      to: moment().nextDay()
    },
    selected: {
      from: moment(),
      to: moment().nextDay()
    }
  });
  
  $dp.lastdate('update', {calendar: 'garegorian'});
  $dp.lastdate('destroy');
});
