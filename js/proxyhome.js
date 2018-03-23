$(document).ready(function(){
		$('#Signuppop').on("click", function(){
			$('.popup_container').removeClass('displayNone');
			$('.popupin_container').addClass('displayNone');
		});
		
		$('#Signinpop').on("click", function(){
			$('.popupin_container').removeClass('displayNone');
			$('.popup_container').addClass('displayNone');
		});
		
		$('.close, .cancelbtn').on("click", function(){
			$('.popup_container').addClass('displayNone');
			$('.popupin_container').addClass('displayNone');
		});
	    
		$('#signin').on("click", function(){
	   if($('input[name="token"]').val() == "Admin")
	   {
		   console.log("Logged In"+$('input[name="token"]').val());
		   window.location.href = "./description.html";
	   }
	   });
	   
	   $('#Register').on("click", function(){
			$('.gsheet_Container').removeClass('displayNone');
		});
});