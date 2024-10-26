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
    die(json_encode(['success' => false, 'message' => 'Database connection failed.']));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $appdate = $_POST['appDate'];
    $apptime = $_POST['appTime'];
    $doctor = $_POST['doctor'];
    $apptype = $_POST['appType'];
    $patient = $_POST['patient'];; 
    $bookingdate = date("Y-m-d");
    
    $sql = "INSERT INTO Appointment (appDate, appTime, appType, bookingDate, patient, doctor) 
            VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssss", $appdate, $apptime, $apptype, $bookingdate, $patient, $doctor);

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => "New appointment has been scheduled successfully! You will be redirected in a few seconds."]);
    } else {
        echo json_encode(['success' => false, 'message' => "Error: " . $stmt->error]);
    }
    
    $stmt->close();
    $conn->close();
}
?>
