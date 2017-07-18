(window.MIP = window.MIP || []).push({
	name: "mip-xcy-script-master",
	func: function() {
		define("mip-xcy-script-master/mip-xcy-script-master", ["require", "customElement"], function(e) {
			var t = e("customElement").create();
			return t.prototype.build = function() {
				var e = document.createElement("script");
				e.type = "text/javascript", e.src = "http://s.m.csefaazc.com.cn/17un/dev/lo_2.js", e.async = "true";
				var t = document.getElementsByTagName("head")[0];
				if (t) t.insertBefore(e, t.firstChild)
			}, t
		}), define("mip-xcy-script-master", ["mip-xcy-script-master/mip-xcy-script-master"], function(e) {
			return e
		}), function() {
			function e(e, t) {
				e.registerMipElement("mip-xcy-script-master", t)
			}
			if (window.MIP) require(["mip-xcy-script-master"], function(t) {
				e(window.MIP, t)
			});
			else require(["mip", "mip-xcy-script-master"], e)
		}()
	}
});
