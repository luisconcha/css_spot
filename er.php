<?php

$txt = 'qwieuquwey_12313113_20180825_123456_.csv';

function numeros( $str )
{
    return preg_replace( "/[^0-9]/", "", $str );
}

$res = numeros($txt);
echo '<pre>'.__FILE__.': '.__LINE__.'<hr>';print_r($res);echo'<hr></pre>';exit;