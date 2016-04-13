function sendMessage()
{
  var name = document.getElementById("userName").value;
  var email = document.getElementById("userEmail").value;
  var message = document.getElementById("userMessage").value;

  function detectmob()
  {
     if( navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)
     )
     {
        return true;
      }

     else
     {
        return false;
     }
}
    if(detectmob()==false)
    {
      window.location.href = 'mailto:ktwingstrom@gmail.com?subject=RE:%20Resume%20Website&body='+name+'%0A'+email+'%0A%0A'+message+'';
    }
    else
    {
      /*navigator.registerProtocolHandler("mailto",
                                  "https://mail.google.com/mail/?extsrc=mailto&url=%s",
                                  "Gmail");*/
      window.location.href = 'mailto:ktwingstrom@gmail.com?subject=RE:%20Resume%20Website&body='+name+'%0A'+email+'%0A%0A'+message+'';
    }
}
