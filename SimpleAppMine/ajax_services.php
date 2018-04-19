<?php

//print_r($_POST);
$response_data = [];
if (!empty($_POST['userName']) && !empty($_POST['password'])) {
    if ($_POST['userName'] == 'admin' && $_POST['password'] == '123456') {
        $response_data['status'] = 'loggedIn';
        $response_data['user'] = 'admin';
    } else {
        $response_data['status'] = 'error';
    }
}
echo json_encode($response_data)
?>