function writePoem() {
  alert(getText());
}

function getText() {
  var loc = document.location;
  var uri = {
    spec: loc.href,
    host: loc.host,
    prePath: loc.protocol + "//" + loc.host,
    scheme: loc.protocol.substr(0, loc.protocol.indexOf(":")),
    pathBase: loc.protocol + "//" + loc.host + loc.pathname.substr(0, loc.pathname.lastIndexOf("/") + 1)
  };
  var docClone = document.cloneNode(true);
  var article = new Readability(uri, docClone).parse();
  var text = jQuery(article.content).text();
  return text;
}

writePoem();
