<?php
if(isset($_POST['submit'])){
    $to = "ktwingstrom@gmail.com"; // this is the email address I want it sent to
    $from = "ktwingstrom@kevintwingstrom.x10host.com"; // my webhost requires from be my x10 email
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $senderEmail = $_POST['email'];
    $subject = "RE: Resume Website";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'] . "\nSend replies to: " . $senderEmail;
    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $first_name . ", I will contact you shortly. You'll be back to the site in a jiffy...";
    //redirect back to index.html
    echo "<script>setTimeout(\"location.href = 'http://www.kevintwingstrom.x10host.com/index.html';\",3000);</script>";




    }
?>
