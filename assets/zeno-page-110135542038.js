
          function znReady(fn) {
            if (document.readyState != 'loading'){
              fn();
            } else {
              document.addEventListener('DOMContentLoaded', fn);
            }
          }

          window.znStorage={_storage:new WeakMap,put:function(e,t,n){this._storage.has(e)||this._storage.set(e,new Map),this._storage.get(e).set(t,n)},get:function(e,t){return this._storage.get(e).get(t)},has:function(e,t){return this._storage.has(e)&&this._storage.get(e).has(t)},remove:function(e,t){var n=this._storage.get(e).delete(t);return 0===!this._storage.get(e).size&&this._storage.delete(e),n}};
          
          
          Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(Element.prototype.matches.call(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});
          window.znRespondToVisibility=function(e,t){var n={root:null,threshold:.01},a=new IntersectionObserver((function(e,n){var a=e.map((function(e){return e.isIntersecting})),i=a.includes(!0);t(i)}),n);a.observe(e)};
        ; znReady((function(){var e,t;document.getElementById("znid-970284085311"),document.querySelector(".zn-container.editing"),function(){var e=document.getElementById("znid-982162628767"),t="https://online.sukiya.biz/products/decorte-white-logist-neogenesis-brightening-concentrate-2023-1";function n(e,t){try{var n=new URL(e),o=new URL(t);if(n.hostname!=o.hostname)return!1}catch(e){}return!0}if(!(null!=document.querySelector(".zn-container.editing"))){var o=window.location.origin,i=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";if(!n(t,o)&&!n(t,i))e.querySelector("a").setAttribute("target","_blank")}}(),function(){var e=document.getElementById("znid-488397757390"),t="https://online.sukiya.biz/products/decorte-white-logist-neogenesis-brightening-concentrate-2023-1-limited";function n(e,t){try{var n=new URL(e),o=new URL(t);if(n.hostname!=o.hostname)return!1}catch(e){}return!0}if(!(null!=document.querySelector(".zn-container.editing"))){var o=window.location.origin,i=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";if(!n(t,o)&&!n(t,i))e.querySelector("a").setAttribute("target","_blank")}}(),document.getElementById("znid-049158297417"),document.querySelector(".zn-container.editing"),document.getElementById("znid-866985130712"),document.querySelector(".zn-container.editing"),document.getElementById("znid-669784392312"),document.querySelector(".zn-container.editing"),document.getElementById("znid-210821541961"),document.querySelector(".zn-container.editing"),document.getElementById("znid-446228751583"),document.querySelector(".zn-container.editing"),document.getElementById("znid-003150339603"),document.querySelector(".zn-container.editing"),document.getElementById("znid-757998976557"),document.querySelector(".zn-container.editing"),document.getElementById("znid-002145603662"),document.querySelector(".zn-container.editing"),document.getElementById("znid-908456136628"),document.querySelector(".zn-container.editing"),function(){var e=document.getElementById("znid-552783274716"),t="https://online.sukiya.biz/products/decorte-white-logist-neogenesis-brightening-concentrate-2023-1";function n(e,t){try{var n=new URL(e),o=new URL(t);if(n.hostname!=o.hostname)return!1}catch(e){}return!0}if(!(null!=document.querySelector(".zn-container.editing"))){var o=window.location.origin,i=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";if(!n(t,o)&&!n(t,i))e.querySelector("a").setAttribute("target","_blank")}}(),function(){var e=document.getElementById("znid-441625103363"),t="https://online.sukiya.biz/products/decorte-white-logist-neogenesis-brightening-concentrate-2023-1-limited";function n(e,t){try{var n=new URL(e),o=new URL(t);if(n.hostname!=o.hostname)return!1}catch(e){}return!0}if(!(null!=document.querySelector(".zn-container.editing"))){var o=window.location.origin,i=window.Shopify&&window.Shopify.shop?"https://"+window.Shopify.shop:"";if(!n(t,o)&&!n(t,i))e.querySelector("a").setAttribute("target","_blank")}}(),document.getElementById("znid-733707558657"),document.querySelector(".zn-container.editing"),e=document.getElementById("znid-684809166339"),t=e.querySelectorAll("img"),window.znStorage.put(e,"updateImage",(function(e){t.forEach((function(t){t.src=e}))})),function(){var e=document.getElementById("znid-179779397297"),t=e.querySelectorAll("img");window.znStorage.put(e,"updateImage",(function(e){t.forEach((function(t){t.src=e}))}))}(),function(){var e=document.getElementById("znid-215248935914"),t=e.querySelectorAll("img");window.znStorage.put(e,"updateImage",(function(e){t.forEach((function(t){t.src=e}))}))}(),document.getElementById("znid-784483903655"),document.getElementById("znid-752905140411"),document.getElementById("znid-746566046376"),function(){var e=document.getElementById("znid-622915259195");function t(e,t,n){var o=e+encodeURIComponent(t);this.setAttribute("href",o),this.addEventListener("click",(function(e){e.preventDefault(),function(e,t){var n=(screen.width-640)/2,o="menubar=no,toolbar=no,status=no,width=640,height=640,top="+(screen.height-640)/2+",left="+n;"_blank"==t?window.open(e):"_self"==t?window.location=e:window.open(e,t,o)}(o,n)}))}null!=document.querySelector(".zn-container.editing")||e.querySelectorAll(".zn-social-share-item").forEach((function(e){var n,o="Check out my awesome shop!",i=document.URL,r=!0;switch(e.getAttribute("ref-name")){case"facebook":n="https://www.facebook.com/sharer.php?quote="+o+"&u=";break;case"twitter":n="https://twitter.com/intent/tweet?text="+o+"&url=";break;case"pinterest":n="http://pinterest.com/pin/create/button/?description="+o+"&url=";break;case"linkedin":n="https://www.linkedin.com/shareArticle?mini=true&url=";break;case"email":var c="mailto:?body="+o+" "+i;e.setAttribute("href",c),r=!1}r&&e&&t.call(e,n,i,"Share")}))}(),document.body.style.setProperty("background-color","#FFFFFFBA","important"),document.querySelector(".zn-container.editing"),function(){document.querySelector(".zn-container.editing");var e=document.body;t();function t(){var t=e.querySelector(".zn-announcement-bar");t&&t.parentNode.removeChild(t)}}()}));