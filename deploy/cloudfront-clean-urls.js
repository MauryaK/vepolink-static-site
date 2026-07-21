function handler(event) {
  var request = event.request;
  var host = request.headers.host && request.headers.host.value;
  var uri = request.uri;
  var querystring = request.querystring || {};

  function querySuffix() {
    var pairs = [];
    for (var key in querystring) {
      if (querystring[key].multiValue) {
        var values = querystring[key].multiValue;
        for (var i = 0; i < values.length; i++) {
          pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(values[i].value));
        }
      } else if (querystring[key].value === "") {
        pairs.push(encodeURIComponent(key));
      } else {
        pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(querystring[key].value));
      }
    }
    return pairs.length ? "?" + pairs.join("&") : "";
  }

  if (host === "vepolink.com") {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: { value: "https://www.vepolink.com" + uri + querySuffix() }
      }
    };
  }

  if (uri === "/about" || uri === "/product" || uri === "/wqms") {
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: { value: uri + "/" }
      }
    };
  }

  if (uri.endsWith("/")) {
    request.uri = uri + "index.html";
  }

  return request;
}
