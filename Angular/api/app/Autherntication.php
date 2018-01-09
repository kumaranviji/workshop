<?php

/**
 * Created by PhpStorm.
 * User: kumaran
 * Date: 9/1/18
 * Time: 5:55 PM
 */

header('Access-Control-Allow-Origin: *');


$return = json_encode(["name" => "kumaran"]);

echo $return;