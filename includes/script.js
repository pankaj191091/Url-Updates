jQuery(document).ready(function(e){function t(){o=!1;var t=e(".autoload_archive");if(n&&t.length>0){var i=e(window).scrollTop()+e(window).height(),s=t.offset().top;if(i+300>s){n=!1;var r=t.attr("data-url-string");e.get(r).success(function(e){t.replaceWith(e),n=!0})}}}function i(){o=o||requestAnimationFrame(t)}var n=!0,o=!1;window.addEventListener("scroll",i,!1)}),jQuery(document).ready(function(e){function t(){e(".toh-logged-in-wrapper").show()}var i=e(".toh-secondary-menu"),n=e(".toh-logged-username"),o=e(".recipe-comments__submission-form"),s=e(".recipe-login-comments");n.empty();var r=function(){return"function"==typeof cookie&&(void 0!==cookie.get("ID")&&void 0!==cookie.get("ScreenName"))},c=function(e){document.cookie=e+"=;path=/;domain=.tasteofhome.com;expires=Thu, 01 Jan 1970 00:00:01 GMT;"};if(e("body").on("click",".user-logout > a",function(e){e.preventDefault(),c("ID"),c("ScreenName"),window.location.reload()}),r()){e(".login-class, .join-link, .non-logged-in-subscribe,.header-login-link, .subscribe-header-cta.appears-on-stick").hide(),s.hide(),o.show(),e("body").addClass("logged-in"),e(".toh-secondary-menu").show(),e(window).on("orientationchange",function(){e(window).width()>=1024&&t()}),e(window).width()>=1024&&t();var a=cookie.get("ScreenName");a.length>=20&&(a=a.substr(0,20)),n.text(a)}else i.hide(),o.hide(),e(".login-verify").each(function(){var t=e(this).attr("href");e(this).attr("href","https://www.tasteofhome.com/login/index?returnurl="+window.location.href+t)})}),jQuery(document).ready(function(e){var t=e(".single-project .project-single-card img"),i=t.parent();i.addClass("image-parent");var n=e(".single-project .project-single-card iframe"),o=n.parent();o.addClass("video-container"),e(".single-project .project-single-card p").each(function(){"&nbsp;"==e(this).html()&&e(this).addClass("nbsp")})}),jQuery(document).ready(function(e){if(document.body.classList.contains("single-project-legacy")){var t=jQuery(".dmplayer").prev();t.addClass("dmplayer_heading")}}),window.isMobile=function(){return window.innerWidth<=768},window.isTablet=function(){return window.innerWidth<1024},window.insertElementBefore=function(e,t){t.appendChild(e),t.insertBefore(e,t.childNodes[0])},window.insertElementAfter=function(e,t){var i=t.parentNode;i.lastChild===t?i.appendChild(e):i.insertBefore(e,t.nextSibling)},window.getElementPosition=function(e){var t=0;if(e.offsetParent)do t+=e.offsetTop,e=e.offsetParent;while(e);return t>=0?t:0},jQuery(function(e){function t(){for(var t=e(".nav-recipes .sub-menu > li"),i=0;i<t.length;i+=8)t.slice(i,i+8).wrapAll("<div class='sub-columns'></div>")}e(".search-mob").click(function(){e(".search-box-mob").slideToggle("slow")}),t(),e(".nav-holidays ul.sub-menu li:lt(4)").wrapAll('<div class="dropdown-left"></div>'),e(".nav-holidays ul.sub-menu li:gt(3)").wrapAll('<div class="dropdown-right"></div>'),e(".single-post .entry-content p").has("img").addClass("center image-wrapper");var i=e(".single-post .entry-content .listicle-carousel p ").has("img").hasClass("center image-wrapper");i&&e(".single-post .entry-content .listicle-carousel p ").removeClass("center image-wrapper")}),jQuery(function(e){function t(t){t.preventDefault();var i="true"==this.getAttribute("aria-expanded"),n=this.getAttribute("aria-controls"),o=document.getElementById(n);this.setAttribute("aria-expanded",!i),"true"==o.getAttribute("aria-hidden")?(o.removeAttribute("aria-hidden"),e(".menu-hamburger-menu-container").css("height","auto")):o.setAttribute("aria-hidden",!0)}function i(e){e.preventDefault(),u.classList.contains("visible")?u.classList.remove("visible"):(u.classList.add("visible"),u.querySelector("input").focus())}function n(e){var t=document.getElementById("search"),i=document.getElementById("toh-search-form-wrapper").action,n=document.getElementById("search").name;location.assign(i+"?"+n+"="+t.value)}function o(){e(window).width()>c?e(window).scrollTop()>=140?0==w&&(u.classList.remove("visible"),d.unbind("click",n)):(u.classList.add("visible"),u.querySelector("input").focus(),d.bind("click",n),h.hide()):e(window).scrollTop()>=140&&0==w&&(u.classList.remove("visible"),d.unbind("click",n)),e("header").hasClass("sticky")?h.show():h.hide(),a=!1}function s(){a||(window.requestAnimationFrame(o),a=!0)}"function"==typeof Slinky&&"function"!==e.fn.slinky&&(e.fn.slinky=function(e){return new Slinky(this,e)});e(".menu-hamburger-menu-container").slinky({title:!0,resize:!0,speed:400});var r=document.querySelector(".toh-menu-toggle"),c=1280,a=!1;r&&r.addEventListener("click",t);var l=document.querySelector(".toh-logged-in-menu-toggle");l&&l.addEventListener("click",t);var d=e("#toh-search-toggle"),u=document.getElementById("toh-search-form-wrapper"),h=e(".close-btn");h.hide(),null!==u&&e(window).width()>c&&u.classList.add("visible"),d&&(e(window).width()<=c?d.bind("click",i):d.bind("click",n));var w=0;e("body").on("click",".sticky .toh-search-button",function(e){u.classList.add("visible"),u.querySelector("input").focus(),d.bind("click",n),h.show(),w=1}),window.addEventListener("scroll",s,!1),e("body").on("click",".close-btn",function(e){w=0,u.classList.remove("visible"),d.unbind("click",n)}),e(".toh-search-button").click(function(){e(".toh-menu-wrapper").toggleClass("hideNav")}),e(".toh-menu-toggle").click(function(){e(".toh-menu-wrapper").removeClass("hideNav"),e("#toh-search-form-wrapper").hasClass("visible")&&e("#toh-search-form-wrapper").removeClass("visible")}),e(document).on("keydown","#search",function(t){if(38==t.keyCode||40==t.keyCode){var i=e(this);i.blur()}})}),function(){var e=document.body,t=document.querySelector(".entry-header .social-sharing"),i=document.querySelector(".entry-header"),n=document.querySelector(".entry-content"),o=document.querySelector(".entry-header .featured-image"),s=document.querySelector(".dek");document.querySelector(".entry-header .featured-image figcaption");t&&(e.classList.contains("single-post")&&enquire.register("screen and ( max-width: 769px )",{match:function(){o?window.insertElementAfter(t,o):s?window.insertElementAfter(t,s):window.insertElementBefore(t,n)},unmatch:function(){window.insertElementBefore(i,t)}}),e.classList.contains("single-collection")&&e.classList.contains("list-view")&&enquire.register("screen and ( max-width: 769px )",{match:function(){o?window.insertElementAfter(t,o):s?window.insertElementBefore(t,s):window.insertElementBefore(t,n)},unmatch:function(){window.insertElementBefore(i,t)}}),e.classList.contains("single-collection")&&e.classList.contains("slideshow-view")&&enquire.register("screen and ( max-width: 769px )",{match:function(){s?window.insertElementBefore(t,s):window.insertElementBefore(t,n)},unmatch:function(){window.insertElementBefore(i,t)}}))}(window),jQuery(function(e){e(".single-post .entry-content p").has("img").addClass("center image-wrapper");var t=e(".single-post .entry-content .listicle-carousel p ").has("img").hasClass("center image-wrapper");t&&e(".single-post .entry-content .listicle-carousel p ").removeClass("center image-wrapper")}),function(){function e(){if(jQuery(window).width()<=768){var e=jQuery(".recipe-ingredients__collection"),t=function(){this.coverHeight=function(){var t=0;return e.find("li:lt(4)").each(function(){t+=jQuery(this).outerHeight()}),t}},i=new t;e.height(i.coverHeight())}}var t=document.getElementById("recipe-ingredients__view-more"),i=jQuery(".recipe-ingredients__list").outerHeight();t&&(t.addEventListener("click",function(){jQuery(".recipe-review").removeClass("mobile-expand-section"),"function"==typeof do_adobe_data_analytics&&do_adobe_data_analytics("view recipe","recipe engagement","view recipe"),jQuery(".recipe-ingredients__list").removeClass("recipe-ingredients__collection").animate({height:i},200),document.body.classList.add("view-recipe-expanded"),jQuery(".single-online-ad").show()}),jQuery(window).on("orientationchange",function(){setTimeout(e,500)}),e())}(window),function(){var e=document.querySelector(".recipe-featured-ingredient__toggle");e&&e.addEventListener("click",function(){e.classList.toggle("-expanded")},!1)}(window),function(e,t,i){t("ul.recipe-ingredients__list").each(function(){t(this).children().length>5&&t(this).addClass("splitColumns")})}(document,jQuery),jQuery(document).ready(function(e){var t=function(){this.toggleVisibility=function(t){$target=e("#"+e(t).data("toogle_id")),e(t).is(":checked")?$target.show():$target.hide()}},i=new t,n=e(".print_chk");n.on("click",function(){i.toggleVisibility(this)});var o=e("#chkRecipePhoto");o.on("change",function(){e("#divRomanceCard").toggleClass("one-third")}),e("#btnRecipePrint").on("click",function(t){t.preventDefault(),digitalData.print=digitalData.print||{},digitalData.print.options="",e(".print_chk").each(function(){e(this).is(":checked")&&(digitalData.print.options+=e(this).attr("data-comscore-data")+"|")}),digitalData.print.options=digitalData.print.options.substring(0,digitalData.print.options.length-1),set_click_data("print","recipe engagement","print page"),satellite_track("print click"),window.print()})}),function(){function e(){$selector="#recipe-ingredients__view-more";var e=!1;jQuery($selector).is(":visible")&&(jQuery($selector).click(),e=!0),e?setTimeout(function(){t()},500):t()}function t(){var e=".recipe-review",t=jQuery(e).first().offset().top;if(jQuery(".sticky").length){var i=jQuery(".sticky").height();t-=i,window.innerWidth<480?t-=i+25:window.innerWidth>=480&&window.innerWidth<=680&&(t-=i+70)}else t-=200;jQuery("html, body").animate({scrollTop:t},2e3)}jQuery(document).ready(function(){jQuery(".recipe-comments-scroll").click(e)})}(),function(){var e=document.getElementById("social-share-toggle"),t=document.querySelector(".recipe-toolbar__share-buttons");e&&e.addEventListener("click",function(e){e.preventDefault(),t.classList.toggle("-open")})}(window),function(e,t,i){"use strict";t("#sticky_share").click(function(){t("#share_buttons").slideToggle("2000","swing",function(){t("#share_buttons").is(":visible")&&t(".toh-sharing.social-sharing.recipe").show()})})}(document,jQuery),function(){var e,t=document.querySelector(".newsletter-signup-content-widget"),i=document.querySelector(".listicle-page"),n=(document.querySelector(".listicle-nav"),document.querySelector(".hero-container.tax-hero")),o=(document.querySelector(".recipe-comments"),document.querySelector(".recirc-module"),document.querySelector(".white-out"));document.querySelector(".entry-content"),document.querySelector(".grey-out"),document.querySelector(".project-tools");document.body.classList.contains("single-recipe")?e=document.querySelector("#taboola-below-recipe-thumbnails"):(document.body.classList.contains("single-project")||document.body.classList.contains("single-project-legacy"))&&(e=document.querySelector("#taboola-below-article-thumbnails")),t&&document.addEventListener("DOMContentLoaded",function(){if(document.body.classList.add("load-white-out"),(document.body.classList.contains("single-post")||document.body.classList.contains("single-recipe"))&&(o.style.height=window.getElementPosition(t)+300+"px"),document.body.classList.contains("single-collection")&&(o.style.height=window.getElementPosition(i)+200+"px"),document.body.classList.contains("single-recipe")||document.body.classList.contains("single-project")||document.body.classList.contains("single-project-legacy")){var s=768,r=1024;jQuery(window).width()<s?o.style.height=Math.abs(window.getElementPosition(o)-window.getElementPosition(e))-80+"px":jQuery(window).width()<r?o.style.height=Math.abs(window.getElementPosition(o)-window.getElementPosition(e))+200+"px":o.style.height=Math.abs(window.getElementPosition(o)-window.getElementPosition(e))+300+"px"}document.body.classList.contains("archive")&&(o.style.height=window.getElementPosition(n)+200+"px")})}(window),jQuery(document).ready(function(e){function t(t){var i=new StickyFeature({duration:1500,offset:t});i.stickyWithAds(e(".sidebar-primary .widget"),0),i.stickyWithAds(e(".CMRightRail-AD"),2);var n,o=0,s=!1;e(window).scroll(function(){n=e(this).scrollTop(),n-o>=1500&&s&&(googletag.pubads().refresh([fourth]),o=n)});var r=e(i.options.target[3]).closest(".sticky-wrapper");e(r).on("sticky_kit:unstick",function(t){e(this).closest(".ad-wrapper").prop("style","position:  sticky; top: 0px;"),s||(o=n,s=!0)})}function i(){var t=e(".listicle-page-container"),i=e(".taboola-container");t.each(function(){var t=e(this).next().find(".sidebar-sticky-wrapper");t.addClass("ie-sticky"),new StickyFeature({duration:e(this).height()-650,target:t})}),new StickyFeature({duration:3e3,target:i.next().find(".sidebar-sticky-wrapper")})}function n(){var t="",i=e("body");if(i.hasClass("home"))t="homepage";else if(i.hasClass("archive"))t="hubs";else if(i.hasClass("page"))t="page";else{var n=document.body.className.match(/(^|\s)single-(.*?)( |$)/);n&&(t=n[2]),"listicle"!==t&&"collection"!==t||(t=i.hasClass("slideshow-view")?"slideshow":"listicle")}return t}var o=e(".site-header");if(StickyFeature.prototype.stickyWithAds=function(t,i){if(t.length){var n=t,o=e(this.options.target[i]).closest(".sticky-wrapper");o.find("div").first().after(n)}},jQuery(window).width()>1023){var s=0,r=n();o.length&&(s=o.height());var c=/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);switch(r){case"post":t(s);break;case"recipe":new StickyFeature({offset:s+74,target:e(".right-sidebar div.ad-wrapper:not( .view-more-ad ) > div ")});break;case"listicle":c&&i();break;case"homepage":case"slideshow":break;case"project":new StickyFeature({offset:s});break;default:new StickyFeature({offset:s})}var a=e(".ad-wrapper-sticky");a.addClass("sticky-bottom").append('<div class="close-btn"><i class="fa fa-times"></i> </div>'),e("body").on("click",".close-btn",function(e){a.remove()})}if(jQuery(window).width()<480){var l=e(".mobile_billboard"),d=0;e(window).scroll(function(){var e=window.pageYOffset||document.documentElement.scrollTop;e<=140?(o.removeClass("sticky"),l.removeClass("sticky")):e>160&&e>d?(o.removeClass("sticky"),l.addClass("sticky")):(o.addClass("sticky"),l.removeClass("sticky")),d=e})}else e(window).scroll(function(){e(window).scrollTop()>=140?o.addClass("sticky"):o.removeClass("sticky")})});
//# sourceMappingURL=script.min.js.map