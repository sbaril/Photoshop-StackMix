﻿#target photoshop//// StackMix_Skewness.jsx////// Generated Wed Jun 18 2014 11:18:18 GMT+0200//cTID = function(s) { return app.charIDToTypeID(s); };sTID = function(s) { return app.stringIDToTypeID(s); };if (documents.length == 0) {    // alert("There are no documents open.");}else {        //    //==================== StackMix_Skewness ==============    //    function StackMix_Skewness() {      // Set Stack Mode      function step1(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        desc1.putClass(sTID("imageStackPlugin"), cTID('skew'));        desc1.putString(cTID('Nm  '), "Skewness");        executeAction(sTID('applyImageStackPluginRenderer'), desc1, dialogMode);      };      step1();      // Set Stack Mode    };    //=========================================    //                    StackMix_Skewness.main    //=========================================    //    StackMix_Skewness.main = function () {      StackMix_Skewness();    };    StackMix_Skewness.main();}// EOF"StackMix_Skewness.jsx"// EOF