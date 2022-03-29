<?php
// useless
$phpInput = json_decode(file_get_contents("php://input"), true);
$incomingData = array_merge($_REQUEST, $phpInput === null ? [] : $phpInput);

return $incomingData;