$(document).ready(function() {
	$('[name=inputNombreC]').on('focus',function(){
		$('[name=inputTelefonoC]').focus();
		$('[name=inputNombreC]').attr('type', 'text');
		$('[name=inputNombreC]').focus();
	});
});
