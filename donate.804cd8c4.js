!function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var e=function(e){var o=t[e];o.addEventListener("click",(function(e){o.parentElement.classList.toggle("_active")}))};document.body.classList.add("_touch");var t=document.querySelectorAll(".menu__arrow");if(t.length>0)for(var o=0;o<t.length;o++)e(o)}else{var n=function(e){var t=c[e];t.addEventListener("click",(function(e){t.parentElement.classList.toggle("_active")}))};document.body.classList.add("_pc");var c=document.querySelectorAll(".menu__arrow");if(c.length>0)for(var r=0;r<c.length;r++)n(r)}var a=document.querySelector(".menu__icon"),l=document.querySelector(".menu__body");a&&a.addEventListener("click",(function(e){document.body.classList.toggle("_lock"),a.classList.toggle("_active"),l.classList.toggle("_active")}));var i=document.querySelectorAll(".reconstruction__btn[data-goto]")||document.querySelectorAll(".reconstruction__btn-title[data-goto]")||document.querySelectorAll(".reconstruction__btn-city[data-goto]");if(i.length>0){function d(e){e.preventDefault();var t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){var o=document.querySelector(t.dataset.goto).getBoundingClientRect().top+scrollY-document.querySelector("header").offsetHeight;window.scrollTo({top:o,behavior:"smooth"})}}i.forEach((function(e){e.addEventListener("click",d)}))}}();
//# sourceMappingURL=donate.804cd8c4.js.map
