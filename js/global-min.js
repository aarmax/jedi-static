var static_dir=document.location.protocol+"//static.jediholo.net/";var theme_dir="/wp-content/themes/jediholonet/";var timezone=-18000000;function slideToggle(a){jQuery("#"+a).slideToggle()}function initMainNav(){jQuery("#mainNav li").each(function(){jQuery(this).data("originalMarginRight",jQuery(this).css("marginRight"));jQuery(this).hover(function(){jQuery(this).clearQueue().animate({marginRight:"-3px"},300)},function(){jQuery(this).clearQueue().animate({marginRight:jQuery(this).data("originalMarginRight")},300)})})}function updateClock(){var e=new Date();var j=new Date(e.getTime()+e.getTimezoneOffset()*60000+timezone);var h=2000;var i=154;var g=i+((j.getFullYear()-h)*12)+j.getMonth();var a=j.getDate();if(a<10){a="0"+a}var b=j.getHours();if(b<10){b="0"+b}var c=j.getMinutes();if(c<10){c="0"+c}var f=j.getSeconds();if(f<10){f="0"+f}var d=g+"."+a+" ABY - "+b+c+"/"+f+" GST";jQuery("#clock").text(d);if((j.getHours()<6||j.getHours()>19)){jQuery(document.body).addClass("night")}else{jQuery(document.body).removeClass("night")}setTimeout(updateClock,1000)}function initClock(){updateClock()}function initMenu(){var a=jQuery.merge(jQuery(".navItem"),jQuery(".navList > li"));a.each(function(){var b=jQuery(this);var c=b.find("ul");c.css("display","block");c.css("opacity",0);b.data("help",c);b.hover(function(){jQuery(this).data("help").clearQueue().animate({opacity:1},300);jQuery("#clock").clearQueue().animate({opacity:0},300)},function(){jQuery(this).data("help").stop(true).animate({opacity:0},300);jQuery("#clock").clearQueue().delay(500).animate({opacity:1},300)})})}function initMiniTrackers(){jQuery(".widget_tracker").each(function(){var d=jQuery(this);var c=d.find("ul");var e=c.find("dl dd").text();var b=jQuery('<div class="refresh">');var a=jQuery('<a href="#">Refresh</a>');a.click(function(f){f.preventDefault();jQuery.ajax({url:theme_dir+"minitracker.php",type:"POST",data:{server:e},dataType:"html",beforeSend:function(h,g){b.addClass("spinning")},success:function(h,i,g){c.html(h)},error:function(g,i,h){c.html("<li>Error: "+i+"</li>")},complete:function(g,h){b.removeClass("spinning")}})});b.append(a);c.before(b);a.trigger("click")})}function initCollapsableGroups(){jQuery(".collapsableGroup").each(function(){var e=jQuery(this).find(".groupHeader");var c=jQuery(this).find(".groupContent");var d=jQuery('<img class="arrow" src="'+static_dir+'img/arrow_down.gif" />');var a=d.clone();var b=new Array(d,a);e.prepend(d);e.append(a);e.css("cursor","pointer");e.click(function(f){c.slideToggle(300,function(){var g=(jQuery(this).css("display")=="none")?static_dir+"img/arrow_down.gif":static_dir+"img/arrow_up.gif";jQuery(b).each(function(){this.attr("src",g)})})});c.hide()})}function initTabs(){jQuery(".tabContainer").each(function(){var a=jQuery(this);var d=a.find(".tabContent");var b=a.find(".tabList");var c=b.find("li a");var e=b.find('li a[href="'+window.location.hash+'"]');if(e.length==0){e=jQuery(c[0])}b.show();d.each(function(){jQuery(this).attr("id","tab_"+this.id)});c.click(function(h){h.preventDefault();var f=jQuery(this);var g=this.hash.replace("#","#tab_");d.filter(g).fadeIn();d.not(g).hide();c.removeClass("active");f.addClass("active")});e.trigger("click")})}function initNewWinLinks(){jQuery("#phpbb .postbody .content a").each(function(){jQuery(this).attr("target","_blank")})}function initAnnouncement(){var c='<strong>IMPORTANT</strong> &ndash; An recent JEDI Comport upgrade may impact the way you log in &ndash; <a href="https://comport.jediholo.net/viewtopic.php?f=116&t=13353">Click here for more information</a>';var a="warning";if(c){var b=jQuery('<div class="global-announcement global-announcement-'+a+'">'+c+"</div>");jQuery("#contentContainer #content #contentHeader").after(b)}}jQuery(document).ready(function(){initMainNav();initClock();initMenu();initMiniTrackers();initCollapsableGroups();initTabs();initNewWinLinks();initAnnouncement()});