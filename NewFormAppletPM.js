//Regenerate using:https://duncanford.github.io/prpm-code-generator/?prpm=PM&object=DesktopForm&name=NewFormApplet&userprops=&comments=Yes&logging=No
if (typeof(SiebelAppFacade.NewFormAppletPM) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.NewFormAppletPM");
 define("siebel/custom/NewFormAppletPM", [],
  function () {
   SiebelAppFacade.NewFormAppletPM = (function () {

    function NewFormAppletPM(pm) {
     SiebelAppFacade.NewFormAppletPM.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(NewFormAppletPM, SiebelAppFacade.PresentationModel);

    NewFormAppletPM.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.NewFormAppletPM.superclass.Init.apply(this, arguments);
     // Add code here that should happen after default processing
	 
	 this.AddProperty("isAmountSet", "");
	 this.AddMethod("FieldChange", OnFieldChange, { sequence: false, scope: this });
	 
    }
	
		function OnFieldChange(control, value) {
                
                if (control.GetName() === "Amount") {
                    this.SetProperty("isAmountSet", (value ? true : false));
                }
            }

    NewFormAppletPM.prototype.Setup = function (propSet) {
     // Setup is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.NewFormAppletPM.superclass.Setup.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return NewFormAppletPM;
   }()
  );
  return "SiebelAppFacade.NewFormAppletPM";
 })
}
