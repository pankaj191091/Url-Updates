(function($){function replaceHashUri(){var url=window.location.href;url=url.replace(/\/?$/,'/');if(url.indexOf("?")!=-1){var query_parameters=url.substr(url.indexOf("?")-1);}
var match=url.match(/#(\d+)/);if(match!=null){if(digitalData.page.theme=='tmbi-theme-v3'){if(!url.match('/view-all/')){if(query_parameters){var redirection_url=url.replace(query_parameters,'/view-all');redirection_url=redirection_url+query_parameters;url=redirection_url.replace('#'+match[1],'/#card-'+match[1]).replace('//'+match[1],'/#card-'+match[1]);}else{url=url.replace('#'+match[1],'/view-all/#card-'+match[1]).replace('//'+match[1],'/view-all/#card-'+match[1]);}}}else{url=url.replace('#'+match[1],'/'+match[1]).replace('//'+match[1],'/'+match[1]);}
window.location.replace(url);}}
replaceHashUri();})(jQuery);