import{_ as e,o as a,c as o,d as t}from"./app.34593ea9.js";const p="/fantastic-admin/vue2/plop-page.gif",d="/fantastic-admin/vue2/plop-component.gif",c="/fantastic-admin/vue2/plop-store.gif",r="/fantastic-admin/vue2/plop-module.gif",k=JSON.parse('{"title":"\u5FEB\u901F\u751F\u6210\u6587\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":2,"title":"page","slug":"page","link":"#page","children":[]},{"level":2,"title":"component","slug":"component","link":"#component","children":[]},{"level":2,"title":"store","slug":"store","link":"#store","children":[]},{"level":2,"title":"module","slug":"module","link":"#module","children":[]},{"level":2,"title":"\u6269\u5C55","slug":"\u6269\u5C55","link":"#\u6269\u5C55","children":[]}],"relativePath":"guide-vue2/plop.md"}'),l={name:"guide-vue2/plop.md"},n=t('<h1 id="\u5FEB\u901F\u751F\u6210\u6587\u4EF6" tabindex="-1">\u5FEB\u901F\u751F\u6210\u6587\u4EF6 <sup class="pro-badge"></sup> <a class="header-anchor" href="#\u5FEB\u901F\u751F\u6210\u6587\u4EF6" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u907F\u514D\u4E0D\u4E86\u624B\u52A8\u53BB\u9891\u7E41\u521B\u5EFA\u9875\u9762\u3001\u7EC4\u4EF6\u7B49\u6587\u4EF6\uFF0C\u5E76\u4E14\u8FD8\u8981\u5728\u6587\u4EF6\u91CC\u5199\u4E00\u4E9B\u5FC5\u8981\u7684\u4EE3\u7801\uFF0C\u662F\u4E0D\u662F\u89C9\u5F97\u5F88\u9EBB\u70E6\uFF1F\u73B0\u5728\u4F60\u53EF\u4EE5\u7528\u66F4\u7B80\u6D01\u7684\u65B9\u5F0F\u6765\u5904\u7406\u8FD9\u4E00\u5207\u3002</p><p>\u6846\u67B6\u9ED8\u8BA4\u63D0\u4F9B\u4E86 page\uFF08\u9875\u9762\uFF09\u3001component\uFF08\u7EC4\u4EF6\uFF09\u3001store\uFF08\u5168\u5C40\u72B6\u6001\uFF09\u3001module\uFF08\u6A21\u5757\uFF09\u5171 4 \u79CD\u6A21\u5F0F\uFF0C\u901A\u8FC7 <code>yarn new</code> \u6307\u4EE4\u53EF\u4EE5\u81EA\u884C\u9009\u62E9\u3002</p><h2 id="page" tabindex="-1">page <a class="header-anchor" href="#page" aria-hidden="true">#</a></h2><p><img src="'+p+'" alt=""></p><p>page \u6A21\u5F0F\u4E0B\uFF0C\u53EA\u80FD\u5728 <code>/src/views/</code> \u76EE\u5F55\u4E0B\u9009\u62E9\u6307\u5B9A\u7684\u6587\u4EF6\u5939\u8FDB\u884C\u751F\u6210\uFF0C\u751F\u6210\u7684\u6587\u4EF6\u4E2D\uFF0C\u90E8\u5206\u5173\u952E\u4F4D\u7F6E\u4F1A\u88AB\u66FF\u6362\u6389\uFF0C\u4F8B\u5982 <code>&lt;page-header /&gt;</code> \u4E2D\u7684 <code>title</code> \u4F1A\u6309\u7167\u4F60\u8F93\u5165\u7684\u4E2D\u6587\u540D\u79F0\u66FF\u6362\uFF0C\u9875\u9762\u7684 <code>name</code> \u4F1A\u6839\u636E\u5F53\u524D\u6587\u4EF6\u76EE\u5F55\u548C\u6587\u4EF6\u540D\u81EA\u52A8\u751F\u6210\uFF0C\u786E\u4FDD\u552F\u4E00\u3002</p><h2 id="component" tabindex="-1">component <a class="header-anchor" href="#component" aria-hidden="true">#</a></h2><p><img src="'+d+'" alt=""></p><p>component \u6A21\u5F0F\u53EF\u4EE5\u9009\u62E9\u751F\u6210\u7684\u662F\u5168\u5C40\u7EC4\u4EF6\u8FD8\u662F\u5C40\u90E8\u7EC4\u4EF6\uFF0C\u5168\u5C40\u7EC4\u4EF6\u751F\u6210\u76EE\u5F55\u4E3A <code>/src/components/</code> \uFF0C\u5C40\u90E8\u7EC4\u4EF6\u5219\u5728 <code>/src/views/</code> \u76EE\u5F55\u4E0B\u9009\u62E9\u6307\u5B9A\u7684\u6587\u4EF6\u5939\u8FDB\u884C\u751F\u6210\u3002</p><h2 id="store" tabindex="-1">store <a class="header-anchor" href="#store" aria-hidden="true">#</a></h2><p><img src="'+c+'" alt=""></p><p>store \u6A21\u5F0F\u5219\u4F1A\u5728 <code>/src/store/modules/</code> \u76EE\u5F55\u4E0B\u751F\u6210\u4E00\u4E2A\u7A7A\u6A21\u677F</p><h2 id="module" tabindex="-1">module <a class="header-anchor" href="#module" aria-hidden="true">#</a></h2><p><img src="'+r+'" alt=""></p><p>module \u6A21\u5F0F\u662F\u4E00\u4E2A\u6807\u51C6\u6A21\u5757\u6A21\u677F\uFF0C\u4F1A\u5728\u6307\u5B9A\u76EE\u5F55\u4E0B\u751F\u6210\u6A21\u5757\u6587\u4EF6\u5939\uFF0C\u5E76\u4E14\u5305\u542B\u5217\u8868\u9875\u3001\u7F16\u8F91\uFF08\u8BE6\u60C5\uFF09\u9875\uFF0C\u4EE5\u53CA\u76F8\u5173\u5C40\u90E8\u7EC4\u4EF6\u3002</p><p>\u8FD9\u5757\u90E8\u5206\u8BE6\u7EC6\u4ECB\u7ECD\u5EFA\u8BAE\u79FB\u6B65\u300A<a href="./module.html">\u6807\u51C6\u6A21\u5757</a>\u300B</p><h2 id="\u6269\u5C55" tabindex="-1">\u6269\u5C55 <a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u8BF4\u660E</p><p>\u8BE5\u529F\u80FD\u57FA\u4E8E <a href="https://www.npmjs.com/package/plop" target="_blank" rel="noreferrer">plop</a> \u5B9E\u73B0\uFF0C\u5728\u6269\u5C55\u65B0\u7684\u6A21\u5F0F\u524D\uFF0C\u8BF7\u5148\u8BE6\u7EC6\u9605\u8BFB plop \u6587\u6863\u3002</p></div><p>\u9664\u4E86\u6846\u67B6\u63D0\u4F9B\u7684 4 \u79CD\u6A21\u5F0F\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u65B0\u7684\u6A21\u5F0F\uFF0C\u5176\u539F\u7406\u5C31\u662F\u901A\u8FC7\u9884\u8BBE\u6A21\u677F\uFF0C\u6309\u7167\u7279\u5B9A\u89C4\u5219\u521B\u5EFA\u6587\u4EF6\u6216\u8005\u6587\u4EF6\u5939\u3002</p><p>\u9884\u8BBE\u6A21\u677F\u6587\u4EF6\u5B58\u653E\u5728 <code>./plop-templates/</code> \u76EE\u5F55\u4E0B\uFF0C\u5E76\u5728 <code>./plopfile.js</code> \u6587\u4EF6\u91CC\u8FDB\u884C\u5F15\u7528\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003\u73B0\u6709 4 \u79CD\u6A21\u5F0F\u7684\u76EE\u5F55\u7ED3\u6784\u8FDB\u884C\u521B\u5EFA\u65B0\u7684\u6A21\u677F\u3002</p>',21),s=[n];function i(h,m,u,_,g,f){return a(),o("div",null,s)}const b=e(l,[["render",i]]);export{k as __pageData,b as default};
