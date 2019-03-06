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

               
                var controls = this.GetPM().Get( "GetControls" );//Getting Control Objects from here
                var cntrl = controls[ "Amount" ];   //Selecting Amount from the array received which will have the property for Amount field
                var amountcntrl  = cntrl.GetInputName(); //Getting the ID name for the Amount Field
                var amount = $('input[name="'+amountcntrl+'"]').val();// Getting value inside that field
                
               if(contact == ""){
					console.log("No Value Entered");
					debugger;
					}else {
						var service = SiebelApp.S_App.GetService("TEST_Shashank");
						var Inputs = SiebelApp.S_App.NewPropertySet();
						var Inputs1 = SiebelApp.S_App.NewPropertySet();
						Inputs.SetProperty("Shipping Company", contact);
						var outPS = service.InvokeMethod("Test", Inputs,Inputs1);//.GetChild(0);
						
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
