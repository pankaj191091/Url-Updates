jQuery(window).on('load',function(){var $=jQuery;$wrapper=false;if($("body").hasClass("single-recipe")){$wrapper=$('.recipe-single-container');$cardWidth=$('.recipe-image-and-meta-sidebar__featured-image').innerWidth();$selectors='.recipe-image-and-meta-sidebar__featured-container > img';$container='recipe-image-and-meta-sidebar__featured-container';}else if($("body").hasClass("single-collection")){$wrapper=$('#collection-wrapper');$cardWidth=$('.listicle-page').innerWidth();$selectors='.listicle-page figure > img, .listicle-page p > img, .listicle-page > img,  .listicle-page .listicle-card-image-wrapper > img';$container='image-wrapper';}
if(!$wrapper){return;}
blurred_image=function(){var max_image_stretch=80;$($selectors).each(function(){var card_image=new Image();card_image.src=$(this).attr('src');var _this=this;card_image.onload=function(){if($cardWidth>(_this.naturalWidth+max_image_stretch)){$image=$(_this).attr('src');$image_parent=$(_this).parent();if($image_parent.hasClass('listicle-page')){$(_this).wrap("<p></p>");}
$image_parent=$(_this).parent();$(_this).attr("style","display: block");if(!$image_parent.hasClass('blurred-overlay')){$image_parent.attr("style","min-width: 300px; padding: 0 !important");$image_parent.addClass($container+' blurred-overlay');$image_parent.before('<div class="blurred-background"></div>');$image_parent.siblings('.blurred-background').css('background-image','url( '+$image+' )').css('width','calc(100% + 40px)').css('margin','0 -20px 20px');;}}
else{$image_parent=$(_this).parent();if($image_parent.is("p")){if($image_parent.attr('class')===undefined){$image_parent.addClass("listicle-image-wrapper");}}
$(_this).attr("style","max-width: 100% !important");}}});}
blurred_image();if($wrapper.find('.blurred-background').length!==0){$wrapper.after("<svg class='blursvg' style='display:none' viewBox='0 0 800 800'>\n"+
"  <filter id='sharpBlur'>\n"+
"    <feGaussianBlur stdDeviation='7'></feGaussianBlur>\n"+
"    <feColorMatrix type='matrix' values='1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0'></feColorMatrix>\n"+
"    <feComposite in2='SourceGraphic' operator='in'></feComposite>\n"+
"  </filter>\n"+
"</svg>");}});