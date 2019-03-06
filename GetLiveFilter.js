//Regenerate using:https://duncanford.github.io/prpm-code-generator/?prpm=PR&object=DesktopList&name=GetLiveFilter&userprops=&comments=Yes&logging=No
if (typeof(SiebelAppFacade.GetLiveFilterPR) === "undefined") {

 SiebelJS.Namespace("SiebelAppFacade.GetLiveFilterPR");
 define("siebel/custom/GetLiveFilterPR", ["siebel/jqgridrenderer"],
  function () {
   SiebelAppFacade.GetLiveFilterPR = (function () {

    function GetLiveFilterPR(pm) {
     SiebelAppFacade.GetLiveFilterPR.superclass.constructor.apply(this, arguments);
    }

    SiebelJS.Extend(GetLiveFilterPR, SiebelAppFacade.JQGridRenderer);

    GetLiveFilterPR.prototype.Init = function () {
     // Init is called each time the object is initialised.
     // Add code here that should happen before default processing
     SiebelAppFacade.GetLiveFilterPR.superclass.Init.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    GetLiveFilterPR.prototype.ShowUI = function () {
     // ShowUI is called when the object is initially laid out.
     // Add code here that should happen before default processing
     SiebelAppFacade.GetLiveFilterPR.superclass.ShowUI.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    GetLiveFilterPR.prototype.BindData = function (bRefresh) {
     // BindData is called each time the data set changes.
     // This is where you'll bind that data to user interface elements you might have created in ShowUI
     // Add code here that should happen before default processing
     SiebelAppFacade.GetLiveFilterPR.superclass.BindData.apply(this, arguments);
     // Add code here that should happen after default processing
     var grid = this.GetGrid();
     console.log(grid);
     this.GetGrid().jqGrid('filterToolbar',{searchOnEnter:false});
     
     
    }

    GetLiveFilterPR.prototype.BindEvents = function () {
     // BindEvents is where we add UI event processing.
     // Add code here that should happen before default processing
     SiebelAppFacade.GetLiveFilterPR.superclass.BindEvents.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    GetLiveFilterPR.prototype.EndLife = function () {
     // EndLife is where we perform any required cleanup.
     // Add code here that should happen before default processing
     SiebelAppFacade.GetLiveFilterPR.superclass.EndLife.apply(this, arguments);
     // Add code here that should happen after default processing
    }

    return GetLiveFilterPR;
   }()
  );
  return "SiebelAppFacade.GetLiveFilterPR";
 })
}
