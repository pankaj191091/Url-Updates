var methodData=function(){var url=window.location.href;function is_landscape(){return(window.innerWidth>window.innerHeight);}
var is_mobile_supported=(document.documentElement.clientWidth<=768||(is_landscape()&&document.documentElement.clientWidth<768));function hideSlideShowPhone(){var match=url.match(/\/(\d+)\//);if(match!=null){url=url.replace(match[0],'/');var card_redirect='/#card-'+match[1]+'/';}
if(typeof toh_slideshow!=='undefined'){if(url.indexOf("?")!==-1){var query_parameters=url.substr(url.indexOf("?")-1);url=toh_slideshow.config.list_url+query_parameters;}else{url=toh_slideshow.config.list_url;if(card_redirect){url=url+card_redirect;}}
window.location.href=url;}}
if(is_mobile_supported&&document.body.classList.contains('slideshow-view')){hideSlideShowPhone();}
return is_mobile_supported;};jQuery(document).ready(function($){if(methodData()&&document.body.classList.contains('slideshow-view')){$('.listicle-switch').hide();}
setTimeout(function(){var url=window.location.href;var match=url.match(/#card\-(\d+)/);if(match){var redirect='#card-'+match[1];jQuery("html, body").animate({scrollTop:jQuery(redirect).first().offset().top},1000);}},6000);});