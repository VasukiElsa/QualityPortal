sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("qualitybtpportal.controller.Usagedecision", {

        // Navigate back to Home
        onNavBack: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Home");
        },

        // Format "stat35" (Usage Decision Made)
        formatDecisionMade: function (value) {
            if (value === "X") {
                return "Yes";
            } else if (!value) {
                return "No";
            }
            return value; // fallback if system sends unexpected values
        },

        // Format Usage Decision Code into meaningful text
        formatDecisionCode: function (value) {
            switch (value) {
                case "A":
                    return "Accepted";
                case "R":
                    return "Rejected";
                case "C":
                    return "Conditional";
                default:
                    return value || ""; // fallback
            }
        }

    });
});
