<?php

// Database connection details
$servername = "localhost";
$username = "yourusername";
$password = "yourpassword";
$dbname = "admin_addingroute";

// Connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Get the username and password from the form data
    $username = $_POST['uname'];
    $password = $_POST['psw'];

    // Prepare and execute the SQL query
    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    // If the query returned a result, login the user
    if ($result->num_rows > 0) {
        echo "Login successful!";
        // Add your code to redirect the user to the appropriate page
    } else {
        echo "Invalid username or password.";
    }
}

// Close the database connection
$conn->close();

?>
