var Site = function() {

  function getMenu(menu, id) {
    for (var i = 0, len = menu.length; i < len; i++) {
      if (menu[i].id == id) {
        return menu[i];
      }
    }
    throw 'Page not found: id=' + id;
  };
  
  return {
    props: function(source) {
      var props_ = PropertiesService.getScriptProperties();
      if (source == undefined) {
        return props_.getProperties();
      }
      props_.setProperties(source, true);
    },    
    
    menu: function(source) {
      var props_ = PropertiesService.getScriptProperties();
      var menu_ = JSON.parse(props_.getProperty('_menu'));
      if (source == undefined) {
        return menu_;
      }
      if (source instanceof Array) {
        props_.setProperty('_menu', JSON.stringify(source));
      } else {
        return getMenu(menu_, source);
      }
    }
  }
}();
