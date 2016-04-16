var models = {};

var makeRandomId = function makeRandomId () {
  return Math.floor(Math.random() * 1000000);
};

var defaultConfig = {
  visibleMonths: 1
};

module.exports = {
  
  createModel: function (conf) {
    var id = makeRandomId();
    
    models[id] = {
      id: id,
      config: $.extend(conf, defaultConfig),
      months: []
    };
    
    for (var i = 0; i < models[id].config.visibleMonths; i++)
      models[id].months.push({});
      
    return id;
  },
  
  getModel: function (id) {
    return models[id];
  }
  
};
