import{_ as s,o as a,c as n,d as o}from"./app.34593ea9.js";const i=JSON.parse('{"title":"\u79C1\u6709 Storage \u6570\u636E","description":"","frontmatter":{},"headers":[],"relativePath":"guide/storage.md"}'),l={name:"guide/storage.md"},p=o(`<h1 id="\u79C1\u6709-storage-\u6570\u636E" tabindex="-1">\u79C1\u6709 Storage \u6570\u636E <sup class="pro-badge"></sup> <a class="header-anchor" href="#\u79C1\u6709-storage-\u6570\u636E" aria-hidden="true">#</a></h1><p>\u7531\u4E8E localStorage \u548C sessionStorage \u7684\u540C\u6E90\u7B56\u7565\uFF0C\u540C\u4E00\u57DF\u540D\u4E0B\u7684 storage \u6570\u636E\u4F1A\u5171\u4EAB\u3002\u5982\u679C\u4F60\u6070\u597D\u9700\u8981\u5728\u540C\u4E00\u57DF\u540D\u4E0B\u90E8\u7F72\u4E24\u5957(\u53CA\u4EE5\u4E0A)\u7CFB\u7EDF\uFF0C\u4E0D\u53EF\u907F\u514D\u4F1A\u51FA\u73B0 storage \u6570\u636E\u51B2\u7A81\uFF0C\u6846\u67B6\u63D0\u4F9B\u4E86\u4E00\u4E2A storage \u7C7B\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</p><p>\u89E3\u51B3\u540C\u6E90 storage \u6570\u636E\u51B2\u7A81\u7684\u65B9\u5F0F\u5C31\u662F\u589E\u52A0\u524D\u7F00\u533A\u5206\uFF0C\u9996\u5148\u9700\u8981\u5728\u5E94\u7528\u914D\u7F6E\u91CC\u8BBE\u7F6E\uFF0C\u8FD9\u91CC\u9700\u8981\u4F60\u8BBE\u7F6E\u4E00\u4E2A\u552F\u4E00\u4E14\u4E0D\u91CD\u540D\u7684\u524D\u7F00\u3002</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> globalSettings</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Settings</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">app</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">storagePrefix</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fa_</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E\u5728\u9700\u8981\u4F7F\u7528\u5230 storage \u7684\u5730\u65B9\u5F15\u5165\uFF1A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> storage </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/utils/storage</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u4E2A\u7C7B\u5C01\u88C5\u4E86 <code>setItem()</code> \uFF0C<code>getItem()</code> \uFF0C<code>removeItem()</code> \uFF0C<code>clear()</code> \u65B9\u6CD5\uFF0C\u540C\u65F6\u8FD8\u589E\u52A0\u4E86\u4E00\u4E2A <code>has()</code> \u65B9\u6CD5\u7528\u6765\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u5B58\u5728\uFF1A</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// localStorage</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#A6ACCD;">(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// sessionStorage</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#A6ACCD;">(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> value)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(key)</span></span>
<span class="line"><span style="color:#A6ACCD;">storage</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">session</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u7531\u4E8E localStorage \u6709\u5BB9\u91CF\u4E0A\u9650\uFF0C\u4E00\u822C\u4E3A 5M \uFF0C\u5982\u679C\u4E00\u540C\u57DF\u540D\u4E0B\u90E8\u7F72\u4E24\u5957\u7CFB\u7EDF\uFF0C\u610F\u5473\u7740\u4E24\u5957\u7CFB\u7EDF\u5171\u4EAB 5M \u5BB9\u91CF\uFF0C\u6240\u4EE5\u4E0D\u5EFA\u8BAE\u5728\u540C\u4E00\u57DF\u540D\u90E8\u7F72\u592A\u591A\u5957\u7CFB\u7EDF\uFF0C\u907F\u514D\u51FA\u73B0 localStorage \u4E0D\u591F\u7528\u7684\u60C5\u51B5\u3002</p></div>`,9),e=[p];function t(c,r,D,y,A,F){return a(),n("div",null,e)}const g=s(l,[["render",t]]);export{i as __pageData,g as default};
