!function(){var e=document,n=e.documentElement,t=e.getElementsByTagName("script")[0];n.className=n.className="js";var i=function(n){var i=e.createElement("script");i.src=n,t.parentNode.insertBefore(i,t)};"Promise"in window||i(window.indigo.vendor_url+"/es6-promise.auto.js"),"requestAnimationFrame"in window||i(window.indigo.vendor_url+"requestanimationframe.js"),"function"==typeof CustomEvent||i(window.indigo.vendor_url+"customevents.js"),"srcset"in document.createElement("img")||i("//cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.2/picturefill.min.js"),"dataset"in document.createElement("div")||i(window.indigo.vendor_url+"dataset.js"),"classList"in document.createElement("div")||i(window.indigo.vendor_url+"classList.js"),window.history&&window.history.pushState||i(window.indigo.vendor_url+"native.history.js"),"import"in document.createElement("link")||"createShadowRoot"in HTMLElement.prototype||"content"in document.createElement("template")||i(window.indigo.vendor_url+"webcomponents-lite.js")}();