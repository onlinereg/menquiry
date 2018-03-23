$(document).ready(function(){
	
		$('#username').text("Welcome "+ $.cookie("Username"));
			
		$('#deleteCookie').on("click", function(){
			$.removeCookie("Username");
		});
	
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
			$('.Spopup_container').addClass('displayNone');		
		});
	    
		$('.Specialclose').on("click", function(){
			$('.Spopup_container').addClass('displayNone');
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
		
		$('input[type=text]').on("click", function(){
			$(this).removeClass('errorBtn');
		});
		
		$('input[type=password]').on("click", function(){
			$(this).removeClass('errorBtn');
		});
		
		//var $form = $('form#Signinmodel')
		

		$('#Signupbtnid').on('click', function(e) {
		  e.preventDefault();
			var email = $('input[name=email]').val();
			var name = $('input[name=name]').val();
		    var pin = $('input[name=pin]').val();
			
			var url = "https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1fJOSaqX9dSagCQJF09drAiheRiaJ9oYT43_upL0RjbY&sheet=login";
			$.ajax({
				url:url,
				dataType:"jsonp",
				success:function(data) {
					
					var UserData = data.login;
					var EnterData = $('input[name=token]').val();

					
					  for(var a = 0 ; a < UserData.length ; a++ )
					  {
						  if(UserData[a].pin == pin)
						  {
							$('input[type=text]').addClass('errorBtn');
							$('input[type=password]').addClass('errorBtn');
							return;
						  }
					  }
							
					var data = {'email':email , 'name':name, 'pin':pin};
					var  url = 'https://script.google.com/macros/s/AKfycbzmnBmH9Jnny2SUlNR2Bh-i7_AHn-u_NMEB32y_amG4YW8c2tt8/exec';
					var jqxhr = $.ajax({
					url: url,
					method: "GET",
					dataType: "json",
					data: data,
					success: function(resopnse){
					
						console.log("Success");
						$('.popup_container').addClass('displayNone');
						$('.Spopup_container').removeClass("displayNone");
				  }
				  });			
				},
			});	
		});
		
		 var LoggerName;
		$('#signin').on('click', function(e) {
		  e.preventDefault();
		  var url = "https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1fJOSaqX9dSagCQJF09drAiheRiaJ9oYT43_upL0RjbY&sheet=login";
		$.ajax({
			url:url,
			dataType:"jsonp",
			success:function(data) {
			console.log(data);
			console.log(data.login[0].pin);
				
			var UserData = data.login;
			  var EnterData = $('input[name=token]').val();
			 
			  for(var a = 0 ; a < UserData.length ; a++ )
			  {
				  if(UserData[a].pin == EnterData)
				  {
					  console.log("Match Found "+UserData[a].name);
					  LoggerName = UserData[a].name;
					  $.cookie("Username", LoggerName);
					  window.location.href = "./description.html";
					  
				  }
				  else
				  {
						$('input[type=text]').addClass('errorBtn');
						$('input[type=password]').addClass('errorBtn');
				  }
			  }
			  
			//  $('#username').text("Welcome "+LoggerName+",");
			}
		});
			 	  	  
	});
		
		/*var url = "https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1fJOSaqX9dSagCQJF09drAiheRiaJ9oYT43_upL0RjbY&sheet=login";
		$.ajax({
			url:url,
			dataType:"jsonp",
			success:function(data) {
				console.log(data);
				console.log(data.login[0].pin);
			},
		});*/
});