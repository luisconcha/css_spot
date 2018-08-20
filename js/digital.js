	$(document).ready(function() {

		var table = $('table.app-table-info');
		var i = 0;
		table.find('thead > tr > th').each(function() {
			
			var res = trim($(this).text());

			if(res.indexOf("ERROR") > 1){
				//add class nas listas
				$(this).removeClass('light-green').addClass('red');
				//add class no titulo do componente
				$(this).parents().siblings('h5').removeClass('light-green').addClass('red');

			}else if(res.indexOf('WARNING') > 1){
				console.log('****666****');
				$(this).removeClass('light-green').addClass('warning');
				$(this).parents().siblings('h5').removeClass('light-green').addClass('warning');
				return;
			}
			 if( res.indexOf('ERROR') > 1 || res.indexOf('WARNING') > 1){
				console.log('------------------');
				$(this).parents().siblings('h5').removeClass('light-green warning').addClass('red');
				return;
			}
		});


	});

	function trim(vlr){
		return vlr.replace(" ","");
	}