jQuery(document).ready(function($){"use strict";function stick_element($element,offset,sticky_class){let width_in_pixels=$element.css('box-sizing')==='border-box'?$element.outerWidth():$element.width();$element.css({position:'fixed',top:offset,width:width_in_pixels+'px'}).addClass(sticky_class);$element.trigger('sticky_kit:stick');return true;}
function unstick_element($element,sticky_class){$element.css({position:'',top:'',width:'',bottom:''}).removeClass(sticky_class);$element.trigger('sticky_kit:unstick');return false;}
function bottom_element($element,parent,padding_bottom){if(parent.css('position')==='static'){parent.css('position','relative');}
$element.css({position:'absolute',bottom:padding_bottom,top:''}).trigger('sticky_kit:bottom');return true;}
function unbottom_element($element,offset){$element.css({position:'fixed',bottom:'',top:offset}).trigger('sticky_kit:unbottom');return false;}
function should_recalc(delay){if(should_recalc.counter==='undefined'){should_recalc.counter=0;}
should_recalc.counter+=1;if(delay&&should_recalc.counter>=delay){should_recalc.counter=0;return true;}}
$.fn.sticky=function(opts){opts=opts||{};let win=$(window),doc=$(document),inner_scrolling=opts.inner_scrolling===undefined?true:opts.inner_scrolling,enable_bottoming=opts.bottoming===undefined?true:opts.enable_bottoming,offset_top=opts.offset_top||0,parent_selector=opts.parent,recalc_every=opts.recalc_every,sticky_class=opts.sticky_class===undefined?'is_stuck':opts.sticky_class,duration=opts.duration||600;let fn=function(elm){let bottomed=false,fixed=false,last_pos=null,last_scroll_height=doc.height(),offset=offset_top,parent=elm.parent(),padding_bottom=0,parent_top=0,parent_height=0,top=0,height=0;if(elm.data("sticky_kit")){return;}
elm.data("sticky_kit",true);if(parent_selector){parent=parent.closest(parent_selector);}
if(!parent.length){throw "failed to find stick parent";}
function recalc(){if(duration){parent.height(elm.height()+duration);}
let padding_top,restore;last_scroll_height=doc.height();padding_top=parseInt(parent.css("padding-top"),10);padding_bottom=parseInt(parent.css("padding-bottom"),10);parent_top=parent.offset().top+padding_top;parent_height=parent.height();if(fixed){fixed=unstick_element(elm,sticky_class);bottomed=false;restore=true;}
top=elm.offset().top-(parseInt(elm.css("margin-top"),10)||0)-offset_top;height=elm.outerHeight(true);if(restore){return tick();}}
recalc();if(height===parent_height){return;}
function tick(){let scroll=win.scrollTop(),delta=(last_pos!==null)?scroll-last_pos:0,will_bottom=enable_bottoming&&(scroll+height+offset>parent_height+parent_top),must_recalc=doc.height()!==last_scroll_height;if(should_recalc(recalc_every)||must_recalc){recalc();}
last_pos=scroll;let should_unbottom=fixed&&enable_bottoming&&bottomed&&!will_bottom;let should_unstick=fixed&&scroll<top;let should_adjust_for_inner_scrolling=fixed&&!bottomed&&inner_scrolling;let should_stick=!fixed&&scroll>top;let should_bottom=fixed&&enable_bottoming&&!bottomed&&will_bottom;if(should_stick){fixed=stick_element(elm,offset);}
if(should_unstick){offset=offset_top;fixed=unstick_element(elm,sticky_class);}
if(should_bottom){bottomed=bottom_element(elm,parent,padding_bottom);}
if(should_unbottom){bottomed=unbottom_element(elm,offset);}
if(should_adjust_for_inner_scrolling){let win_height=win.height();if(height+offset_top>win_height){offset-=delta;offset=Math.max(win_height-height,offset);offset=Math.min(offset_top,offset);if(fixed){elm.css('top',offset+"px");}}}}
function recalc_and_tick(){recalc();return tick();}
win.on("touchmove",tick);win.on("scroll",tick);win.on("resize",recalc_and_tick);$(document.body).on("sticky_kit:recalc",recalc_and_tick);return setTimeout(tick,0);};$(this).each(function(ignore,element){fn($(element));});return this;};});