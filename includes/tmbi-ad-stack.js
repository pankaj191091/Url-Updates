var googletag=googletag||{};googletag.cmd=googletag.cmd||[];var $=jQuery,tmbi_ad_stack_logs={dfp_calls:[],dfp_slots_rendered:[]};console.log('Ad Stack','Initializing');if(typeof(tmbi_ad_data)!=='undefined'){window.toh_ad_data=tmbi_ad_data;tmbi_ad_data.batch_sra=true;var property='/'+tmbi_ad_data.property+'/';var page_type=tmbi_ad_data.pageType;var url_path=tmbi_ad_data.urlPath;var category=tmbi_ad_data.category;var keywords=tmbi_ad_data.keywords;var subCategory=tmbi_ad_data.topic;var collapse_empty_div=!tmbi_ad_data._gfc;var theme='new';var review_count=tmbi_ad_data.review_count;var platform=tmbi_ad_data.platform;var ad_unit_two=tmbi_ad_data.ad_unit_two;var content_ID=tmbi_ad_data.contentID||'';var lotame_ID=tmbi_ad_data.lotameID||'';var ad_unit_three='';var listOfSlots=tmbi_ad_data.ad_slots;var global_targeting=tmbi_ad_data.global_targeting;switch(page_type){case 'recipe':ad_unit_three='recipedetail';var pathName=window.location.pathname&&window.location.pathname.split('/')[3],hasPrintUrl=pathName?pathName.toLowerCase()==='print':false;toh_ad_data.should_use_batch_SRA=hasPrintUrl?'':toh_ad_data.should_use_batch_SRA;break;case 'card':ad_unit_three='slideshow';break;case 'tag':ad_unit_three='category';break;default:ad_unit_three=page_type;break;}
var breakpoints={large_screen:1024,desktop:769,tablet:481,mobile:0,};var batch=0;var window_width=$(window).width();if(window_width<breakpoints.tablet){platform='mobile';}
var siteID=tmbi_ad_data.siteId+'_'+platform;var site_prefix=property+siteID+'/';var ad_unit_two_prefix=ad_unit_two+'/';var site_ad_url=site_prefix+ad_unit_two_prefix+ad_unit_three;var ad_unit_path_set=false;if(tmbi_ad_data.overrides&&tmbi_ad_data.overrides.ad_unit_path){site_ad_url=tmbi_ad_data.overrides.ad_unit_path;ad_unit_path_set=true;}
function customAdUnitPath(slotURL){var slotName=site_ad_url+'/'+slotURL;if(ad_unit_path_set){slotName='/'+site_ad_url;}
return slotName;}
window.tmbi_ad_data.jwplayer_advertising={"admessage":"This video will resume in xx seconds","adscheduleid":"DPCwJXPi","client":"googima","cuetext":"Advertisement","schedule":[{"offset":"pre","tag":"https://pubads.g.doubleclick.net/gampad/ads?iu="+site_ad_url+"/video&description_url=familyhandyman.com&env=vp&impl=s&correlator=&tfcd=0&npa=0&gdfp_req=1&output=vast&sz=1000x1000&unviewed_position_start=1","type":"linear"}],"skipmessage":"Skip ad in xx seconds","vpaidmode":"enabled"};var page_depth='-1';if(sessionStorage){page_depth=parseInt(sessionStorage.getItem('page_depth')||0);page_depth++;sessionStorage.setItem('page_depth',page_depth);if(page_depth>=5){page_depth='5 or greater';}}
var LAZY_LOAD_INVIEW_OFFSET=400;console.log('Ad Stack','Init finished',site_ad_url,tmbi_ad_data);var cookie_accepted=!cookie.get('cookie_notice_accepted')?'true':cookie.get('cookie_notice_accepted');}
$(document).ready(function(){googletag.cmd.push(function(){console.log('Ad Stack','Setting up pubads');googletag.pubads().setTargeting('url',url_path).setTargeting('category',category).setTargeting('topic',subCategory).setTargeting('keywords',keywords).setTargeting('theme',theme).setTargeting('contentID',content_ID).setTargeting('audience',lotame_ID).setTargeting('refer',document.referrer).setTargeting('gdpr_cookie_accepted',cookie_accepted).setTargeting('page_depth',''+page_depth);for(var k in global_targeting){if(global_targeting.hasOwnProperty(k)){googletag.pubads().setTargeting(k,global_targeting[k]);}}
googletag.pubads().addEventListener('slotRenderEnded',function(slot){console.log('Slot has been rendered: ',slot);slot?tmbi_ad_stack_logs.dfp_slots_rendered.push(slot):'';});googletag.pubads().disableInitialLoad();googletag.pubads().enableAsyncRendering();googletag.pubads().enableSingleRequest();googletag.enableServices();console.log('Ad Stack','pubads services enabled');function refresh_ads(ad_elements,idValue){if(idValue){console.log('TOH Ad Stack','Creates a slot for the ad to render');googletag.display(idValue);}
console.log('Ad Stack','Trying to fetch ad(s)',ad_elements);if(window.googletag&&googletag.pubadsReady){console.log('Ad Stack','Fetching and rendering the ad(s)',ad_elements);googletag.pubads().refresh(ad_elements);}else{setTimeout(function(){refresh_ads(ad_elements,idValue);},2000);console.log('Ad Stack','Pubads service not ready.So refresh the slot after 2 secs ',ad_elements);}}
function lazy_load_ad(options){lazy_load_batch([options]);}
function lazy_load_batch(arr_ads,batch){console.log('Ad Stack','Lazy loading',(batch?"(Batch "+batch+")":"(Single ad)"),arr_ads);var ad_elements=[];var a9_slots=[];if(!batch){var idValue=arr_ads[0].id;}
for(var index in arr_ads){var options=arr_ads[index];var id=options.id;var slotName=options.slotName;var sizes=options.sizes;ad_elements.push(googletag.defineSlot(slotName,[],id).setTargeting('tf',options.targeting.tf).setTargeting('pos',options.targeting.pos).setTargeting('location',options.targeting.location).setTargeting('ix-adslot',options.targeting.location[0]).setTargeting('random',Math.ceil(Math.random()*100)).defineSizeMapping(options.sizeMapping).setCollapseEmptyDiv(collapse_empty_div).addService(googletag.pubads()));a9_slots.push({slotID:id,sizes:sizes,slotName:slotName,});}
ad_elements&&ad_elements.length?tmbi_ad_stack_logs.dfp_calls=tmbi_ad_stack_logs.dfp_calls.concat(ad_elements):'';if(typeof(a9Ads)!=='undefined'&&a9Ads.ask_a9_bids){console.log('Ad Stack','Calling A9 for lazy-loaded unit with slot_data',a9_slots);a9Ads.ask_a9_bids(a9_slots,function(bids,apstag){console.log('Ad Stack','Got dynamic A9 bids',bids)
apstag.setDisplayBids();console.log('Ad Stack','Fetching ad(s) from A9');refresh_ads(ad_elements,idValue);});}else{console.log('Ad Stack','A9 is not active. Fetching ad(s) from GPT');refresh_ads(ad_elements,idValue);}}
function get_size_mapping_from_sizes_array(sizes){var sizeMapping=googletag.sizeMapping();var breakpoint_names=Object.keys(breakpoints);breakpoint_names.forEach(function(name){if(name in sizes){sizeMapping.addSize([breakpoints[name],0],sizes[name]);}});return sizeMapping.build();}
function get_size_in_current_breakpoint(sizes){var viewport_width=w=Math.max(document.documentElement.clientWidth,window.innerWidth||0);function get_current_breakpoint(window_width){if(window_width>=breakpoints.large_screen){return 'large_screen';}
if(window_width>=breakpoints.desktop){return 'desktop';}
if(window_width>=breakpoints.tablet){return 'tablet';}
return 'mobile';}
var current_breakpoint_name=get_current_breakpoint(viewport_width);var breakpoint_names=Object.keys(breakpoints);var current_breakpoint_position=breakpoint_names.indexOf(current_breakpoint_name);for(var i=current_breakpoint_position;i<breakpoint_names.length;i++){if(breakpoint_names[i]in sizes){return sizes[breakpoint_names[i]];}}
return[];}
function get_size_for_a9(sizes){return get_size_in_current_breakpoint(sizes);}
var lazyCallback=function(target,isInView){$this=target;if(isInView){var target=$this.find("div[id^='div-gpt-ad']").attr('id')||$this.attr('id');var slotRef=$this.attr('data-ad');var slotParameters=listOfSlots[slotRef];fetchAds(slotParameters,target);console.log('Ad Stack','Fetch called, disabled lazy loading',$this);$this.off('inview').removeClass('adunit-lazy').removeClass(slotRef).addClass('adunit');}}
var fetchAds=function(slotParameters,target){if(slotParameters&&($.inArray(page_type,slotParameters['supported_types'])>-1||slotParameters['supported_types'].length==0)){var sizes=slotParameters['sizes'];if(slotParameters['change_size']&&slotParameters['change_size'][page_type]){sizes=slotParameters['change_size'][page_type];}
var size_in_current_breakpoint=get_size_in_current_breakpoint(slotParameters['sizes']);if(size_in_current_breakpoint.length>0){lazy_load_ad({id:target,slotName:customAdUnitPath(slotParameters['slotUrl']),sizes:size_in_current_breakpoint,sizeMapping:get_size_mapping_from_sizes_array(sizes),targeting:slotParameters['targeting']});}}}
function reactToBatches(target,isInView){$this=target;var batch=$this.data("batch");var batches=$('[data-batch='+batch+']');if(isInView){var adsData=[];for(var i=0;i<batches.length;i++){var _this=$(batches[i]);var target=_this.attr('id')||_this.find('div.ad-container').attr('id');var slotTarget=_this.data('ad');var slotParameters=listOfSlots[target];var slotParameters=slotParameters?slotParameters:listOfSlots[slotTarget];if(!slotParameters){slotParameters=listOfSlots[_this.data('ad')]||listOfSlots[_this.parent('.ad-wrapper').data('ad')];}
if(slotParameters&&($.inArray(page_type,slotParameters['supported_types'])>-1||slotParameters['supported_types'].length==0)){var sizes=slotParameters['sizes'];if(slotParameters['change_size']&&slotParameters['change_size'][page_type]){sizes=slotParameters['change_size'][page_type];}
var size_in_current_breakpoint=get_size_in_current_breakpoint(slotParameters['sizes']);if(size_in_current_breakpoint.length>0){adsData.push({id:target,slotName:customAdUnitPath(slotParameters['slotUrl']),sizes:size_in_current_breakpoint,sizeMapping:get_size_mapping_from_sizes_array(sizes),targeting:slotParameters['targeting']});}}}
console.log('Ad Stack','Batch in view','(Batch '+batch+')',adsData);lazy_load_batch(adsData,batch);$(batches).off('inview').removeAttr('data-batch');}}
var loadAdsDefault=['sponsor-logo'];function setUpDefaultAds(){for(var i=0;i<loadAdsDefault.length;i++){$this=$('[data-ad='+loadAdsDefault[i]+']');if($this.length){var target=$this.find("div[id^='div-gpt-ad']").attr('id')||$this.attr('id');var slotRef=loadAdsDefault[i];var slotParameters=listOfSlots[slotRef];fetchAds(slotParameters,target);}}}
if(tmbi_ad_data.should_use_batch_SRA=="1"){setUpDefaultAds();jQuery('body').on('inview','[data-batch]',function(event,isInView){reactToBatches(jQuery(this),isInView)});$('.mobile_footer,[data-ad="non-contextual-video"]').attr('data-offset',LAZY_LOAD_INVIEW_OFFSET).on('inview',function(event,isInView){lazyCallback($(this),isInView);});}else{if(page_type==='card'||page_type=='article'){var slotRef=page_type=='card'?'slideshow-ad':'embedded-listicle-ads';window.load_slideshow_ad=function(id){var slotParameters=listOfSlots[slotRef];var size_in_current_breakpoint=get_size_in_current_breakpoint(slotParameters['sizes']);if(size_in_current_breakpoint.length>0){lazy_load_ad({id:id,slotName:customAdUnitPath(slotParameters['slotUrl']),sizes:size_in_current_breakpoint,sizeMapping:get_size_mapping_from_sizes_array(slotParameters['sizes']),targeting:slotParameters['targeting']});}}}
if(page_type=='article'){googletag.pubads().addEventListener('slotRenderEnded',function(event){if(event.slot.getSlotElementId()=="div-gpt-ad-1370019314148-21"){window.fourth=event.slot;}});}
loadAdsDefault.push('prearticle','mobile_prearticle','leaderboard');if(sessionStorage.leaderboard){var index=loadAdsDefault.indexOf('leaderboard');loadAdsDefault.splice(index,1);}else{sessionStorage.leaderboard=true;}
function setUpLazyloads(){if(page_type==='recipe'){if(parseInt(review_count)<3){$('.ad-sidebar-middle').removeClass('adunit-lazy');$('.ad-sidebar-middle').css('display','none');}
if(hasPrintUrl){loadAdsDefault=[];loadAdsDefault.push('print-recipe');$('.mobile_footer').removeClass('adunit-lazy');}}
setUpDefaultAds();var target=$('[class*=adunit-lazy]');target.attr('data-offset',LAZY_LOAD_INVIEW_OFFSET);var dynamicSelector='[class*=adunit-lazy][data-ad="home-rail-scroll"],[class*=adunit-lazy][data-ad="home-content-scroll"]';jQuery('[class*=adunit-lazy]:not([data-ad="category-scroll"],'+dynamicSelector+')').on('inview',function(event,isInView){lazyCallback(jQuery(this),isInView)});jQuery('body').on('inview','[class*=adunit-lazy][data-ad="category-scroll"],'+dynamicSelector+'',function(event,isInView){lazyCallback(jQuery(this),isInView)});}}
var IECallback=function(){if(typeof setupBatches!='undefined')
setupBatches();if(typeof setUpLazyloads!='undefined')
setUpLazyloads()}
var isIE=/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);if(isIE){console.log('Ad Stack','Warning: Legacy browsers need to wait for DOM Ready!');$(function(){IECallback();});}else{console.log('Ad Stack','Starting now');IECallback();}});});