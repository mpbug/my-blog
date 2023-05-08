import{_ as l,X as c,Y as p,Z as t,$ as e,a0 as r,a5 as n,E as i}from"./framework-d8252107.js";const h={},a=t("h1",{id:"一些常见的「bug」并不是-bug",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#一些常见的「bug」并不是-bug","aria-hidden":"true"},"#"),e(" 一些常见的「bug」并不是 bug")],-1),_={href:"https://github.com/Microsoft/TypeScript/wiki/FAQ",target:"_blank",rel:"noopener noreferrer"},u=t("p",null,"这有一些看起来像 Bug 的行为，但实际上，它们并不是。",-1),f=t("p",null,"两个空的类，可以彼此代替",-1),B=t("p",null,[e("我可以在一个返回值为 void 的函数中使用一个返回值不为 "),t("code",null,"void"),e(" 的函数")],-1),E={href:"https://github.com/Microsoft/TypeScript/issues/4544",target:"_blank",rel:"noopener noreferrer"},b=t("p",null,"我可以使用一个更短的参数列表，而不是一个期望的长参数列表",-1),g={href:"https://github.com/Microsoft/TypeScript/issues/370",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/Microsoft/TypeScript/issues/9300",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/Microsoft/TypeScript/issues/9765",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/Microsoft/TypeScript/issues/9825",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/Microsoft/TypeScript/issues/13043",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/Microsoft/TypeScript/issues/16871",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/Microsoft/TypeScript/issues/13529",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/Microsoft/TypeScript/issues/13977",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/Microsoft/TypeScript/issues/17868",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/Microsoft/TypeScript/issues/20274",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/Microsoft/TypeScript/issues/20541",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/Microsoft/TypeScript/issues/21868",target:"_blank",rel:"noopener noreferrer"},x=t("p",null,[e("类的 "),t("code",null,"private"),e(" 成员，在运行时实际上是可见的")],-1),D=t("li",null,"查看相关 FAQ，以及一些修复的建议",-1),Q={href:"https://github.com/Microsoft/TypeScript/issues/564",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/Microsoft/TypeScript/issues/1537",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/Microsoft/TypeScript/issues/2967",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/Microsoft/TypeScript/issues/3151",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/Microsoft/TypeScript/issues/6748",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/Microsoft/TypeScript/issues/8847",target:"_blank",rel:"noopener noreferrer"},U={href:"https://github.com/Microsoft/TypeScript/issues/9733",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/Microsoft/TypeScript/issues/11033",target:"_blank",rel:"noopener noreferrer"};function R(X,Y){const o=i("ExternalLinkIcon"),s=i("RouterLink");return c(),p("div",null,[a,t("blockquote",null,[t("p",null,[e("注：此章节的所有文章都来自 "),t("a",_,[e("TypeScript FAQs"),r(o)])])]),u,t("ul",null,[t("li",null,[f,t("ul",null,[t("li",null,[e("查看相关的 "),r(s,{to:"/views/Books/Front-end/TypescriptMaster/faqs/class.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%99%E4%BA%9B%E7%A9%BA%E7%B1%BB%E7%9A%84%E8%A1%8C%E4%B8%BA%E5%BE%88%E5%A5%87%E6%80%AA%EF%BC%9F"},{default:n(()=>[e("FAQ")]),_:1})])])]),t("li",null,[B,t("ul",null,[t("li",null,[e("查看相关的 "),r(s,{to:"/views/Books/Front-end/TypescriptMaster/faqs/type-system-behavior.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%80%E4%B8%AA%E8%BF%94%E5%9B%9E%E5%80%BC%E4%B8%8D%E6%98%AF-void-%E7%9A%84%E5%87%BD%E6%95%B0%EF%BC%8C%E5%8F%AF%E4%BB%A5%E8%B5%8B%E5%80%BC%E7%BB%99%E4%B8%80%E4%B8%AA%E8%BF%94%E5%9B%9E%E5%80%BC%E4%B8%BA-void-%E7%9A%84%E5%87%BD%E6%95%B0%EF%BC%9F"},{default:n(()=>[e("FAQ")]),_:1})]),t("li",null,[e("查看此 "),t("a",E,[e("ISSUES"),r(o)])])])]),t("li",null,[b,t("ul",null,[t("li",null,[e("查看相关 "),r(s,{to:"/views/Books/Front-end/TypescriptMaster/faqs/type-system-behavior.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E6%9B%B4%E5%B0%91%E5%8F%82%E6%95%B0%E7%9A%84%E5%87%BD%E6%95%B0%E8%83%BD%E5%A4%9F%E8%B5%8B%E5%80%BC%E7%BB%99%E6%9B%B4%E5%A4%9A%E5%8F%82%E6%95%B0%E7%9A%84%E5%87%BD%E6%95%B0%EF%BC%9F"},{default:n(()=>[e("FAQ")]),_:1})]),t("li",null,[e("相关 ISSUES："),t("a",g,[e("#370"),r(o)]),e("、"),t("a",d,[e("#9300"),r(o)]),e("、"),t("a",m,[e("#9765"),r(o)]),e("、"),t("a",k,[e("#9825"),r(o)]),e("、"),t("a",A,[e("#13043"),r(o)]),e("、"),t("a",S,[e("#16871"),r(o)]),e("、"),t("a",y,[e("#13529"),r(o)]),e("、"),t("a",T,[e("#13977"),r(o)]),e("、"),t("a",F,[e("#17868"),r(o)]),e("、"),t("a",M,[e("#20274"),r(o)]),e("、"),t("a",v,[e("#20541"),r(o)]),e("、"),t("a",C,[e("#21868"),r(o)]),e("。")])])]),t("li",null,[x,t("ul",null,[D,t("li",null,[e("相关 ISSUES："),t("a",Q,[e("#564"),r(o)]),e("、"),t("a",w,[e("#1537"),r(o)]),e("、"),t("a",I,[e("#2967"),r(o)]),e("、"),t("a",q,[e("#3151"),r(o)]),e("、"),t("a",L,[e("#6748"),r(o)]),e("、"),t("a",N,[e("#8847"),r(o)]),e("、"),t("a",U,[e("#9733"),r(o)]),e("、"),t("a",V,[e("#11033"),r(o)]),e("。")])])])])])}const $=l(h,[["render",R],["__file","common-bug-not-bugs.html.vue"]]);export{$ as default};
