﻿#target photoshop//// StackMix_AutoAlignLayers.jsx////// Generated Wed Jun 18 2014 11:37:01 GMT+0200//cTID = function(s) { return app.charIDToTypeID(s); };sTID = function(s) { return app.stringIDToTypeID(s); };if (documents.length == 0) {    // alert("There are no documents open.");}else {        //    //==================== StackMix_AutoAlignLayers ==============    //    function StackMix_AutoAlignLayers() {      // Align      function step1(enabled, withDialog) {        if (enabled != undefined && !enabled)          return;        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);        var desc1 = new ActionDescriptor();        var ref1 = new ActionReference();        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));        desc1.putReference(cTID('null'), ref1);        desc1.putEnumerated(cTID('Usng'), cTID('ADSt'), sTID("ADSContent"));        executeAction(cTID('Algn'), desc1, dialogMode);      };      step1();      // Align    };    //=========================================    //                    StackMix_AutoAlignLayers.main    //=========================================    //    StackMix_AutoAlignLayers.main = function () {      StackMix_AutoAlignLayers();    };    StackMix_AutoAlignLayers.main();}// EOF"StackMix_AutoAlignLayers.jsx"// EOF