function makeRequest(src) {
http_request = false;
if (window.XMLHttpRequest) {
   http_request = new XMLHttpRequest();
   if (http_request.overrideMimeType) {
      http_request.overrideMimeType('text/xml');
   }
    } else if (window.ActiveXObject) { // IE
    try {
       http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
    try {
       http_request = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
    }
    }
   if (!http_request) {
       alert('Could not show objects, check your Java Service');
        return false;
    }
    
    if(src == 'pc_server' || src == 'android_client')
    {
        http_request.onreadystatechange = showArt;
    }
    else
    {
        http_request.onreadystatechange = show;
    }
   
   http_request.open('GET', src+'.html', true);
   http_request.send(null);
}


function show() {
if (http_request.readyState == 4) {

      document.getElementById("mainID").innerHTML = http_request.responseText;

}
}

function showArt()
{
    if(http_request.readyState == 4)
    {
        document.getElementById("articleID").innerHTML = http_request.responseText;
    }
}