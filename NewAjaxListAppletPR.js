//Regenerate using:https://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopList&name=NewAjaxListApplet&userprops=&comments=Yes&logging=No
if (typeof(SiebelAppFacade.NewAjaxListAppletPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.NewAjaxListAppletPR");
 define("siebel/custom/NewAjaxListAppletPR", ["siebel/jqgridrenderer"],
  function () {
   SiebelAppFacade.NewAjaxListAppletPR = (function () {

    function NewAjaxListAppletPR(pm) {
     SiebelAppFacade.NewAjaxListAppletPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(NewAjaxListAppletPR, SiebelAppFacade.JQGridRenderer);

    NewAjaxListAppletPR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.NewAjaxListAppletPR.superclass.Init.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    NewAjaxListAppletPR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
     SiebelAppFacade.NewAjaxListAppletPR.superclass.ShowUI.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    NewAjaxListAppletPR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelAppFacade.NewAjaxListAppletPR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    NewAjaxListAppletPR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelAppFacade.NewAjaxListAppletPR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
	 var grid = this.GetGrid();
     console.log(grid);
     
     this.GetGrid().hideCol('Lastname');
    }

    NewAjaxListAppletPR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelAppFacade.NewAjaxListAppletPR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return NewAjaxListAppletPR;
   }()
  );
  return "SiebelAppFacade.NewAjaxListAppletPR";
 })
}
