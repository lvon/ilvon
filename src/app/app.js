require('./app.less');

if (__LOCAL__) {
    // see https://github.com/livereload/livereload-extensions/issues/26
    setInterval(function() {
        document.body.focus();
    }, 200);
}


window.globalData={};

window.globalData.DOUYU = "douyu";
window.globalData.clientHeight = $(window).height();
window.globalData.clientWidth = $(window).width();

$(window).resize(function() { 
	window.globalData.clientHeight = $(window).height();
	window.globalData.clientWidth = $(window).width();
});
