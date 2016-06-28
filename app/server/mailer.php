<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = strip_tags(trim($_POST["name"]));
        $tel = strip_tags(trim($_POST["tel"]));

        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);
        $message = str_replace(array("\r","\n"),array(" "," "),$message);


        if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        //TODO:change from & recipient

        $recipient = "liorhollinger@gmail.com";

        $subject = "New contact from $name";

        $email_content = "Name: $name\n";
        $email_content .= "Telephone: $tel\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Message:\n$message\n";

        $email_headers = "From: $name <$email>";


        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "תודה על פנייתך";
        } else {
            http_response_code(500);
            echo "צר לנו אך עקב תקלה הודעתך לא נשלחה";
        }

    } else {
        http_response_code(403);
        echo "חלה שגיאה במילוי הטופס, אנא נסו שוב";
    }

?>
