<?php
$username = "111222333";
$password = "J123";
$role = "Patient";

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
$host = "sql7.freesqldatabase.com";
$dbusername = "sql7739145";
$dbpassword = "NcBLLk5Kem";
$dbname = "sql7739145";


$conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO Login (username, password_hash, role) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $username, $hashedPassword, $role);

if ($stmt->execute()) {
    echo "New user inserted successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
