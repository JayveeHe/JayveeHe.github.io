require([],function(){var i=false;var e=function(){require(["/js/mobile.js"],function(e){e.init();i=true})};var n=false;var a=function(){require(["/js/pc.js"],function(i){i.init();n=true})};var r={versions:function(){var i=window.navigator.userAgent;return{trident:i.indexOf("Trident")>-1,presto:i.indexOf("Presto")>-1,webKit:i.indexOf("AppleWebKit")>-1,gecko:i.indexOf("Gecko")>-1&&i.indexOf("KHTML")==-1,mobile:!!i.match(/AppleWebKit.*Mobile.*/),ios:!!i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:i.indexOf("Android")>-1||i.indexOf("Linux")>-1,iPhone:i.indexOf("iPhone")>-1||i.indexOf("Mac")>-1,iPad:i.indexOf("iPad")>-1,webApp:i.indexOf("Safari")==-1,weixin:i.indexOf("MicroMessenger")==-1}}()};$(window).bind("resize",function(){if(i&&n){$(window).unbind("resize");return}var r=$(window).width();if(r>=700){a()}else{e()}});if(r.versions.mobile===true||$(window).width()<700){e()}else{a()}if(yiliaConfig.fancybox===true){require(["/fancybox/jquery.fancybox.js"],function(i){var e=$(".isFancy");if(e.length!=0){var n=$(".article-inner img");for(var a=0,r=n.length;a<r;a++){var t=n.eq(a).attr("src");var s=n.eq(a).attr("alt");n.eq(a).replaceWith("<a href='"+t+"' title='"+s+"' rel='fancy-group' class='fancy-ctn fancybox'><img src='"+t+"' title='"+s+"'></a>")}$(".article-inner .fancy-ctn").fancybox()}})}if(yiliaConfig.animate===true){require(["/js/jquery.lazyload.js"],function(){$(".js-avatar").attr("src",$(".js-avatar").attr("lazy-src"));$(".js-avatar")[0].onload=function(){$(".js-avatar").addClass("show")}});if(yiliaConfig.isHome===true){function t(){$(".article").each(function(){if($(this).offset().top<=$(window).scrollTop()+$(window).height()&&!$(this).hasClass("show")){$(this).removeClass("hidden").addClass("show");$(this).addClass("is-hiddened")}else{if(!$(this).hasClass("is-hiddened")){$(this).addClass("hidden")}}})}$(window).on("scroll",function(){t()});t()}}if(yiliaConfig.open_in_new==true){$(".article a[href]").attr("target","_blank")}});