var models = {};

var makeRandomId = function makeRandomId () {
  return Math.floor(Math.random() * 1000000);
};

module.exports = {
  
  createModel: function () {
    var id = makeRandomId();
    models[id] = {id: id};
    return id;
  },
  
  getModel: function (id) {
    return models[id];
  }
  
};
