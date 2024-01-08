jQuery(function(){


	$(document).ready(function(){
		 
	});


});

/*!------- Cookie bar JS -------*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,r=e.Cookies=t();r.noConflict=function(){return e.Cookies=n,r}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var t={read:function(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};return function n(r,o){function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),n=r.write(n,t);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n+c}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],o={},i=0;i<n.length;i++){var c=n[i].split("="),u=c.slice(1).join("=");'"'===u[0]&&(u=u.slice(1,-1));try{var f=t.read(c[0]);if(o[f]=r.read(u,f),e===f)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){i(t,"",e({},n,{expires:-1}))},withAttributes:function(t){return n(this.converter,e({},this.attributes,t))},withConverter:function(t){return n(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(r)}})}(t,{path:"/"})});
/*------- Cookie bar JS Ends -------*/
/*------- Scroll Out JS ---------*/
var ScrollOut=function(){"use strict"
function S(e,t,n){return e<t?t:n<e?n:e}function T(e){return+(0<e)-+(e<0)}var q,t={}
function n(e){return"-"+e[0].toLowerCase()}function d(e){return t[e]||(t[e]=e.replace(/([A-Z])/g,n))}function v(e,t){return e&&0!==e.length?e.nodeName?[e]:[].slice.call(e[0].nodeName?e:(t||document.documentElement).querySelectorAll(e)):[]}function h(e,t){for(var n in t)n.indexOf("_")&&e.setAttribute("data-"+d(n),t[n])}var z=[]
function e(){q=0,z.slice().forEach(function(e){return e()}),F()}function F(){!q&&z.length&&(q=requestAnimationFrame(e))}function N(e,t,n,r){return"function"==typeof e?e(t,n,r):e}function m(){}return function(L){var i,P,_,H,o=(L=L||{}).onChange||m,l=L.onHidden||m,c=L.onShown||m,s=L.onScroll||m,f=L.cssProps?(i=L.cssProps,function(e,t){for(var n in t)n.indexOf("_")&&(!0===i||i[n])&&e.style.setProperty("--"+d(n),(r=t[n],Math.round(1e4*r)/1e4))
var r}):m,e=L.scrollingElement,A=e?v(e)[0]:window,W=e?v(e)[0]:document.documentElement,x=!1,O={},y=[]
function t(){y=v(L.targets||"[data-scroll]",v(L.scope||W)[0]).map(function(e){return{element:e}})}function n(){var e=W.clientWidth,t=W.clientHeight,n=T(-P+(P=W.scrollLeft||window.pageXOffset)),r=T(-_+(_=W.scrollTop||window.pageYOffset)),i=W.scrollLeft/(W.scrollWidth-e||1),o=W.scrollTop/(W.scrollHeight-t||1)
x=x||O.scrollDirX!==n||O.scrollDirY!==r||O.scrollPercentX!==i||O.scrollPercentY!==o,O.scrollDirX=n,O.scrollDirY=r,O.scrollPercentX=i,O.scrollPercentY=o
for(var l,c=!1,s=0;s<y.length;s++){for(var f=y[s],u=f.element,a=u,d=0,v=0;d+=a.offsetLeft,v+=a.offsetTop,(a=a.offsetParent)&&a!==A;);var h=u.clientHeight||u.offsetHeight||0,m=u.clientWidth||u.offsetWidth||0,g=(S(d+m,P,P+e)-S(d,P,P+e))/m,p=(S(v+h,_,_+t)-S(v,_,_+t))/h,w=1===g?0:T(d-P),X=1===p?0:T(v-_),Y=S((P-(m/2+d-e/2))/(e/2),-1,1),b=S((_-(h/2+v-t/2))/(t/2),-1,1),D=void 0
D=L.offset?N(L.offset,u,f,W)>_?0:1:(N(L.threshold,u,f,W)||0)<g*p?1:0
var E=f.visible!==D;(f._changed||E||f.visibleX!==g||f.visibleY!==p||f.index!==s||f.elementHeight!==h||f.elementWidth!==m||f.offsetX!==d||f.offsetY!==v||f.intersectX!=f.intersectX||f.intersectY!=f.intersectY||f.viewportX!==Y||f.viewportY!==b)&&(c=!0,f._changed=!0,f._visibleChanged=E,f.visible=D,f.elementHeight=h,f.elementWidth=m,f.index=s,f.offsetX=d,f.offsetY=v,f.visibleX=g,f.visibleY=p,f.intersectX=w,f.intersectY=X,f.viewportX=Y,f.viewportY=b,f.visible=D)}H||!x&&!c||(l=C,z.push(l),F(),H=function(){!(z=z.filter(function(e){return e!==l})).length&&q&&(cancelAnimationFrame(q),q=0)})}function C(){u(),x&&(x=!1,h(W,{scrollDirX:O.scrollDirX,scrollDirY:O.scrollDirY}),f(W,O),s(W,O,y))
for(var e=y.length-1;-1<e;e--){var t=y[e],n=t.element,r=t.visible,i=n.hasAttribute("scrollout-once")||!1
t._changed&&(t._changed=!1,f(n,t)),t._visibleChanged&&(h(n,{scroll:r?"in":"out"}),o(n,t,W),(r?c:l)(n,t,W)),r&&(L.once||i)&&y.splice(e,1)}}function u(){H&&(H(),H=void 0)}t(),n(),C()
var r=0,a=function(){r=r||setTimeout(function(){r=0,n()},0)}
return window.addEventListener("resize",a),A.addEventListener("scroll",a),{index:t,update:n,teardown:function(){u(),window.removeEventListener("resize",a),A.removeEventListener("scroll",a)}}}}()
/*------- Scroll Out JS Ends ---------*/

     document.addEventListener("DOMContentLoaded", function() {
      var lazyImages;
      if ("IntersectionObserver" in window) {
        lazyImages = document.querySelectorAll(".locationsList .featuredImages img");
        var imageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              var image = entry.target;
              image.src = image.dataset.src;
              image.classList.add("lazy");
              imageObserver.unobserve(image);
            }
          });
        });

        lazyImages.forEach(function(image) {
          imageObserver.observe(image);
        });
      } else {
        var lazyloadTimeout;
        lazyImages = document.querySelectorAll(".locationsList .featuredImages img");

        function lazyload () {
          if(lazyloadTimeout) {
            clearTimeout(lazyloadTimeout);
          }

          lazyloadTimeout = setTimeout(function() {
            var scrollTop = window.pageYOffset;
            lazyImages.forEach(function(img) {
                if(img.offsetTop < (window.innerHeight + scrollTop)) {
                  img.src = img.dataset.src;
                  img.classList.remove('lazy');
                }
            });
            if(lazyloadImages.length == 0) {
              document.removeEventListener("scroll", lazyload);
            }
          }, 15);
        }

        document.addEventListener("scroll", lazyload);
      }
    });
    

