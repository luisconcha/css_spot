<?php
/**
 * Created by PhpStorm.
 * User: luis
 * Date: 02/08/18
 * Time: 22:12
 */

ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);

 $xml = simplexml_load_file( 'exemplo.xml' );

$result = array();

foreach ( $xml->Test as $k => $v ) :
    $Name = (array) $v->Name;
    $CommandLine = (array) $v->CommandLine;
    $Input = (array) $v->Input;
    $Output = (array) $v->Output;

    $result['nomeColunaPentaho_01'][] = !empty($Name[0]) ? $Name[0] : null;
    $result['nomeColunaPentaho_02'][] = !empty($CommandLine[0]) ? $CommandLine[0] : null;
    $result['nomeColunaPentaho_03'][] = !empty($Input[0]) ? $Input[0] : null;
    $result['nomeColunaPentaho_04'][] = !empty($Output[0]) ? $Output[0] : null;

endforeach;


function gravarInFile( $texto )
{
    $name    = 'resultado.txt';
    $arquivo = $_SERVER[ 'DOCUMENT_ROOT' ] . '/globalweb/xml/' . $name;
    $fp      = fopen( $arquivo, "w" );
    fwrite( $fp, $texto );
    fclose( $fp );
}

gravarInFile( json_encode( $result ) );