(function(global, _) {
  var DS = (global.DS || (global.DS = {}));

  DS.Importers = function(data, options) {};

  /**
  * Simple base parse method, passing data through
  */
  DS.Importers.prototype.extract = function(data) {
    data = _.clone(data);
    data._columns = data.columns;
    delete data.columns;
    return data;
  };

}(this, _));
