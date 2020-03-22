function goCMS(id, url) {
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      const html = request.response;
      // throw away header and footer
      const start = html.indexOf('<div id="contents">');
      const end = html.indexOf('<div id="footer">');
      // display
      document.getElementById(id).innerHTML = html.slice(start, end);
    }
  };
}
