$(document).ready(function(){
		var nameofper = "";
		 nameofper = $.cookie("Username");
	    if(nameofper != undefined)
		{
		$('#username').text("Welcome "+ $.cookie("Username")+",");
		}
		else
		{
			$('#username').text("Welcome Buddy,");
		}
			
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
		
		$('input[name=email]').on("click", function(){
			$(this).removeClass('errorBtn');
		});
		
		$('input[name=name]').on("click", function(){
			$(this).removeClass('errorBtn');
		});
		
		//var $form = $('form#Signinmodel')
		

		$('#Signupbtnid').on('click', function(e) {
		  e.preventDefault();
			var email = $('input[name=email]').val();
			var name = $('input[name=name]').val();
		    var pin = $('input[name=pin]').val();
			
			
			//field Validation
			  function validateEmail($email) {
				  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				  return emailReg.test( $email );
				}	
				
				if((email.length < 1) || (!validateEmail(email)))
				{
					$('input[name=email]').attr("placeholder", "Please Enter Valid Email");
					$('input[name=email]').addClass('errorBtn');
					return;
				}
				
				 if( (name == '')  || (name == "null") || (name == undefined)) {
                // Your code to handle error
					$('input[name=name]').attr("placeholder", "Please Enter Valid name");
					$('input[name=name]').addClass('errorBtn');
					return;
				} 
				
				if ((!(/^\d+$/.test(pin))) || (pin.length > 4) || (pin.length < 1)) {
            // Contain numbers only
			       $('input[name=password]').attr("placeholder", "Please Enter Valid pin");
				   $('input[type=password]').addClass('errorBtn');
				   return;
				}
			
			$('.loader_container').css("display","block");
			$('.loader').css("display","block");
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
							$('input[name=password]').attr("placeholder", "Please Choose different pin");
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
				complete: function(){
				$('.loader_container').css("display","none");
				$('.loader').css("display","none");
			  }
			});	
		});
		
		 var LoggerName;
		$('#signin').on('click', function(e) {
		  e.preventDefault();
		  $('.loader_container').css("display","block");
		  $('.loader').css("display","block");
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
					  $('input[type=text]').removeClass('errorBtn');
						$('input[type=password]').removeClass('errorBtn');
					  LoggerName = UserData[a].name;
					  $.cookie("Username", LoggerName);
					  window.location.href = "./description.html";
					  return;
					  
				  }
				  else
				  {
						$('input[type=text]').addClass('errorBtn');
						$('input[type=password]').addClass('errorBtn');
				  }
			  }
			  
			//  $('#username').text("Welcome "+LoggerName+",");
			},
			complete: function(){
				$('.loader_container').css("display","none");
				$('.loader').css("display","none");
			  }
		});
			 	  	  
	});
		
});