import{e as i}from"./assets/izi-toast-options-3faa521a.js";/* empty css                      */import{f as h,i as S}from"./assets/vendor-77e16229.js";const s=document.querySelector("#datetime-picker"),a=document.querySelector(".timer"),e=document.querySelector("[data-start]");i.message="Please choose a date in the future";let d,c;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(Date.now()>t[0])return e.disabled=!0,S.error(i);e.disabled=!1,c=t[0],u()}};e.disabled=!0;function u(){d=c-Date.now();const{days:t,hours:r,minutes:o,seconds:n}=q(d);b(t,r,o,n)}e.addEventListener("click",()=>{e.disabled=!0,s.disabled=!0;const t=setInterval(()=>{u(),d<1e3&&(clearInterval(t),s.disabled=!1)},1e3)});h(s,p);function b(t,r,o,n){a.querySelector("[data-days]").textContent=String(t).padStart(2,"0"),a.querySelector("[data-hours]").textContent=String(r).padStart(2,"0"),a.querySelector("[data-minutes]").textContent=String(o).padStart(2,"0"),a.querySelector("[data-seconds]").textContent=String(n).padStart(2,"0")}function q(t){const l=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:y}}
//# sourceMappingURL=commonHelpers.js.map