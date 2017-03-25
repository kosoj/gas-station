var Html = function() {

  function create(file) {
    return HtmlService.createTemplateFromFile(file);
  };
  
  function props(html, props) {
    if (props) {
      for (i in props) {
        html[i] = props[i];
      }
    }
  };
    
  return {
    index: function(request) {
      var html = create('Index');
      html.props = Site.props();
      html.menu = Site.menu();
      html.request = request;
      return html.evaluate().setTitle(Site.props().title).setSandboxMode(HtmlService.SandboxMode.IFRAME);
    },
    
    load: function(page, request, response) {
      var html = create(page);
      html.request = request;
      props(html, response);
      return html.evaluate().setSandboxMode(HtmlService.SandboxMode.NATIVE).getContent(); 
    }, 
    
    include: function(page, request) {
      var html = create(page);
      props(html, request);
      return html.evaluate().getContent();
    }
  }
}();