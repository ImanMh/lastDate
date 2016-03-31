(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var models = {};

var makeRandomId = function makeRandomId () {
  return Math.floor(Math.random() * 1000000);
};

module.exports = {
  
  createModel: function () {
    var id = makeRandomId();
    models[id] = {
      id: id,
      months: []
    };
    return id;
  },
  
  getModel: function (id) {
    return models[id];
  }
  
};

},{}],2:[function(require,module,exports){
window.lastdateCore = require('./../lastdate-core');

},{"./../lastdate-core":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9JbWFuL0RvY3VtZW50cy9yZXBvcy9sYXN0RGF0ZS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL0ltYW4vRG9jdW1lbnRzL3JlcG9zL2xhc3REYXRlL3NyYy9sYXN0ZGF0ZS1jb3JlLmpzIiwiL1VzZXJzL0ltYW4vRG9jdW1lbnRzL3JlcG9zL2xhc3REYXRlL3NyYy9tb2R1bGVzL2Zha2VfZjFlZDFmMjguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBtb2RlbHMgPSB7fTtcblxudmFyIG1ha2VSYW5kb21JZCA9IGZ1bmN0aW9uIG1ha2VSYW5kb21JZCAoKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBcbiAgY3JlYXRlTW9kZWw6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaWQgPSBtYWtlUmFuZG9tSWQoKTtcbiAgICBtb2RlbHNbaWRdID0ge1xuICAgICAgaWQ6IGlkLFxuICAgICAgbW9udGhzOiBbXVxuICAgIH07XG4gICAgcmV0dXJuIGlkO1xuICB9LFxuICBcbiAgZ2V0TW9kZWw6IGZ1bmN0aW9uIChpZCkge1xuICAgIHJldHVybiBtb2RlbHNbaWRdO1xuICB9XG4gIFxufTtcbiIsIndpbmRvdy5sYXN0ZGF0ZUNvcmUgPSByZXF1aXJlKCcuLy4uL2xhc3RkYXRlLWNvcmUnKTtcbiJdfQ==
