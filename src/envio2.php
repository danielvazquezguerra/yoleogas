<?php
/**
 * Created by PhpStorm.
 * User: Usuario
 * Date: 28/02/2019
 * Time: 16:09
 */

$nombre = strip_tags(str_replace(array('"', "'",' '), "_", $_POST["nombre"]));
$nombre = strip_tags(str_replace(array('"', "'",' '), "_", $_POST["apellido"]));
$telefono = $_POST["telefono"];
$email = strtolower($_POST["email"]);

//API VIEJA
//$str= "?apikey=G1zY3bngmXYxaBRp1MJVXfLv7bAPHVtM1KtMah6dZqRBvMAJFB&nombre=".$nombre."&telefono=".$telefono."&email=".$email."&tsource=LANDING-CAMBIATE";

//API SALESFORCE
$str = "?cid=gas&name=".$nombre."&lname=".$apellido."&phone=".$telefono."&email=".$email;

$ch=curl_init();
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_VERBOSE, 0);
curl_setopt($ch,CURLOPT_URL,'https://salesforce.gaolania.com.es/addlead'.$str);
$respuesta = curl_exec($ch);

 if($respuesta=='{"data":"OK"}')
 {
     echo ("<script LANGUAGE='JavaScript'>
    window.location.href='https://ganaenergia.com/formulario-de-llamada-recibido/';
    </script>");
     exit;
 }else
 {
     echo ("<script LANGUAGE='JavaScript'>
    window.alert('Ha ocurrido un error enviando tus datos. Por favor intenta de nuevo.');
    window.location.href='index.html';
    </script>");
     exit;
 }

curl_close($ch);