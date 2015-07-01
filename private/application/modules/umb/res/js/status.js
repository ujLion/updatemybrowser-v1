/*!
 * updatemybrowser.org JavaScript Library v1
 * http://updatemybrowser.org/
 *
 * Copyright 2012, Joram van den Boezem
 * Licensed under the GPL Version 3 license.
 * http://www.gnu.org/licenses/gpl.html
 * 
 */
/*!
 * Require UMB.Detect
 * Require UMB.Browsers
 */
;if (typeof UMB === "undefined") {UMB = function() {}};

UMB.Status = function() {
	
	var STATUS_LATEST 		= 'latest';
	var STATUS_UPDATE 		= 'update';
	var STATUS_WARNING 		= 'warning';
	
	return {
		getStatus: function() {
			var browser = UMB.getBrowserInfo(UMB.Detect.browser);
			var latestVersion = parseFloat(browser.current);
			var minimumVersion = parseFloat(UMB.getConfig().require[UMB.Detect.browser]);
			if (UMB.Detect.version >= latestVersion) {
				return STATUS_LATEST;
			} else if (UMB.Detect.version >= minimumVersion) {
				return STATUS_UPDATE;
			} else {
				return STATUS_WARNING;
			}
		}		
	};
}();