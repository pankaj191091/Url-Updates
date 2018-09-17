jQuery(document).ready(function(){var lotameAPI="https://ad.crwdcntrl.net/5/c=2104/rand="+Math.random()+"/pe=y/callback=processauds"
jQuery.ajax({url:lotameAPI,dataType:'jsonp',jsonp:false,jsonpCallback:"processauds",cache:true,crossDomain:true,success:function(data){}});window.processauds=function(processauds){var dartCCKey="ccaud";var dartCC="";if(typeof(processauds)!='undefined'){for(var cci=0;cci<processauds.Profile.Audiences.Audience.length;cci++){if(cci>0){dartCC+=";";}
dartCC+=dartCCKey+"="+processauds.Profile.Audiences.Audience[cci].abbr;}}
if(cookie.enabled()){var isCookie;if(cookie.get('AUDIENCE_DATA')!=null){cookie.remove('AUDIENCE_DATA');if(cookie.get('AUDIENCE_DATA')==null){var cookieval=cookie.set('AUDIENCE_DATA',dartCC);}
isCookie=true;return false;}else{isCookie=false;}
if(dartCC!=''&&(isCookie==false)){cookie.set('AUDIENCE_DATA',dartCC);isCookie=true;}}};});