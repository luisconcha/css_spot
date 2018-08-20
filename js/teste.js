$( document ).ready( function () {

    var btnYellowOs   = $( '.btnYellowOs' );
    var btnRedOs      = $( '.btnRedOs' );
    var btnGreenOs    = $( '.btnGreenOs' );
    var btnYellowTask = $( '.btnYellowTask' );
    var btnRedTask    = $( '.btnRedTask' );
    var btnGreenTask  = $( '.btnGreenTask' );

    btnGreenOs.hide();
    btnYellowOs.hide();
    btnRedOs.hide();
    btnYellowTask.hide();
    btnRedTask.hide();
    btnGreenTask.hide();

    //BLOCO OMS
    var Z6   = document.getElementById( 'Z6' ).innerText;
    var Z7   = document.getElementById( 'Z7' ).innerText;
    var ZC   = document.getElementById( 'ZC' ).innerText;
    var ZZ   = document.getElementById( 'ZZ' ).innerText;
    var Z9   = document.getElementById( 'Z9' ).innerText;
    var Z2   = document.getElementById( 'Z2' ).innerText;
    var ZD   = document.getElementById( 'ZD' ).innerText;
    var ZX   = document.getElementById( 'ZX' ).innerText;
    var ZN   = document.getElementById( 'ZN' ).innerText;
    var SIS  = document.getElementById( 'SIS' ).innerText;
    var MASC = document.getElementById( 'MASC' ).innerText;

    //BLOCO TAREFAS
    var nullTask          = document.getElementById( 'nullTask' ).innerText;
    var atualizaSAC       = document.getElementById( 'atualizaSAC' ).innerText;
    var consultaAgenda    = document.getElementById( 'consultaAgenda' ).innerText;
    var tarAutObjectel    = document.getElementById( 'tarAutObjectel' ).innerText;
    var parMetalico       = document.getElementById( 'parMetalico' ).innerText;
    var tarAutoSisFixa    = document.getElementById( 'tarAutoSisFixa' ).innerText;
    var sacStatusPap      = document.getElementById( 'sacStatusPap' ).innerText;
    var sacStatusVeloplus = document.getElementById( 'sacStatusVeloplus' ).innerText;
    var rfbPriAcessoSAC   = document.getElementById( 'rfbPriAcessoSAC' ).innerText;
    var rfbPriAcessoOMS   = document.getElementById( 'rfbPriAcessoOMS' ).innerText;

    var auxiliarOMS  = {};
    var auxiliarTASK = {};
    var baseUrl      = 'http://relatoriosoi.intranet/spotfire/wp/render/mhNfdpvsK_x_plP9rj/analysis?file=';
    var omsUrl       = baseUrl + '/OMS/Produção/Indicador Tarefas OMS';

    verificaTudo( Z6, 200, 500, omsUrl, 'Z6', 'oms' );
    verificaTudo( Z7, 200, 500, omsUrl, 'Z7', 'oms' );
    verificaTudo( ZC, 500, 1000, omsUrl, 'ZC', 'oms' );
    verificaTudo( ZZ, 200, 500, omsUrl, 'ZZ', 'oms' );
    verificaTudo( Z9, 200, 500, omsUrl, 'Z9', 'oms' );
    verificaTudo( Z2, 200, 500, omsUrl, 'Z2', 'oms' );
    verificaTudo( ZD, 200, 500, omsUrl, 'ZD', 'oms' );
    verificaTudo( ZX, 200, 500, omsUrl, 'ZX', 'oms' );
    verificaTudo( ZN, 200, 500, omsUrl, 'ZN', 'oms' );
    verificaTudo( SIS, 200, 500, omsUrl, 'SIS', 'oms' );
    verificaTudo( MASC, 500, 1000, omsUrl, 'MASC', 'oms' );

    verificaTudo( nullTask, 200, 400, omsUrl, 'nullTask', 'task' );
    verificaTudo( atualizaSAC, 200, 400, omsUrl, 'atualizaSAC', 'task' );
    verificaTudo( consultaAgenda, 200, 400, omsUrl, 'consultaAgenda', 'task' );
    verificaTudo( tarAutObjectel, 500, 1000, omsUrl, 'tarAutObjectel', 'task' );
    verificaTudo( parMetalico, 500, 1000, omsUrl, 'parMetalico', 'task' );
    verificaTudo( tarAutoSisFixa, 500, 1000, omsUrl, 'tarAutoSisFixa', 'task' );
    verificaTudo( sacStatusPap, 200, 400, omsUrl, 'sacStatusPap', 'task' );
    verificaTudo( sacStatusVeloplus, 200, 400, omsUrl, 'sacStatusVeloplus', 'task' );
    verificaTudo( rfbPriAcessoSAC, 50, 100, omsUrl, 'rfbPriAcessoSAC', 'task' );
    verificaTudo( rfbPriAcessoOMS, 100, 200, omsUrl, 'rfbPriAcessoOMS', 'task' );

    function verificaTudo( valorZ, valorA, valorB, url, nameComponente, nameTask ) {
        var valorInitial = parseInt( valorZ );
        if ( nameTask == 'oms' ) {
            if ( valorInitial >= valorA && valorInitial < valorB ) {
                auxiliarOMS[ nameComponente ] = 1;
            } else if ( valorInitial >= valorB ) {
                auxiliarOMS[ nameComponente ] = 2;
            } else if ( valorInitial <= valorA ) {
                auxiliarOMS[ nameComponente ] = 0;
            }
        } else if ( nameTask == 'task' ) {
            if ( valorInitial >= valorA && valorInitial < valorB ) {
                auxiliarTASK[ nameComponente ] = 1;
            } else if ( valorInitial >= valorB ) {
                auxiliarTASK[ nameComponente ] = 2;
            } else if ( valorInitial <= valorA ) {
                auxiliarTASK[ nameComponente ] = 0;
            }
        }
    }

    var arrayOMS = $.map( auxiliarOMS, function ( value, index ) {
        return [ value ];
    } );
    console.log( 'arrayOMS::: ' + arrayOMS );

    if ( arrayOMS.includes( 1 ) ) {
        btnYellowOs.show();
    }
    if ( arrayOMS.includes( 2 ) ) {
        btnRedOs.show();
    }

    if ( arrayOMS.includes( 0 ) && !arrayOMS.includes( 2 ) && !arrayOMS.includes( 1 ) ) {
        btnGreenOs.show();
    }

    var arrayTASK = $.map( auxiliarTASK, function ( value, index ) {
        return [ value ];
    } );

    console.log( 'arrayTASK::: ' + arrayTASK );

    if ( arrayTASK.includes( 1 ) ) {
        btnYellowTask.show();
    }
    if ( arrayTASK.includes( 2 ) ) {
        btnRedTask.show();
    }

    if ( arrayTASK.includes( 0 ) && !arrayTASK.includes( 2 ) && !arrayTASK.includes( 1 ) ) {
        btnGreenTask.show();
    }

    $( '.bloco_oms' ).on( 'click', function () {
        window.open( omsUrl, '_blank' );
    } ).css('cursor', 'pointer');
} );