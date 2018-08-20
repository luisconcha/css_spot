$( document ).ready( function () {

    var btnYellowOs       = $( '.btnYellowOs' );
    var btnRedOs          = $( '.btnRedOs' );
    var btnGreenOs        = $( '.btnGreenOs' );
    var btnYellowTask     = $( '.btnYellowTask' );
    var btnRedTask        = $( '.btnRedTask' );
    var btnGreenTask      = $( '.btnGreenTask' );
    var btnGreenASAP      = $( '.btnGreenASAP' );
    var btnYellowASAP     = $( '.btnYellowASAP' );
    var btnRedASAP        = $( '.btnRedASAP' );
    var btnGreenOBJECTEL  = $( '.btnGreenOBJECTEL' );
    var btnYellowOBJECTEL = $( '.btnYellowOBJECTEL' );
    var btnRedOBJECTEL    = $( '.btnRedOBJECTEL' );
    var btnGreenERROTEC   = $( '.btnGreenERROTEC' );
    var btnYellowERROTEC  = $( '.btnYellowERROTEC' );
    var btnRedERROTEC     = $( '.btnRedERROTEC' );
    var btnGreenNOTIFY    = $( '.btnGreenNOTIFY' );
    var btnYellowNOTIFY   = $( '.btnYellowNOTIFY' );
    var btnRedNOTIFY      = $( '.btnRedNOTIFY' );

    btnGreenOs.hide();
    btnYellowOs.hide();
    btnRedOs.hide();
    btnYellowTask.hide();
    btnRedTask.hide();
    btnGreenTask.hide();
    btnGreenASAP.hide();
    btnYellowASAP.hide();
    btnRedASAP.hide();
    btnGreenOBJECTEL.hide();
    btnYellowOBJECTEL.hide();
    btnRedOBJECTEL.hide();
    btnGreenERROTEC.hide();
    btnYellowERROTEC.hide();
    btnRedERROTEC.hide();
    btnGreenNOTIFY.hide();
    btnYellowNOTIFY.hide();
    btnRedNOTIFY.hide();

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

    //BLOCO INTERFACE ASAP / OBJECTEL
    var interfaceASAP     = document.getElementById( 'interfaceASAP' ).innerText;
    var interfaceOBJECTEL = document.getElementById( 'interfaceOBJECTEL' ).innerText;

    //BLOCO ERRO TÉCNICO
    var errorTecnico = document.getElementById( 'errorTecnico' ).innerText;

    //BLOCO NOTIFICAÇÃO OMS
    var notificaOMS = document.getElementById( 'notificaOMS' ).innerText;

    var auxiliarOMS         = {};
    var auxiliarTASK        = {};
    var auxiliarASAP        = {};
    var auxiliarOBJECTEL    = {};
    var auxiliarERROTECNICO = {};
    var auxiliarNOTIFYOMS   = {};
    var baseUrl             = 'http://relatoriosoi.intranet/spotfire/wp/render/mhNfdpvsK_x_plP9rj/analysis?file=';
    var omsUrl              = baseUrl + '/OMS/Produção/Indicador Tarefas OMS';

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

    verificaTudo( interfaceASAP, 400, 900, omsUrl, 'interfaceASAP', 'asap' );
    verificaTudo( interfaceOBJECTEL, 400, 900, omsUrl, 'interfaceOBJECTEL', 'objectel' );

    verificaTudo( errorTecnico, 500, 1000, omsUrl, 'errorTecnico', 'errorTecnico' );
    verificaTudo( notificaOMS, 500, 1000, omsUrl, 'notificaOMS', 'notificaOMS' );

    function verificaTudo( valorZ, valorA, valorB, url, nameComponente, nameTask ) {

        /**
         var valorInitial = parseInt( valorZ );
         if ( nameTask == 'oms' ) {
            if ( valorInitial >= valorA && valorInitial < valorB ) {
                auxiliarOMS[ nameComponente ] = 1;
            } else if ( valorInitial >= valorB ) {
                auxiliarOMS[ nameComponente ] = 2;
            } else if ( valorInitial <= valorA ) {
                auxiliarOMS[ nameComponente ] = 0;
            }
        }
         else if ( nameTask == 'task' ) {
            if ( valorInitial >= valorA && valorInitial < valorB ) {
                auxiliarTASK[ nameComponente ] = 1;
            } else if ( valorInitial >= valorB ) {
                auxiliarTASK[ nameComponente ] = 2;
            } else if ( valorInitial <= valorA ) {
                auxiliarTASK[ nameComponente ] = 0;
            }
        }
         else if ( nameTask == 'asap' ) {
            if ( valorInitial >= valorA && valorInitial < valorB ) {
                auxiliarASAP[ nameComponente ] = 1;
            } else if ( valorInitial >= valorB ) {
                auxiliarASAP[ nameComponente ] = 2;
            } else if ( valorInitial <= valorA ) {
                auxiliarASAP[ nameComponente ] = 0;
            }
        }
         else if ( nameTask == 'objectel' ) {
            if ( valorInitial >= valorA && valorInitial < valorB ) {
                auxiliarOBJECTEL[ nameComponente ] = 1;
            } else if ( valorInitial >= valorB ) {
                auxiliarOBJECTEL[ nameComponente ] = 2;
            } else if ( valorInitial <= valorA ) {
                auxiliarOBJECTEL[ nameComponente ] = 0;
            }
        }
         else if ( nameTask == 'errorTecnico' ) {
            if ( valorInitial >= valorA && valorInitial < valorB ) {
                auxiliarERROTECNICO[ nameComponente ] = 1;
            } else if ( valorInitial >= valorB ) {
                auxiliarERROTECNICO[ nameComponente ] = 2;
            } else if ( valorInitial <= valorA ) {
                auxiliarERROTECNICO[ nameComponente ] = 0;
            }
        }
         else if ( nameTask == 'notificaOMS' ) {
            if ( valorInitial >= valorA && valorInitial < valorB ) {
                auxiliarNOTIFYOMS[ nameComponente ] = 1;
            } else if ( valorInitial >= valorB ) {
                auxiliarNOTIFYOMS[ nameComponente ] = 2;
            } else if ( valorInitial <= valorA ) {
                auxiliarNOTIFYOMS[ nameComponente ] = 0;
            }
        }
         */
        verifiedCondicionalValueByTask( valorZ, valorA, valorB, url, nameComponente, nameTask, 'oms', auxiliarOMS );
        verifiedCondicionalValueByTask( valorZ, valorA, valorB, url, nameComponente, nameTask, 'task', auxiliarTASK );
        verifiedCondicionalValueByTask( valorZ, valorA, valorB, url, nameComponente, nameTask, 'asap', auxiliarASAP );
        verifiedCondicionalValueByTask( valorZ, valorA, valorB, url, nameComponente, nameTask, 'objectel', auxiliarOBJECTEL );
        verifiedCondicionalValueByTask( valorZ, valorA, valorB, url, nameComponente, nameTask, 'errorTecnico', auxiliarERROTECNICO );
        verifiedCondicionalValueByTask( valorZ, valorA, valorB, url, nameComponente, nameTask, 'notificaOMS', auxiliarNOTIFYOMS );
    }

    function verifiedCondicionalValueByTask( valorZ, valorA, valorB, url, nameComponente, nameTask, taskNameToCompare, nameVarAuxiliar ) {
        var valorInitial = parseInt( valorZ );
        if ( nameTask == taskNameToCompare ) {
            if ( valorInitial >= valorA && valorInitial < valorB ) {
                nameVarAuxiliar[ nameComponente ] = 1;
            } else if ( valorInitial >= valorB ) {
                nameVarAuxiliar[ nameComponente ] = 2;
            } else if ( valorInitial <= valorA ) {
                nameVarAuxiliar[ nameComponente ] = 0;
            }
        }
        return nameVarAuxiliar;
    }

    createArray( auxiliarOMS, btnYellowOs, btnGreenOs, btnRedOs );
    createArray( auxiliarTASK, btnYellowTask, btnGreenTask, btnRedTask );
    createArray( auxiliarASAP, btnYellowASAP, btnGreenASAP, btnRedASAP );
    createArray( auxiliarOBJECTEL, btnYellowOBJECTEL, btnGreenOBJECTEL, btnRedOBJECTEL );
    createArray( auxiliarERROTECNICO, btnYellowERROTEC, btnGreenERROTEC, btnRedERROTEC );
    createArray( auxiliarNOTIFYOMS, btnYellowNOTIFY, btnGreenNOTIFY, btnRedNOTIFY );

    function createArray( auxiliaryName, nameBtnYellow, nameBtnGreen, nameBtnRed ) {
        var array = $.map( auxiliaryName, function ( value, index ) {
            return [ value ];
        } );

        if ( array.includes( 1 ) ) {
            nameBtnYellow.show();
        }
        if ( array.includes( 2 ) ) {
            nameBtnRed.show();
        }

        if ( array.includes( 0 ) && !array.includes( 2 ) && !array.includes( 1 ) ) {
            nameBtnGreen.show();
        }

        return array;
    }

    /**
    //------- OMS ---------
    var arrayOMS = $.map( auxiliarOMS, function ( value, index ) {
        return [ value ];
    } );
    if ( arrayOMS.includes( 1 ) ) {
        btnYellowOs.show();
    }
    if ( arrayOMS.includes( 2 ) ) {
        btnRedOs.show();
    }
    if ( arrayOMS.includes( 0 ) && !arrayOMS.includes( 2 ) && !arrayOMS.includes( 1 ) ) {
        btnGreenOs.show();
    }

    //------- TASK ---------
    var arrayTASK = $.map( auxiliarTASK, function ( value, index ) {
        return [ value ];
    } );
    if ( arrayTASK.includes( 1 ) ) {
        btnYellowTask.show();
    }
    if ( arrayTASK.includes( 2 ) ) {
        btnRedTask.show();
    }
    if ( arrayTASK.includes( 0 ) && !arrayTASK.includes( 2 ) && !arrayTASK.includes( 1 ) ) {
        btnGreenTask.show();
    }

    //------- ASAP ---------
    var arrayASAP = $.map( auxiliarASAP, function ( value, index ) {
        return [ value ];
    } );
    if ( arrayASAP.includes( 1 ) ) {
        btnYellowASAP.show();
    }
    if ( arrayASAP.includes( 2 ) ) {
        btnRedASAP.show();
    }
    if ( arrayASAP.includes( 0 ) && !arrayASAP.includes( 2 ) && !arrayASAP.includes( 1 ) ) {
        btnGreenASAP.show();
    }

    //------- OBJECTEL ---------
    var arrayOBJECTEL = $.map( auxiliarOBJECTEL, function ( value, index ) {
        return [ value ];
    } );
    if ( arrayOBJECTEL.includes( 1 ) ) {
        btnYellowOBJECTEL.show();
    }
    if ( arrayOBJECTEL.includes( 2 ) ) {
        btnRedOBJECTEL.show();
    }
    if ( arrayOBJECTEL.includes( 0 ) && !arrayOBJECTEL.includes( 2 ) && !arrayOBJECTEL.includes( 1 ) ) {
        btnGreenOBJECTEL.show();
    }

    //------- ERROR TECNICO ---------
    var arrayERRORTEC = $.map( auxiliarERROTECNICO, function ( value, index ) {
        return [ value ];
    } );
    if ( arrayERRORTEC.includes( 1 ) ) {
        btnYellowERROTEC.show();
    }
    if ( arrayERRORTEC.includes( 2 ) ) {
        btnRedERROTEC.show();
    }
    if ( arrayERRORTEC.includes( 0 ) && !arrayERRORTEC.includes( 2 ) && !arrayERRORTEC.includes( 1 ) ) {
        btnGreenERROTEC.show();
    }

    //------- NOTIFICAÇÃO OMS ---------
    var arrayNOTIFYOMS = $.map( auxiliarNOTIFYOMS, function ( value, index ) {
        return [ value ];
    } );
    if ( arrayNOTIFYOMS.includes( 1 ) ) {
        btnYellowNOTIFY.show();
    }
    if ( arrayNOTIFYOMS.includes( 2 ) ) {
        btnRedNOTIFY.show();
    }
    if ( arrayNOTIFYOMS.includes( 0 ) && !arrayNOTIFYOMS.includes( 2 ) && !arrayNOTIFYOMS.includes( 1 ) ) {
        btnGreenNOTIFY.show();
    }
    **/
    $( '.bloco_oms' ).on( 'click', function () {
        window.open( omsUrl, '_blank' );
    } ).css( 'cursor', 'pointer' );

} );