<?php

header("Access-Control-Allow-Origin: http://localhost:4200"); 
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

header('Content-Type: application/json');

$servername = "sql7.freesqldatabase.com";
$dbusername = "sql7739145";
$dbpassword = "NcBLLk5Kem";
$dbname = "sql7739145";

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed: ' . $conn->connect_error]));
}

$stmt = $conn->prepare("INSERT INTO Payment (username, fullName, doctorName, doctorSpecialty, date, amount, outstandingBalance, paymentMethod) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssss", $username, $fullName, $doctorName, $doctorSpecialty, $date, $amount, $outstandingBalance, $paymentMethod);

$username = $_POST['username'];
$fullName = $_POST['fullName'];
$doctorName = $_POST['doctorName'];
$doctorSpecialty = $_POST['doctorSpecialty'];
$date = $_POST['date'];
$amount = $_POST['amount'];
$outstandingBalance = $_POST['outstandingBalance'];
$paymentMethod = $_POST['paymentMethod'];

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Payment recorded successfully.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error recording payment: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
