function sendMessage()
{
  var name = document.getElementById("userName").value;
  var email = document.getElementById("userEmail").value;
  var message = document.getElementById("userMessage").value;

  window.location.href = 'mailto:ktwingstrom@gmail.com?subject=RE:%20Resume%20Website&body='+name+'%0A'+email+'%0A%0A'+message+'';

}
