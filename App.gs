/**
  GAS : Simple WebApp example
  @author milan.machain@gmail.com
*/

function init() {
  Site.props({
    'title': 'GAS Station', 
    'tagline': 'Google App Script'
  });
  Site.menu([
    {'id': 'welcome', 'page': 'PageWelcome', 'name': 'Welcome'}, 
    {'id': 'about', 'page': 'PageAbout', 'name': 'About'}
  ]);
}

function doGet(request, init_) {
  var cb = (init_) ? init_() : init();
  return Html.index(request);
}

function load(id, request) {
  var menu = Site.menu(id);
  var response = data(id, request);
  return Html.load(menu.page, request, response);
}

function data(id, request) {
  return (DataProvider[id]) ? DataProvider[id](request) : null;
}
