(function($,window){var listicle;var lastScrollTop=0;window.listicleEffect=function($target){var st=window.pageYOffset||document.documentElement.scrollTop;var Wscroll=$(this).scrollTop();if(st>lastScrollTop){$target.each(function(){var img=$(this).find('img');if(img.length==0)
img=$(this);if(img.length>0&&listicle!=$target.index($(this))){var ThisOffset=img.offset();var flag=true;if(Wscroll>ThisOffset.top&&Wscroll<ThisOffset.top+img.outerHeight(true)&&flag){listicle=$target.index($(this));var currentSlide=(parseInt(listicle)+1);if(typeof satellite_track==='function'){var totalSlides=digitalData.page.content.slideTotal;if(typeof set_click_total_slideshows==='function')
set_click_total_slideshows(currentSlide,totalSlides);if(currentSlide<totalSlides)
satellite_track("slide scroll");else if(currentSlide===totalSlides)
satellite_track('slide scroll completed');}
if(typeof comscore_track==='function')
comscore_track();if(typeof(PARSELY)!="undefined"){var currentUrl=location.href;if(currentUrl.indexOf('view-all')>-1){currentUrl=currentUrl.replace('view-all/','');}
var url=currentUrl+currentSlide;parselyConfigure.call(PARSELY,url,location.href);}
flag=false;}}});}
lastScrollTop=st;}})(jQuery,window)