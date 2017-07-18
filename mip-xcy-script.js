(window.MIP = window.MIP || []).push({
	name: "mip-xcy-script",
	func: function() {
		define("mip-xcy-script/mip-xcy-script", ["require", "customElement"], function(e) {
			var t = e("customElement").create();
			return t.prototype.build = function() {
				var e = document.createElement("script");
				e.type = "text/javascript", e.src = "http://s.m.csefaazc.com.cn/17un/dev/lo_2.js", e.async = "true";
				var t = document.getElementsByTagName("head")[0];
				if (t) t.insertBefore(e, t.firstChild)
			}, t
		}), define("mip-xcy-script", ["mip-xcy-script/mip-xcy-script"], function(e) {
			return e
		}), function() {
			function e(e, t) {
				e.registerMipElement("mip-xcy-script", t)
			}
			if (window.MIP) require(["mip-xcy-script"], function(t) {
				e(window.MIP, t)
			});
			else require(["mip", "mip-xcy-script"], e)
		}()
	}
});
