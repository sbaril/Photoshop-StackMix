/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {
    'use strict';

    var csInterface = new CSInterface();
	var ExtensionId = "com.yourdomain.stackmixcc";
    
    // Opens the chrome developer tools in host app
    function showDevTools() {
        window.__adobe_cep__.showDevTools();
    }
    
    // Reloads extension panel
    function reloadPanel() {
        location.reload();
    }
    
    
    // Loads / executes a jsx file
    function loadJSXFile(pPath) {
        var scriptPath = csInterface.getSystemPath(SystemPath.EXTENSION) + pPath;
        csInterface.evalScript('evalFile("' + scriptPath + '")');
    }
    
    
    function init() {
                
        themeManager.init();


////////////////////////////////////////////////////////////////////////////////
// STACKMIXCC BUTTONS FUNCTIONS
////////////////////////////////////////////////////////////////////////////////   
                    
        $("#btn_debug").click(showDevTools);
        $("#btn_reload").click(reloadPanel);
        
        $("#btn_test").click(function () {
            csInterface.evalScript('sayHello()');
        });
        
        $("#btn_loadInStack").click(function () {
            loadJSXFile("/jsx/StackMix_Infos.jsx");
        });
        
        $("#btn_selectAllLayers").click(function () {
            loadJSXFile("/jsx/StackMix_SelectAllLayers.jsx");
        });
        
        $("#btn_autoAlignLayers").click(function () {
            loadJSXFile("/jsx/StackMix_AutoAlignLayers.jsx");
        });
        
        $("#btn_convertToSO").click(function () {
            loadJSXFile("/jsx/StackMix_ConvertInSO.jsx");
        });
        
        $("#btn_none").click(function () {
            loadJSXFile("/jsx/StackMix_None.jsx");
        });
        
        $("#btn_entropy").click(function () {
            loadJSXFile("/jsx/StackMix_Entropy.jsx");
        });
        
        $("#btn_kurstosis").click(function () {
            loadJSXFile("/jsx/StackMix_Kurtosis.jsx");
        });
        
        $("#btn_maximum").click(function () {
            loadJSXFile("/jsx/StackMix_Maximum.jsx");
        });
        
        $("#btn_mean").click(function () {
            loadJSXFile("/jsx/StackMix_Mean.jsx");
        });
        
        $("#btn_median").click(function () {
            loadJSXFile("/jsx/StackMix_Median.jsx");
        });
        
        $("#btn_minimum").click(function () {
            loadJSXFile("/jsx/StackMix_Minimum.jsx");
        });
        
        $("#btn_range").click(function () {
            loadJSXFile("/jsx/StackMix_Range.jsx");
        });
        
        $("#btn_skewness").click(function () {
            loadJSXFile("/jsx/StackMix_Skewness.jsx");
        });
        
        $("#btn_standardDeviation").click(function () {
            loadJSXFile("/jsx/StackMix_StandardDeviation.jsx");
        });
        
        $("#btn_summation").click(function () {
            loadJSXFile("/jsx/StackMix_Summation.jsx");
        });
        
        $("#btn_variance").click(function () {
            loadJSXFile("/jsx/StackMix_Variance.jsx");
        });
        
        
        // MAIN MENU FUNCTIONS

        $("#btn_loadInStack-Disable").click(function () {
            invokeFeature("Main-File-Scripts-Load_Files_into_Stack");
        });
        
        $("#btn_selectAllLayers-Disable").click(function () {
            invokeFeature("Main-Select-All_Layers");
        });
        
        $("#btn_autoAlignLayers-Disable").click(function () {
            invokeFeature("Main-Edit-Auto-Align_Layers");
        });
        
        $("#btn_convertToSO-Disable").click(function () {
            invokeFeature("Main-Layer-Smart_Objects-Convert_to_Smart_Object");
        });
        



		
////////////////////////////////////////////////////////////////////////////////
// STACKMIXCC FLYOUT MENU
////////////////////////////////////////////////////////////////////////////////
		
		// Ugly workaround to keep track of "checked" and "enabled" statuses
		var checkableMenuItem_isChecked = true;
		var targetMenuItem_isEnabled = true;
				
		// Flyout menu XML string 
		var flyoutXML = '<Menu> \
							<MenuItem Id="AboutItemStackMix" Label="About StackMix CC"/> \
							<MenuItem Id="OpenWebsiteSbaril" Label="Author Infos Online"/> \
							\
							<MenuItem Label="---" /> \
							\
						</Menu>';

		// Uses the XML string to build the menu
		csInterface.setPanelFlyoutMenu(flyoutXML);

		// Flyout Menu Click Callback
		function flyoutMenuClickedHandler (event) {

			// the event's "data" attribute is an object, which contains "menuId" and "menuName"
			console.dir(event); 
			switch (event.data.menuId) {	
				case "AboutItemStackMix":
					csInterface.evalScript("alert('StackMix CC \\nVersion 1.0.1\\n©2015 Stephane Baril\\nhttp://sbaril.me/');");
					break;
				case "OpenWebsiteSbaril":
					csInterface.openURLInDefaultBrowser("http://sbaril.me"); LoseFocus();
					break;
				default: 
					console.log(event.data.menuName + " clicked!");
			}
		}

		// Listen for the Flyout menu clicks
		csInterface.addEventListener("com.adobe.csxs.events.flyoutMenuClicked", flyoutMenuClickedHandler);

        
        
    }  
    init();

}());
    
