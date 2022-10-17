import{_ as e,o as a,c as t,d as n}from"./app.34593ea9.js";const u=JSON.parse('{"title":"gzip \u652F\u6301","description":"","frontmatter":{},"headers":[],"relativePath":"guide-vue2/gzip.md"}'),s={name:"guide-vue2/gzip.md"},p=n(`<h1 id="gzip-\u652F\u6301" tabindex="-1">gzip \u652F\u6301 <a class="header-anchor" href="#gzip-\u652F\u6301" aria-hidden="true">#</a></h1><p>\u9664\u4E86\u4F7F\u7528 CDN \u6765\u63D0\u9AD8\u52A0\u8F7D\u8BBF\u95EE\u901F\u5EA6\u5916\uFF0C\u5982\u679C\u540E\u7AEF\u670D\u52A1\u5668\u652F\u6301\uFF0C\u8FD8\u53EF\u4EE5\u5F00\u542F gzip \u8FDB\u884C\u6587\u4EF6\u538B\u7F29\uFF0C\u8FD9\u662F\u4E00\u79CD\u66F4\u663E\u8457\u7684\u51CF\u5C0F\u6587\u4EF6\u4F53\u79EF\u7684\u5904\u7406\u529E\u6CD5\uFF0C\u901A\u5E38\u53EF\u4EE5\u51CF\u5C0F 60% \u4EE5\u4E0A\u7684\u4F53\u79EF\u3002</p><p>\u5F00\u542F\u65B9\u5F0F\u4E5F\u5F88\u7B80\u5355\uFF0C\u53EA\u9700\u5728 <code>.env.*</code> \u914D\u7F6E\u6587\u4EF6\u91CC\u4FEE\u6539\u4E3A\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">VUE_APP_GZIP = ON</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5F00\u542F\u540E\u518D\u8FDB\u884C\u9879\u76EE\u6253\u5305\u65F6\uFF0C\u4F1A\u540C\u65F6\u751F\u6210 <code>.gz</code> \u6587\u4EF6\u3002</p><p>\u6700\u540E\u8BB0\u5F97\u5F00\u542F\u670D\u52A1\u7AEF\u5BF9 gzip \u7684\u652F\u6301\uFF0C\u4EE5 nginx \u4E3A\u4F8B\uFF0C\u9700\u8981\u5728\u914D\u7F6E\u91CC\u52A0\u4E0A <code>gzip_static on;</code> \u8FD9\u884C\u914D\u7F6E\uFF0C\u5982\u679C nginx \u4E2D\u7684 http_gzip_static_module \u6A21\u5757\u4E0D\u5B58\u5728\uFF0C\u5219\u8FD8\u9700\u8981\u8FDB\u884C\u6DFB\u52A0\uFF0C\u53EF\u53C2\u8003\u300A<a href="https://www.cnblogs.com/caicaizi/p/10241700.html" target="_blank" rel="noreferrer">yum\u5B89\u88C5\u4E0B\u7684nginx\uFF0C\u5982\u4F55\u6DFB\u52A0\u6A21\u5757\uFF0C\u548C\u6DFB\u52A0\u7B2C\u4E09\u65B9\u6A21\u5757</a>\u300B</p>`,6),o=[p];function c(i,r,_,d,l,g){return a(),t("div",null,o)}const z=e(s,[["render",c]]);export{u as __pageData,z as default};
