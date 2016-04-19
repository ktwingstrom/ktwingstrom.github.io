<?php
if(isset($_POST['submit'])){
    $to = "ktwingstrom@gmail.com"; // this is the email address I want it sent to every time
    $from = "ktwingstrom@kevintwingstrom.x10host.com"; // my webhost requires "from" be my x10 email
    $first_name = $_POST['first_name']; //get first name from form
    $last_name = $_POST['last_name']; //get last name from form
    $senderEmail = $_POST['email'];  //get email address of the user from form
    $subject = "RE: Resume Website"; //subject is static
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'] . "\nSend replies to: " . $senderEmail; //this creates the body of the message
    $headers = "From:" . $from; //this fills in the "from" portion of the paramaters for the mail() function
    mail($to,$subject,$message,$headers); //actually send the email using the paramaters from above.
    echo "Mail Sent. Thank you " . $first_name . ", I will contact you shortly. You'll be back to the site in a jiffy..."; //display a message if the mail was sent properly, and a redirect notification
    //redirect back to index.html
    echo "<script>setTimeout(\"location.href = 'http://www.kevintwingstrom.x10host.com/index.html';\",3000);</script>";
    }
?>
