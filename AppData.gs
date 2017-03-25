var DataProvider = function() {

  function getPeriod(request) {
    var sysdate = new Date();
    var year = (request && request.year) ? request.year : sysdate.getFullYear();
    var month = (request && request.month) ? request.month : sysdate.getMonth() + 1;
    return {
      'year': parseInt(year), 
      'month': parseInt(month)
    };
  };
  
  return {
    welcome: function(request) {
      return getPeriod(request);
    }
  }
}();
