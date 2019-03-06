//Regenerate using:https://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopForm&name=NewFormApplet&userprops=&comments=Yes&logging=No
if (typeof(SiebelAppFacade.NewFormAppletPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.NewFormAppletPR");
 define("siebel/custom/NewFormAppletPR", [],
  function () {
   SiebelAppFacade.NewFormAppletPR = (function () {

    function NewFormAppletPR(pm) {
     SiebelAppFacade.NewFormAppletPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(NewFormAppletPR, SiebelAppFacade.PhysicalRenderer);

    NewFormAppletPR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.NewFormAppletPR.superclass.Init.apply(this, arguments);
     // Add code here that should happen after default processing
	 
	 this.AttachPMBinding("isAmountSet", validateAmount);
    }
	
	
	function validateAmount() {

               
               var controls = this.GetPM().Get( "GetControls" );
                var cntrl = controls[ "Contact" ];  
				console.log(cntrl);
                var contactcntrl  = cntrl.GetInputName();
				var contact = $('input[name="'+contactcntrl+'"]').val();
				if(contact == ""){
					console.log("No Value Entered");
					debugger;
					}else {               
                
                //calling Ajax Function here
				    $.ajax({
					  
					  url: "URL",
					  dataType: "json",
						type: 'GET',
						cache: false,
					  success: function(data){//Getting Success Data here
						console.log(data.Name);
					var emailcntrl = controls[ "Email" ];
					var emailcontrol  = emailcntrl.GetInputName();
					var firstnamecntrl = controls[ "Firstname" ];
					var firstnamecontrol  = firstnamecntrl.GetInputName();
					$('input[name="'+emailcontrol+'"]').val(data.Email);
						var name = (data.Name).split(" ");
					$('input[name="'+firstnamecontrol+'"]').val(name[0]);
					var lastnamecntrl = controls[ "Lastname" ];
					var lastnamecontrol  = lastnamecntrl.GetInputName();
					$('input[name="'+lastnamecontrol+'"]').val(name[1]);
					
						  
					  },
                        error: function(xhr, status, err) {
                            }
					});
				}
			    }

    NewFormAppletPR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
     SiebelAppFacade.NewFormAppletPR.superclass.ShowUI.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    NewFormAppletPR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelAppFacade.NewFormAppletPR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    NewFormAppletPR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelAppFacade.NewFormAppletPR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    NewFormAppletPR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelAppFacade.NewFormAppletPR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return NewFormAppletPR;
   }()
  );
  return "SiebelAppFacade.NewFormAppletPR";
 })
}
