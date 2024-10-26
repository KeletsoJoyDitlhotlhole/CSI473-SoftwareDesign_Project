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
    $patient = $_POST['patient'];
    $bp = $_POST['bp'];
    $heartRate = $_POST['heartRate'];
    $temperature = $_POST['temperature'];
    $respiratoryRate = $_POST['respiratoryRate'];
    $illness = $_POST['illness'];
    $consultType = $_POST['consultType'];
    $consultDate = date("Y-m-d"); 
    $complaint = $_POST['complaint'];
    $prescription = $_POST['prescription'];
    $treatment = $_POST['treatment'];
    $referral = $_POST['referral'];
    $notes = $_POST['notes'];
    
    
    $sql = "INSERT INTO MedicalReport (patient, bp, heartRate, temperature, respiratoryRate, illness, consultType, consultDate, complaint, prescription, treatment, referral, notes) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssssssssss", $patient, $bp, $heartRate, $temperature, $respiratoryRate, $illness, $consultType, $consultDate, $complaint, $prescription, $treatment, $referral, $notes);

    
    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => "Patient report submitted successfully!"]);
    } else {
        echo json_encode(['success' => false, 'message' => "Error: " . $stmt->error]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['success' => false, 'message' => "Invalid request method."]);
}
?>
