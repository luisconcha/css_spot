<?php

ini_set( 'display_errors', 1 );
ini_set( 'display_startup_erros', 1 );
error_reporting( E_ALL );

$indicadorsac = 'aqui_vai_url_do_xml';

$doc = new DOMDocument();
$doc->load( '../indicadorsac.xml' );
//$doc->loadXML( $indicadorsac );

$result = array();

$qtdPostosOs = $doc->getElementsByTagName( 'posto_os' )->length;

for ( $i = 1; $i <= $qtdPostosOs; $i++ ) {
    $result[ 'UF' ]            = $doc->getElementsByTagName( 'entirexConfigurationValue' )->item( 0 )->nodeValue;
    $result[ 'posto_os' ]      = $doc->getElementsByTagName( 'GRP-posto_oss' )->item( 0 )->nodeValue;
    $result[ 'unidade_bd' ]    = $doc->getElementsByTagName( 'GRP-micro_area_bds' )->item( 0 )->nodeValue;
    $result[ 'unidade_os' ]    = $doc->getElementsByTagName( 'GRP-unidade_oss' )->item( 0 )->nodeValue;
    $result[ 'micro_area_os' ] = $doc->getElementsByTagName( 'GRP-micro_area_bds' )->item( 0 )->nodeValue;
    $result[ 'qtde_bd' ]       = $doc->getElementsByTagName( 'GRP-qtde_bds' )->item( 0 )->nodeValue;
    $result[ 'qtde_os' ]       = $doc->getElementsByTagName( 'GRP-qtde_oss' )->item( 0 )->nodeValue;
}

// echo '<pre>'.__FILE__.': '.__LINE__.'<hr>';print_r($result);echo'<hr></pre>';exit;

    $array = explode( ' ', $doc->getElementsByTagName( 'micro_area_os' )->item( 0 )->nodeValue );
    foreach ( $array as $key1 => $value1 ) {
        if ( strlen( $array[ $key1 ] ) > 1 ) {
            $array2[] = substr( $array[ $key1 ], 0, 3 );
        }
    }

    echo '<pre>'.__FILE__.': '.__LINE__.'<hr>';print_r($array2);echo'<hr></pre>';



echo '<pre>' . __FILE__ . ': ' . __LINE__ . '<hr>';
print_r( $result[ 'unidade_bd' ] );
echo '<hr></pre>';
exit;