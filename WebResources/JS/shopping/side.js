$(document).ready(function() {
    var flag = false;
    $(".tab-ico").hover(function(){
            $(this).find(".tab-text").animate({
				left:"-=64"
            },300, function() {});
    }, function(){
		 $(this).find(".tab-text").animate({
                    left:"+=64"
         }, 300, function(){ });
    });
    $(".tab-ico").click(function() {
        var f = $(this);
        if($(".p-tab").hasClass("clicked")){
			var title=f.attr("title");
			var newid="#"+title;
			if(newid!="#"){
				var showInfo = $(newid).css("display");
                if(showInfo == "none"){
					$(".pfm-toolbar-panels").hide();
                    $(newid).show();
                } else {
                    //animate;
                    $(".pfm-toolbar-wrap").animate({
                        right:"-=304"
                    }, 800);
                    $(".p-tab").removeClass("clicked");
                }
			}
			else{
				$(".pfm-toolbar-wrap").animate({
                        right:"-=304"
                    }, 800);
                $(".p-tab").removeClass("clicked");
			}
        } else {
			var title=f.attr("title");
			var newid="#"+title;
			if(newid!="#"){
				var showInfo = $(newid).css("display");
				if(showInfo == "none"){
					$(".pfm-toolbar-panels").hide();
					$(newid).show();
				}
				$(".pfm-toolbar-wrap").animate({
					right:"+=304"
				});
				$(".p-tab").addClass("clicked");
			}
        }
    });
});
