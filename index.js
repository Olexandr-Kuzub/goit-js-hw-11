import{a as u,S as m,i as n}from"./assets/vendor-GgwdjDaY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",p="55927319-d2860dd64df6f91fa3e520f31";function y(s){return u.get(d,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(s){const o=s.map(t=>`
    <li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
    />
  </a>
  <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${t.likes}
            </p>

            <p class="info-item">
              <b>Views</b>
              ${t.views}
            </p>

            <p class="info-item">
              <b>Comments</b>
              ${t.comments}
            </p>

            <p class="info-item">
              <b>Downloads</b>
              ${t.downloads}
            </p>
          </div>
</li>`).join("");l.innerHTML=o,g.refresh()}function b(){l.innerHTML=""}function L(){c.classList.add("is-visible")}function v(){c.classList.remove("is-visible")}const f=document.querySelector(".form");f.addEventListener("submit",w);function w(s){s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){n.error({title:"Error",message:"Please fill in the search field!"});return}b(),L(),y(o).then(t=>{if(t.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t.hits)}).catch(t=>{n.error({title:"Error",message:"Something went wrong!"}),console.log(t)}).finally(()=>{v()}),f.reset()}
//# sourceMappingURL=index.js.map
