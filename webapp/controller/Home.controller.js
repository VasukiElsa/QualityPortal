sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/core/UIComponent"
], function (Controller, MessageToast, MessageBox, UIComponent) {
    "use strict";

    return Controller.extend("qualitybtpportal.controller.Home", {
        /**
         * Lifecycle hook called when the view is initialized.
         */
        onInit: function () {
            // No specific logic needed on initialization for this simple example.
        },

        /**
         * Handles the press event of the navigation button.
         * Navigates back to the previous page in history.
         */
        onNavBack: function () {
            // Get the router instance and navigate back.
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.navTo("Login", {}, true);
        },

        /**
         * Handles the "Incident Management" tile press.
         * You can replace the MessageToast with router navigation.
         */
        onInspectionTilePress: function () {
            MessageToast.show("Inspection lot tile pressed!");
            // TODO: Replace with navigation to the Incident Management view
             var oRouter = UIComponent.getRouterFor(this);
             oRouter.navTo("Inspectionlot"); // You'll need to define this route in your manifest.json
        },

        /**
         * Handles the "Risk Assessment" tile press.
         * You can replace the MessageToast with router navigation.
         */
        onResultRecordsTilePress: function () {
            MessageToast.show("Result Records tile pressed!");
            // TODO: Replace with navigation to the Risk Assessment view
             var oRouter = UIComponent.getRouterFor(this);
             oRouter.navTo("Resultrecords"); // You'll need to define this route in your manifest.json
        },

        onUsageDecisiontTilePress: function () {
            MessageToast.show("Usage Decision tile pressed!");
            // TODO: Replace with navigation to the Risk Assessment view
             var oRouter = UIComponent.getRouterFor(this);
             oRouter.navTo("Usagedecision"); // You'll need to define this route in your manifest.json
        },


        /**
         * Handles the Log Out button press.
         * Shows a message and navigates back to the Login page.
         */
        onLogoutPress: function () {
            // You can add more complex logout logic here, like clearing a session or token.
            MessageToast.show("Logging out...");
            
            // Get the router instance
            var oRouter = UIComponent.getRouterFor(this);

            // Navigate back to the Login view and clear the navigation history.
            oRouter.navTo("Login", {}, true);
        }
    });
});