jQuery(function ($) { 

    /*---- Welcome Screen ---*/
    if( Cookies.get('welcomeScreenVisibility') != 'hide') { 

        if( $(window).width() >= 1280 ) {
            $('.welcomeScreen').addClass('isShow');
        }else {
            $('body').removeClass('noScroll hideHome');
        }
    }

    setTimeout(function() {
        $('.welcomeScreen .media').addClass('in');
    }, 100); 
    
    // $('.welcomeScreen .media').click(function() {
    $('.click-to-explore').click(function() {
        $('.welcomeScreen').addClass('hideWelcomeScreen').fadeOut('1200');
        
        Cookies.set('welcomeScreenVisibility', 'hide', { expires: 1, sameSite: 'strict' }); 
        
        setTimeout(function() {
            $('body.home').removeClass('noScroll hideHome');    
        },200);

        return false;
    });
    /*---- Welcome Screen Ends ---*/
    
    if( $('.site-main section:first-child').hasClass('heroBanner') ){
        $('.site-header').addClass('lightSkin');
    }
    
    $('.hotelPosts .hotel, .card, .tourCard').click( function(){
        window.location = $(this).find('a').attr('href');
    });
    
    $('.learnMore > span').each(function(){
        $(this).attr('data-text', $(this).text()); 
    });
    
    $('.deStats').each(function(){

        if( ($(this).find('.leftPan').length == 0) && ($(this).find('.stat').length == 0) ) {
            $(this).hide();
        }

    });

    const gravityFormResets = () => {
        $('.gf_login_form #input_1').attr('placeholder','Email*');
        $('.gf_login_form #input_2').attr('placeholder','Password*');
    } 

    function mainHeightAdj(){
        
        if($(window).width() <= 991){
            var headHeight = $('.site-header').outerHeight();
            var footHeight = $('.site-footer').outerHeight();
            var intFrameHeight = $(window).height();
            $('.site-main').css('min-height', intFrameHeight - ( headHeight + footHeight) );
        }else {
           $('.site-main').removeAttr('style'); 
        }
    }

    mainHeightAdj();

    setTimeout(function(){
        gravityFormResets();
    },1200);
    

    $(document).on('gform_post_render', function(){
        gravityFormResets();
    }); 

    $(document).on('.themeSubmit', function(){
        gravityFormResets();
    });
    
    var headerHight = $('.site-header').outerHeight();

    /*-- OS Classes --*/
    var OSName="unknownOS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="macOS";
    if (navigator.appVersion.indexOf("X11")!=-1) OSName="unix";
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="linux";
    $('body').addClass(OSName);
    
    function smoothScroll() {
       ScrollOut({ targets: '.anim', onShown(el) { el.classList.add("in"); } });
        
       ScrollOut({ targets: '.anim.repeat', onShown(el) { el.classList.add("in"); el.classList.remove("out"); threshold: .3; }, onHidden(el) {
           el.classList.remove("in"); 
           el.classList.add("out"); 
       } });
    }
    
    /*--- Number Animation ---*/
    
    function numberCounter(elem) {
        var number = elem.textContent.replace( /^\D+/g, '');
        var counter = 0;
        var time = 1200; // in ms
        var speed =  time/number < 500 ? time/number : 500;
        
        elem.textContent = counter;
        function myLoop() {          
          setTimeout(function() {   
            elem.textContent = counter;  
            counter++;
            if (counter <= number) {           
                myLoop(); 
            }
          }, speed) }

        myLoop(); 
        
    };
    
    ScrollOut({ targets: '.numCounter', 
    onShown(el){
        el.classList.add("in"); 
        numberCounter(el);
    },threshold:.8,
	once: true });

    /*--- Number Animation Ends ---*/


    ScrollOut({ targets: '.locationsList, .termsItemList', 
    onShown(el){
        $('.locationsList .isHover, .termsItemList .isHover').find("img").removeAttr('loading');
    },
    threshold:.1,
    once: true });
    
    $('body').on('mouseenter', '.termsItemList a', function(){
        var targetClass = '.'+$(this).attr('data-slug');
        
        if( $(this).parents('.termsItemList').hasClass('destinationsAll') ) {
            $(this).parents('.innerWrap').find(targetClass).addClass('in isHover').siblings().removeClass('isHover in');
        } else {
            $(this).parents('body').find(targetClass).addClass('in isHover').siblings().removeClass('isHover in');
        }
    });
    
    /*---------- easyScroll Scrolling -------------*/
        function easyScroll(target){
        var amount = $(target).offset();
        if(amount){ $('html,body').animate({scrollTop: amount.top }, 500); }
        }
    
        $('#primary-menu a, .ctaLink').on('click', function(event){ 
            $(this).attr('target');
            if( $(this).attr('href').startsWith('#') || ( window.location.href.indexOf(`${location.href}#`) > -1  ) ) {
                event.preventDefault(); 
                easyScroll(this.hash);    
            }
        });
        if(window.location.hash) { easyScroll(location.hash); }
    /*---------- easyScroll Ends -------------*/
	
	/*---------- Team popup  -------------*/
    $(document).on('keyup',function(e) {
        if (e.keyCode == 27 || e.key === 'Escape') { $('.backbioTrig').trigger('click'); $('.menuOpen .menuToggle').trigger('click'); }
    });
    

    $('.readBioTrig').click(function(){
        $(this).siblings('.popup').addClass('isOpen');
        $('body').addClass('noScroll');
    });

    $('.backbioTrig, .killPopup').click(function(){
        $('body').removeClass('noScroll');
        $('.popup').removeClass('isOpen');
    });
    /*---------- Team popup Ends -------------*/

        /*-------- stickyHead --------*/
        $siteheaderHeight = $('.site-header').outerHeight(); 
        function stickyHead(){
            var lastScrollTop = 0;
            
            $(window).scroll(function(event){
               var st = $(this).scrollTop();
               if (st >= lastScrollTop){
                   $('body').addClass('downScroll').removeClass('upScroll');
                } else {
                   $('body').addClass('upScroll').removeClass('downScroll');
                }

                // if((st >= $('.site-header').outerHeight()) && (st >= $(window).height()/2) ){
                
                if( st >= 50 ){ 
                   $('.site-header').addClass('sticky');
                } else {
                    $('.site-header').removeClass('sticky');
                }
               lastScrollTop = st;
            });
            $('body').hasClass('user-activation-home') ? $('.site-header').removeClass('lightSkin') : '';

        }
        /*-------- stickyHead Ends --------*/
    
        $('document').ready(function(){
            stickyHead(); 
            easyScroll(); smoothScroll();

            window.scroll(0, 1);


            if(!$('body').hasClass('home')) {
                $('body').removeClass('noScroll hideHome');
            };
			
			
            var teamSildes = new Swiper ('.teamSildes', {
             spaceBetween: 16, slidesPerView: 'auto', direction: 'horizontal', loop: true, autoplay: { disableOnInteraction: false }, freeMode: true, speed: 700,
            navigation: { nextEl: '.swiperNext', prevEl: '.swiperPrev', },
            pagination: { el: '.progressar', type: 'progressbar' },
            breakpoints: {
              340: { slidesPerView: 1.25, }, 
              550: { spaceBetween: 24, slidesPerView: 1.75, }, 
              615: { slidesPerView: 2.05, },
              768: { slidesPerView: 2.55, },
              1350: { spaceBetween: 34, slidesPerView: 3.25, },
              1500: { spaceBetween: 42, },
              1800: { spaceBetween: 76, },
              2000: { slidesPerView: 3.75, },
              2200: { slidesPerView: 4.15, },
              2500: { slidesPerView:4.75, }, 
            },
        }); 
		 
        var imageGallery = new Swiper ('.imageGallery, .galleryImgs', {
          loop: true,
          autoplay: { disableOnInteraction: false },
          freeMode: true, speed: 300, spaceBetween: 16, slidesPerView: 'auto', 
            navigation: { nextEl: '.arrowIcon.next', prevEl: '.arrowIcon.prev',
          },pagination: { el: '.fractionNav', type: 'fraction', formatFractionCurrent: function (number) {
                return number; }
          },
        });
            
        var featuredHotelsSlider = new Swiper ('.featuredHotelsSlider', {
			 loop: true, slidesPerView: 'auto', speed: 30000, spaceBetween: 18,
            autoplay: { enabled: true, delay: 0, disableOnInteraction: true, pauseOnMouseEnter: true, reverseDirection: false, stopOnLastSlide:true, },  
            freeMode: { enabled: true, },
             
            breakpoints: {
              2600: { spaceBetween: 30, }
            }
        });
 
		$('.swiper-container').on('mouseleave', function(e){
            featuredHotelsSlider.autoplay.start();
			
			setTimeout(function(){
				featuredHotelsSlider.autoplay.start();
			},300);
			
			setTimeout(function(){
				featuredHotelsSlider.autoplay.start(); 
			},500);
			
			setTimeout(function(){
				featuredHotelsSlider.autoplay.start();
			},1000);
			
        });
		 
		$('.swiper-container').on('mouseenter', function(e){
            featuredHotelsSlider.autoplay.stop(); 
        });
            
       $('.featuredHotelsSlider').click( function(){
            featuredHotelsSlider.autoplay.start(); 
       });


        var reviewsSlider = new Swiper ('.reviewsSlider', {
            loop: true, freeMode: false,
            autoplay: { delay: .1, disableOnInteraction: false
            },
            speed: 30000, slidesPerView: 'auto', direction: 'horizontal',
        });        
        
        $(".mouseTrail").mouseenter(function(mpos) { 
            $(this).find('.mouseDrag').show();
        });

        $(".mouseTrail").mousemove(function(mpos) {
            var parentDistY = $(this).offset().top;
            var parentDistx = $(this).offset().left;
            var xcord = mpos.pageX - parentDistx;
            var ycord = mpos.pageY - parentDistY;

            if(ycord < -50 || ycord > $(this).outerHeight() + 50 
            || xcord < -50 || xcord > $(this).outerWidth() + 50 ) {
                $(this).find('.mouseDrag').hide();
            }else {
                $(this).find('.mouseDrag').css('top',ycord).css('left',xcord).show();
            }
        }); 

        $(".mouseTrail").mouseleave(function(){
            $(this).find('.mouseDrag').hide();
        });
            
        });
        
        $(window).scroll(function(){
            smoothScroll();
        });

        function boxMediaDim(){
         $('.videoFrame .imgWrap').each(function(){
            $(this).height($(this).outerWidth());
         });
        }
        
        boxMediaDim();        

        $(window).resize( function(){
            boxMediaDim(); mainHeightAdj();
        });
    
        $('.imageGallery .galleryTrig').on('click', function(event) {
		event.preventDefault();
            var gallery = $(this).attr('href');
            $(gallery).magnificPopup({ delegate: 'li', type:'image',
                gallery: { tCounter: '<span class="mfp-counter">%curr%/%total%</span>', enabled: true }
            }).magnificPopup('open');
        });
    
    $("body .popup-trigger").magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
      iframe: {
        patterns: {
            youtube: {
                index: 'youtube.com',
                id: 'v=',
                src: 'https://www.youtube.com/embed/%id%?rel=0&enablejsapi=1&autoplay=1'
            }}
      },
    }).click( function() {
        $('body').addClass('noScroll');
    });

    
    $('body').on('click', '.mfp-close, .mfp-fade', function (e){
        $('body').removeClass('noScroll');
    });
    
    /*--------- Numeric Animation ------------*/
    $('body').on( 'click' , '.locationsList .closeTrig' , function() {
        
        $(this).parents('.expandedView').slideUp('1300');
        
        setTimeout(function(){ 
            $('.expandedView').remove();
        },100);
        
        $('.locationsList .country').removeClass('active');                    
    });
    
    $('.locationsList .country > a').on('click',function(e){
            
        if( !$(this).parents('.country').hasClass('active') ) {
            
        e.preventDefault();
        $(this).parent('li').addClass('active').siblings().removeClass('active');
         $(this).parents('ul').children('li.expandedView').remove();
        var itemCount = $(this).parents('ul').children('li').length;
        var deskcount = 3;
        var ipadcount = 3;
        var mobcount = 2;
        var winwidth = $(window).width();
        var dtindex = $(this).parent('li').attr('data-index');
        
        var placeIndex;
        if(winwidth > 1023) {
            placeIndex = findIndex(dtindex,parseInt(deskcount));
        } else if(winwidth > 767 && winwidth < 1024){
            placeIndex = findIndex(dtindex,parseInt(ipadcount));
        } else {
            placeIndex = findIndex(dtindex,parseInt(mobcount));
        }
        
        var dataAppend = $(this).next('.citiesList').html();
            
        dataAppend='<li class="country width100 expandedView">'+dataAppend+'</li>';
        
        if(placeIndex > itemCount){
            placeIndex = itemCount
        }
        $(dataAppend).insertAfter('li.country:nth-child('+placeIndex+')');
        
        function findIndex(dtindexid, devicecount){
            var findex = parseInt(dtindexid);
            for(var i=0; i<devicecount; i++ ){
                findex = parseInt(dtindexid++);
                if(parseInt(findex) % parseInt(devicecount) == 0){
                    dpindexdesk=findex; break;
                }
            }
            return dpindexdesk;
        }
    
        } else {
			 setTimeout(function(){ 
				$('.expandedView').remove();
			},100);

			$('.locationsList .country').removeClass('active'); 
		}
    
     $(this).parents('ul').find('.expandedView').slideDown('1200');
        
    });
    
    /*--------- Numeric Animation Ends ------------*/
    var controller = new ScrollMagic.Controller();
 
        // History Timeline
        var gtimeline = new ScrollMagic.Scene({triggerElement: "#hstr_timeline", triggerHook:0})
        .setPin(".timeline.only_content")
        .addTo(controller);
        
        var gtimelinestop = new ScrollMagic.Scene({triggerElement: ".site-footer", triggerHook:1.3,})
        .addTo(controller)
        .setClassToggle(".timeline.only_content", "hideme")
        .on("enter leave");
        
        var i;
        for(i=1;i<5;i++){
        
            var hg = $('#historyImgs'+i).innerHeight();
            new ScrollMagic.Scene({triggerElement: "#historyImgs"+i, triggerHook:0.5, duration: hg })
            .addTo(controller)
            .setClassToggle("#historyItem"+i, "showme")
            .on("enter leave");

        }

        // History Timeline Ends
    
    if( $(window).width() >= 1280 ) {
        
        new ScrollMagic.Scene({triggerElement: ".whoWeare", triggerHook: 0.3, duration: "80%"})
        .setTween(".whoWeare", { 'background-color': '#E5DCD2' })
        .addTo(controller);
		
		 new ScrollMagic.Scene({triggerElement: ".deStats", triggerHook: 0.6, duration: "45%"})
        .setTween(".deStats + .termsItemList", { 'background-color': '#f5f2ef' })
        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".aboutBanner .textContent", triggerHook: 0.8, duration: "100%"})
        .setTween(".aboutBanner", { 'background-color': '#F3F0ED' })
        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".deStats", triggerHook: 0.6, duration: "45%"})
        .setTween(".heroBanner", { 'background-color': '#f5f2ef' })
        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".deStats", triggerHook: 0.6, duration: "45%"})
        .setTween(".deStats", { 'background-color': '#f5f2ef' })
        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".locationsList", triggerHook: 0.6, duration: "60%"})
        .setTween(".locationsList", { 'background-color': '#f5f2ef' })
        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".featuredCta.boxed.whiteBg", triggerHook: 0.6, duration: "70%"})
        .setTween(".featuredCta.boxed.whiteBg", { 'background-color': '#fff' })
        .addTo(controller);
        
         new ScrollMagic.Scene({triggerElement: ".featuredCta.boxed.skin", triggerHook: 0.6, duration: "70%"})
         .setTween(".featuredCta.boxed.skin", { 'background-color': '#f5f2ef' })
        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".darkskin", triggerHook: .3, duration: "30%"})
         .setTween(".darkskin", { 'background-color': '#1B1A1A' })
        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".darkskin", triggerHook: .3, duration: "30%"})
         .setTween(".darkskin .textContent", { 'filter': 'none' })
        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".transferInfo", triggerHook: 0.4, duration: "50%"})
         .setTween(".transferInfo .rightPan .imgWrap svg", { 'fill': '#f5f2ef' })
        .addTo(controller);

        new ScrollMagic.Scene({triggerElement: ".transferInfo", triggerHook: 0.4, duration: "50%"})
         .setTween(".transferInfo", { 'background-color': '#f5f2ef' })
        .addTo(controller);

    }
     
    $('.search-results .site-header').removeClass('lightSkin');
       
    function swipeCarousel() {
        var durationDelay = $('.swiper-container .swiper-wrapper').css('transition-duration');
        var transformPar = $('.swiper-container .swiper-wrapper').css('transform');
        $('.swiper-wrapper').css('transform','0');
        if( durationDelay == '0s' ) {
            $('.swiper-container .swiper-wrapper').css('transition-duration','.0001s');
            $('.swiper-container .swiper-wrapper').css('transform');
            $('.swiper-container .swiper-wrapper').css('transform',transformPar);
        }
     }

    function myAnimation(scount){
      $('.ourPromise .inWrap').css('transform','translateY('+scount+'px)');
    }

});