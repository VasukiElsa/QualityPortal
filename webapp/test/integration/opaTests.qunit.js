/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["qualitybtpportal/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
