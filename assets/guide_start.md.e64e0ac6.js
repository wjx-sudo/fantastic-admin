import{_ as e,o as s,c as a,d as o}from"./app.34593ea9.js";const h=JSON.parse('{"title":"\u5F00\u59CB","description":"","frontmatter":{},"headers":[],"relativePath":"guide/start.md"}'),t={name:"guide/start.md"},n=o(`<h1 id="\u5F00\u59CB" tabindex="-1">\u5F00\u59CB <a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a></h1><p>\u505A\u597D\u51C6\u5907\u5DE5\u4F5C\u540E\uFF0C\u8BF7\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u4F9D\u6B21\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;"># \u5B89\u88C5\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#676E95;"># \u6CE8\u610F\uFF0C\u5FC5\u987B\u4F7F\u7528 pnpm \u5B89\u88C5\u4F9D\u8D56\uFF0C\u8BF7\u52FF\u4F7F\u7528 npm \u6216 yarn \u5B89\u88C5\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u8FD0\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm run dev</span></span>
<span class="line"></span></code></pre></div><p>\u8FD0\u884C\u6210\u529F\u540E\uFF0C\u4F1A\u81EA\u52A8\u8BBF\u95EE\u9875\u9762\uFF0C\u9ED8\u8BA4\u5730\u5740\u4E3A <code>http://localhost:9000</code></p><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u7531\u4E8E\u6846\u67B6\u6709\u4F7F\u7528\u5230 husky \u8FD9\u4E2A\u4F9D\u8D56\u5305\uFF0C\u6240\u4EE5\u8BF7\u786E\u4FDD\u5728\u5B89\u88C5\u4F9D\u8D56\u524D\uFF0C\u5DF2\u7ECF\u4F7F\u7528 <code>git init</code> \u5BF9\u9879\u76EE\u8FDB\u884C\u8FC7 git \u73AF\u5883\u521D\u59CB\u5316\uFF0C\u5426\u5219\u5B89\u88C5\u4F9D\u8D56\u8FC7\u7A0B\u4E2D\u4F1A\u63D0\u793A husky \u5B89\u88C5\u5931\u8D25\u3002</p><p>\u4E86\u89E3\u66F4\u591A\u8BF7\u9605\u8BFB\u300A<a href="./coding-standard.html#husky-lint-staged">\u4EE3\u7801\u89C4\u8303 - husky &amp; lint-staged</a>\u300B\u3002</p><p>\u6B64\u5916\uFF0C\u5982\u679C git \u4ED3\u5E93\u76EE\u5F55\u548C\u6846\u67B6\u76EE\u5F55\u5E76\u975E\u540C\u4E00\u4E2A\uFF0C\u5219\u9700\u8981\u5728 <code>package.json</code> \u4E2D\u4FEE\u6539 <code>prepare</code> \u811A\u672C\uFF0C\u5207\u6362\u5230 git \u6240\u5728\u76EE\u5F55\u3002\u4F8B\u5982 git \u76EE\u5F55\u662F <code>project/</code> \uFF0C\u800C\u6846\u67B6\u76EE\u5F55\u662F <code>project/fantastic-admin/</code> \uFF0C\u5219\u5728 <code>package.json</code> \u91CC\u627E\u5230 <code>&quot;prepare&quot;: &quot;husky install&quot;</code> \u5E76\u4FEE\u6539\u4E3A <code>&quot;prepare&quot;: &quot;cd .. &amp;&amp; husky install&quot;</code> \u5373\u53EF\u3002</p></div><div class="warning custom-block"><p class="custom-block-title">\u62A5\u9519</p><p>\u5B89\u88C5\u4F9D\u8D56\u65F6\u63D0\u793A 404 \uFF0C\u6216\u8005\u5B89\u88C5\u7ED3\u675F\u540E\uFF0C\u8FD0\u884C\u65F6\u63D0\u793A\u300C &#39;vite&#39; \u4E0D\u662F\u5185\u90E8\u6216\u5916\u90E8\u547D\u4EE4\uFF0C\u4E5F\u4E0D\u662F\u53EF\u8FD0\u884C\u7684\u7A0B\u5E8F\u6216\u6279\u5904\u7406\u6587\u4EF6 \u300D\uFF0C\u90FD\u4E9B\u90FD\u662F\u4F9D\u8D56\u672A\u5B89\u88C5\u6210\u529F\u5BFC\u81F4\u7684\u3002\u53EF\u4EE5\u5C1D\u8BD5\u6267\u884C <code>pnpm config set registry https://registry.npmmirror.com/</code> \u5207\u6362\u4E3A\u56FD\u5185 npmmirror \u6E90\uFF08\u4E5F\u53EF\u4EE5\u4F7F\u7528 <a href="https://github.com/Pana/nrm" target="_blank" rel="noreferrer">nrm</a> \u4E00\u952E\u5207\u6362\u6E90\uFF09\uFF0C\u7136\u540E\u5220\u9664\u6839\u76EE\u5F55\u4E0B <code>/node_modules</code> \u6587\u4EF6\u5939\u5E76\u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56\u3002</p><p>\u5982\u679C\u4F9D\u65E7\u65E0\u6CD5\u8FD0\u884C\uFF08\u57FA\u672C\u4E0D\u592A\u53EF\u80FD\uFF09\uFF0C\u53EF\u5C1D\u8BD5\u5220\u9664\u6839\u76EE\u5F55\u4E0B <code>/node_modules</code> \u6587\u4EF6\u5939\u4E0E <code>pnpm-lock.yaml</code> \u6587\u4EF6\u540E\uFF0C\u518D\u5220\u9664 <code>package.json</code> \u4E2D <code>&quot;preinstall&quot;: &quot;npx only-allow pnpm&quot;</code> \u8FD9\u53E5\u811A\u672C\uFF0C\u6700\u540E\u4F7F\u7528 <code>npm / yarn</code> \u8FDB\u884C\u5B89\u88C5\u4F9D\u8D56\u3002\u4F46\u9700\u8981\u6E05\u695A\u4E00\u70B9\uFF0C\u8FD9\u6837\u64CD\u4F5C\u540E\uFF0C\u5C06\u65E0\u6CD5\u4E0E\u5B98\u65B9\u73AF\u5883\u9501\u5B9A\u7684\u4F9D\u8D56\u5305\u7248\u672C\u4FDD\u6301\u4E00\u81F4\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u65E0\u6CD5\u9884\u77E5\u7684\u95EE\u9898\uFF0C\u975E\u5FC5\u8981\u60C5\u51B5\u4E0B\uFF0C\u8BF7\u52FF\u4F7F\u7528\u8BE5\u65B9\u6848\u3002</p></div>`,6),c=[n];function p(d,l,r,i,u,m){return s(),a("div",null,c)}const g=e(t,[["render",p]]);export{h as __pageData,g as default};
