sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("qualitybtpportal.controller.Login", {
        onLoginPress: function () {
            var oView = this.getView();
            var employeeId = oView.byId("employeeId").getValue();
            var password = oView.byId("password").getValue();

            if (!employeeId || !password) {
                MessageBox.error("Please enter Employee ID and Password.");
                return;
            }

            var oModel = this.getView().getModel();
            var sPath = "/ZDD_QUALITYLOGIN"; // Your EntitySet name from metadata.xml

            oModel.read(sPath, {
                filters: [
                    new sap.ui.model.Filter("emp_id", sap.ui.model.FilterOperator.EQ, employeeId),
                    new sap.ui.model.Filter("emp_password", sap.ui.model.FilterOperator.EQ, password)
                ],
                success: function (oData) {
                    if (oData.results && oData.results.length > 0) {
                        var status = oData.results[0].login_status;
                        if (status === "Success") {
                            MessageToast.show("Login Successful!");
                            // Navigate to Home view
                            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                            oRouter.navTo("Home"); // Make sure this route exists
                        } else {
                            MessageBox.error("Invalid credentials.");
                        }
                    } else {
                        MessageBox.error("Invalid credentials.");
                    }
                }.bind(this),
                error: function (err) {
                    MessageBox.error("Error connecting to backend.");
                    console.error(err);
                }
            });
        }
    });
});