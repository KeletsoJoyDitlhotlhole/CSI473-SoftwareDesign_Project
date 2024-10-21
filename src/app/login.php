<?php
// login.php
header("Access-Control-Allow-Origin: http://localhost:4200"); // For development purposes; adjust it to the origin of your Angular app for security
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


header('Content-Type: application/json');

// Database connection
$servername = "sql7.freesqldatabase.com";
$dbusername = "sql7739145";
$dbpassword = "NcBLLk5Kem";
$dbname = "sql7739145";

$conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Database connection failed.']));
}

// Get input from POST request
$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

// Prepare and bind
$stmt = $conn->prepare("SELECT password_hash, role FROM Login WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->store_result();

$response = [];
if ($stmt->num_rows > 0) {
    $stmt->bind_result($hashed_password, $role);
    $stmt->fetch();

    if (password_verify($password, $hashed_password)) {
        $response = ['success' => true, 'role' => $role];
    } else {
        $response = ['success' => false, 'message' => 'Invalid username or password.'];
    }
} else {
    $response = ['success' => false, 'message' => 'Invalid username or password.'];
}

// Close statement and connection
$stmt->close();
$conn->close();

echo json_encode($response);
