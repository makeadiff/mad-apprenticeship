import{a,b as C}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-MMBBW6C3.js";import{a as p,d as F}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-7H65ZTQ6.js";import{d as w,h as I}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-HCZ7E5D7.js";import{a as x}from"https://st-p.rmcdn.net/d0e54be8/dist/c/c-YAALJKSE.js";var V,j,Y=x(()=>{"use strict";I();F();C();V={setVideoPosition:function(e){if(!e.aspect_poster||!e.$media||!e.$media.length)return;let t=e.$container.css("width"),i=e.$container.css("height");if(/px/.test(t+i))t=parseInt(t),i=parseInt(i);else{if(!e.mag)return;let u=e.mag.getContainerSizeCached();t=u.width,i=u.height}let o=e.aspect_poster,m=e.aspect_real||o,d=e.controls_remove?5:0,h=t+d*2,l=i+d*2,n=h,r=l;if(o){let u,s;h/l>m?(u=h,s=u/m):(s=l,u=s*m),o<m?(n=u,r=n/o):(r=s,n=r*o)}if(e.provider.toLowerCase()=="vimeo"&&e.controls_remove){var c=(r-l)/2,P=(n-h)/2,f=50,y=46,b=f-c,v=y-P;if(b>0||v>0){let u=(r+b*2)/r,s=(n+v*2)/n,_=Math.max(u,s);n*=_,r*=_}}if(e.provider.toLowerCase()=="youtube"&&e.controls_remove){var c=(r-l)/2,f=103,g=f-c;g>0&&(r+=g*2,n=r*o)}let U=-d-(n-h)/2,$=-d-(r-l)/2;e.$media.css({left:U,top:$,width:n,height:r})},getHighResVideoThumbnail:function(e){if(!e.provider||!e.thumbnail_url)return Promise.resolve(e.thumbnail_url||"");function t(i,o){return i.replace(/(\/)(\w*default)(\.\w+$)/i,"$1"+o+"$3")}switch(e.provider.toLowerCase()){case"vimeo":return Promise.resolve(e.thumbnail_url);case"youtube":return Promise.resolve(typeof e.video_url=="string"&&e.video_url.includes("shorts")?e.thumbnail_url:t(e.thumbnail_url,"maxresdefault"));default:return Promise.resolve(e.thumbnail_url)}},getEmbedData:async function(e,t,i){fetch(/oembed/i.test(e)?e:this.getEmbedUrl(e)).then(o=>o.json()).then(o=>{o.url=o.url&&w(o.url),o.thumbnail_url=o.thumbnail_url&&w(o.thumbnail_url),typeof t=="function"&&t(o)}).catch(o=>{i(o)})},getEmbedUrl:function(e){if(this.isVimeo(e))return"https://vimeo.com/api/oembed.json?url="+encodeURIComponent(e)+"&width=1280";{let t=V.getYoutubeIdFromUrl(e);if(t)return"https://www.youtube.com/oembed?format=json&url="+encodeURIComponent("https://www.youtube.com/watch?v="+t)}return""},getYoutubeIdFromUrl:function(e){let t=/^.*(youtu.be\/|v\/|u\/\w\/|shorts\/|watch\?v=)([^#\&\?]*).*/,i=e.match(t);if(i&&i[2].length===11)return i[2];let o=/.*(youtu.*\&v=)([^#\&\?]*).*/;return i=e.match(o),i&&i[2].length===11?i[2]:null},getVimeoIdFromUrl:function(e){let t=e.match(/(video\/)(\w+)(_\d+x\d+|_\d+)(\.\w+$)/i);return t&&t[2]?t[2]:null},getVideoProvider:function(e){return this.isVimeo(e)?"Vimeo":this.isYoutube(e)?"YouTube":""},isVimeo:function(e){return/vimeo\.com\/.+/.test(e)},isYoutube:function(e){return e&&!!this.getYoutubeIdFromUrl(e)},brokenVimeoThumbnailRegexp:/\/\d+_[\dx]+(\.\w+)?$/,validateVideoFile:function(e){if(!this.allowedVideoFormats.includes(e.type))throw new Error("Please upload .mp4 or .webm files");let{video_upload_limit:t}=a.getPermissions();if(e.size>t)throw new Error(`Please upload file smaller than ${p(t)}`)},allowedVideoFormats:["video/mp4","video/webm"]},j=V});export{j as a,Y as b};