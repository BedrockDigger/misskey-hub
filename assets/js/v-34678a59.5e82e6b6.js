"use strict";(self.webpackChunkmisskey_hub=self.webpackChunkmisskey_hub||[]).push([[8342],{3709:(e,r,o)=>{o.r(r),o.d(r,{default:()=>G});var u=o(6252);const t=(0,u._)("h1",{id:"github-actionsを使用してdocker-hubへpushする方法",tabindex:"-1"},[(0,u._)("a",{class:"header-anchor",href:"#github-actionsを使用してdocker-hubへpushする方法","aria-hidden":"true"},"#"),(0,u.Uk)(" GitHub Actionsを使用してDocker Hubへpushする方法")],-1),c={href:"https://github.com/misskey-dev/misskey/blob/develop/.github/workflows/docker.yml",target:"_blank",rel:"noopener noreferrer"},s=(0,u.Uk)("/.github/workflows/docker.yml"),h=(0,u.Uk)(" に"),l=(0,u._)("br",null,null,-1),n=(0,u.Uk)(" GitHub ActionによりDocker Hubへpushするワークフローが記述されています。"),i=(0,u.uE)('<p>オリジナルリポジトリでは、リリースされたタイミングで <code>latest</code>, <code>&lt;リリース名&gt;</code> それぞれのタグでDocker Hubにpushされます。<br> ※ Docker Hub に<code>&lt;ブランチ名&gt;</code>のようなタグがあるかもしれませんが、こちらは自動push対象ではありません。</p><p>Fork先でこのワークフローを実行すると失敗します。</p><p>以下では、Fork先で自分のDocker Hubリポジトリにpushするようにする方法を記述します。</p><h2 id="自分のdocker-hubリポジトリにpushするように設定する方法" tabindex="-1"><a class="header-anchor" href="#自分のdocker-hubリポジトリにpushするように設定する方法" aria-hidden="true">#</a> 自分のDocker Hubリポジトリにpushするように設定する方法</h2>',4),a=(0,u._)("li",null,"Docker Hubでリポジトリを作成します。",-1),b=(0,u.Uk)("ワークフローファイルの "),d={href:"https://github.com/misskey-dev/misskey/blob/53f3b779bf16abcda4f6e026c51384f3b8fbcc62/.github/workflows/docker.yml#L20",target:"_blank",rel:"noopener noreferrer"},k=(0,u.Uk)("images"),p=(0,u.Uk)(" を作成したリポジトリに置き換えます。"),f=(0,u.Uk)("GitHubにて "),m={href:"https://docs.github.com/ja/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository",target:"_blank",rel:"noopener noreferrer"},g=(0,u.Uk)("暗号化されたシークレット"),_=(0,u.Uk)(" を作成します。"),H=(0,u._)("br",null,null,-1),D=(0,u.Uk)(" 作成が必要なのは "),y=(0,u._)("code",null,"DOCKER_USERNAME",-1),U=(0,u.Uk)(" と "),w=(0,u._)("code",null,"DOCKER_PASSWORD",-1),v=(0,u.Uk)(" で、それぞれDocker Hubのユーザーとパスワードになります。"),A=(0,u.uE)('<h2 id="pushする方法" tabindex="-1"><a class="header-anchor" href="#pushする方法" aria-hidden="true">#</a> pushする方法</h2><p>上記設定によりリリース時に自動的にDocker Hubにpushされるようになります。<br> 具体的には、GitHubのリリース機能でリリースしたタイミングで <code>latest</code>, <code>&lt;リリース名&gt;</code> それぞれのタグでDocker Hubにpushされます。</p><p>また、GitHub上から手動でpushすることも出来ます。<br> それを行うには、Actions =&gt; Publish Docker image =&gt; Run workflow からbranchを選択してワークフローを実行します。<br> ただし、この場合作成されるタグは<code>&lt;ブランチ名&gt;</code>になります。</p>',3),E={},G=(0,o(3744).Z)(E,[["render",function(e,r){const o=(0,u.up)("OutboundLink");return(0,u.wg)(),(0,u.iD)(u.HY,null,[t,(0,u._)("p",null,[(0,u._)("a",c,[s,(0,u.Wm)(o)]),h,l,n]),i,(0,u._)("ol",null,[a,(0,u._)("li",null,[b,(0,u._)("a",d,[k,(0,u.Wm)(o)]),p]),(0,u._)("li",null,[f,(0,u._)("a",m,[g,(0,u.Wm)(o)]),_,H,D,y,U,w,v])]),A],64)}]])},3744:(e,r)=>{r.Z=(e,r)=>{for(const[o,u]of r)e[o]=u;return e}},2745:(e,r,o)=>{o.r(r),o.d(r,{data:()=>u});const u={key:"v-34678a59",path:"/docs/admin/push-docker-hub.html",title:"GitHub Actionsを使用してDocker Hubへpushする方法",lang:"ja-JP",frontmatter:{},excerpt:"",headers:[{level:2,title:"自分のDocker Hubリポジトリにpushするように設定する方法",slug:"自分のdocker-hubリポジトリにpushするように設定する方法",children:[]},{level:2,title:"pushする方法",slug:"pushする方法",children:[]}],filePathRelative:"docs/admin/push-docker-hub.md",git:{updatedTime:1634826112e3,contributors:[{name:"syuilo",email:"Syuilotan@yahoo.co.jp",commits:1}]}}}}]);