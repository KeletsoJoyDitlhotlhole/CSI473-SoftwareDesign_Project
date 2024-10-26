<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:4200"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "sql7.freesqldatabase.com";
$dbusername = "sql7739145";
$dbpassword = "NcBLLk5Kem";
$dbname = "sql7739145";

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed.']));
}

$username = $_GET['username'];

$sql = "SELECT * FROM MedicalReport WHERE patient = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username); 
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows == 0) {
    echo json_encode(['success' => false, 'message' => 'No results found for this patient.']);
    exit;
}


$medicalRecords = [];
while ($row = $result->fetch_assoc()) {
    $medicalRecords[] = $row;
}

echo json_encode(['success' => true, 'records' => $medicalRecords]);

$stmt->close();
$conn->close();
?>
