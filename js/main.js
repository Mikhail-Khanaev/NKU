function ibg(){let e=document.querySelectorAll(".ibg");for(var t=0;t<e.length;t++)e[t].querySelector("img")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}ibg();const swiperIntro=new Swiper(".swiper-intro",{loop:!0,navigation:{nextEl:".swiper-intro .swiper-button-next",prevEl:".swiper-intro .swiper-button-prev"},pagination:{el:".swiper-intro .swiper-pagination",clickable:!0},slidesPerGroup:1,slidesPerView:1.7,spaceBetween:spaceBetween=30,centeredSlides:centeredSlides=!0}),isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};if(isMobile.any()){document.body.classList.add("touch");let e=document.querySelectorAll(".menu__arrow");if(e.length>0)for(let t=0;t<e.length;t++){const n=e[t];n.addEventListener("click",(function(e){n.parentElement.classList.toggle("active")}))}}else document.body.classList.add("pc");const iconMenu=document.querySelector(".menu__icon"),menuBody=document.querySelector(".menu__body"),menuLogo=document.querySelector(".header__logo");iconMenu&&iconMenu.addEventListener("click",(function(e){document.body.classList.toggle("lock"),iconMenu.classList.toggle("active"),menuBody.classList.toggle("active"),menuLogo.classList.toggle("active")}));const menuLinks=document.querySelectorAll(".menu__link[data-goto]");if(menuLinks.length>0){for(let e=0;e<menuLinks.length;e++){menuLinks[e].addEventListener("click",onMenuClick)}function onMenuClick(e){const t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){const n=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight;iconMenu.classList.contains("active")&&(document.body.classList.remove("lock"),iconMenu.classList.remove("active"),menuBody.classList.remove("active")),window.scrollTo({top:n,behavior:"smooth"}),e.preventDefault()}}}const popupLinks=document.querySelectorAll(".popup-link"),body=document.querySelector("body"),lockPadding=document.querySelectorAll(".lock-padding");let unlock=!0;const timeout=500;if(popupLinks.length>0)for(let e=0;e<popupLinks.length;e++){const t=popupLinks[e];t.addEventListener("click",(function(e){const n=t.getAttribute("href").replace("#","");popupOpen(document.getElementById(n)),e.preventDefault()}))}const popupCloseIcon=document.querySelectorAll(".close-popup");if(popupCloseIcon.length>0)for(let e=0;e<popupCloseIcon.length;e++){const t=popupCloseIcon[e];t.addEventListener("click",(function(e){popupClose(t.closest(".popup")),e.preventDefault()}))}function popupOpen(e){if(e&&unlock){const t=document.querySelector(".popup.open");t?popupClose(t,!1):bodyLock(),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||popupClose(e.target.closest(".popup"))}))}}function popupClose(e,t=!0){unlock&&(e.classList.remove("open"),t&&bodyUnLock())}function bodyLock(){const e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";if(lockPadding.length>0)for(let t=0;t<lockPadding.length;t++){lockPadding[t].style.paddingRight=e}body.style.paddingRight=e,body.classList.add("lock"),unlock=!1,setTimeout((function(){unlock=!0}),500)}function bodyUnLock(){setTimeout((function(){if(lockPadding.length>0)for(let e=0;e<lockPadding.length;e++){lockPadding[e].style.paddingRight="0px"}body.style.paddingRight="0px",body.classList.remove("lock")}),500),unlock=!1,setTimeout((function(){unlock=!0}),500)}document.addEventListener("keydown",(function(e){if(27===e.which){popupClose(document.querySelector(".popup.open"))}}));const animItems=document.querySelectorAll(".anim-item");if(animItems.length>0){function animOnScroll(e){for(let e=0;e<animItems.length;e++){const t=animItems[e],n=t.offsetHeight,o=offset(t).top,i=4;let c=window.innerHeight-n/i;n>window.innerHeight&&(c=window.innerHeight-window.innerHeight/i),pageYOffset>o-c&&pageYOffset<o+n&&!t.classList.contains("anim-item-header")?t.classList.add("active"):t.classList.contains("anim-no-hide")||t.classList.remove("active")}}function offset(e){const t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+o,left:t.left+n}}window.addEventListener("scroll",animOnScroll),setTimeout((()=>{animOnScroll()}),300)}const headerElement=document.querySelector(".header"),callback=function(e,t){e[0].isIntersecting?headerElement.classList.remove("scroll"):headerElement.classList.add("scroll")},headerObserver=new IntersectionObserver(callback);function DynamicAdapt(e){this.type=e}headerObserver.observe(headerElement),DynamicAdapt.prototype.init=function(){const e=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(let e=0;e<this.nodes.length;e++){const t=this.nodes[e],n=t.dataset.da.trim().split(","),o={};o.element=t,o.parent=t.parentNode,o.destination=document.querySelector(n[0].trim()),o.breakpoint=n[1]?n[1].trim():"767",o.place=n[2]?n[2].trim():"last",o.index=this.indexInParent(o.parent,o.element),this.оbjects.push(o)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,n){return Array.prototype.indexOf.call(n,e)===t}));for(let t=0;t<this.mediaQueries.length;t++){const n=this.mediaQueries[t],o=String.prototype.split.call(n,","),i=window.matchMedia(o[0]),c=o[1],r=Array.prototype.filter.call(this.оbjects,(function(e){return e.breakpoint===c}));i.addListener((function(){e.mediaHandler(i,r)})),this.mediaHandler(i,r)}},DynamicAdapt.prototype.mediaHandler=function(e,t){if(e.matches)for(let e=0;e<t.length;e++){const n=t[e];n.index=this.indexInParent(n.parent,n.element),this.moveTo(n.place,n.element,n.destination)}else for(let e=0;e<t.length;e++){const n=t[e];n.element.classList.contains(this.daClassname)&&this.moveBack(n.parent,n.element,n.index)}},DynamicAdapt.prototype.moveTo=function(e,t,n){t.classList.add(this.daClassname),"last"===e||e>=n.children.length?n.insertAdjacentElement("beforeend",t):"first"!==e?n.children[e].insertAdjacentElement("beforebegin",t):n.insertAdjacentElement("afterbegin",t)},DynamicAdapt.prototype.moveBack=function(e,t,n){t.classList.remove(this.daClassname),void 0!==e.children[n]?e.children[n].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},DynamicAdapt.prototype.indexInParent=function(e,t){const n=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(n,t)},DynamicAdapt.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))};const da=new DynamicAdapt("max");da.init(),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);