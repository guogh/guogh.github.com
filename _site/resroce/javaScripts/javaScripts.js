/**
 * @author guogh
 * @date   2017-3-14
 */

//菜单按钮事件
$("#homemenu").click(function(){
	var display = $("#meunpage").css("display");
	if(display== "block"){
		$("#meunpage").css({'display': 'none'});
		$("#meunpage").removeClass("site-nav-on");
	}else{
		$("#meunpage").css({'display': 'block'});
		$("#meunpage").addClass("site-nav-on");
	}
});