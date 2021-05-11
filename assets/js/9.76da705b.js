(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{372:function(s,t,a){"use strict";a.r(t);var n=a(26),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"创建gh-pages分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建gh-pages分支"}},[s._v("#")]),s._v(" 创建gh-pages分支")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-image.tsanfer.xyz/img/20200316170443.png",alt:""}})]),s._v(" "),a("p",[s._v("这时Github已经自动部署gh-pages分支为Github pages的生成源")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-image.tsanfer.xyz/img/20200316170600.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"deploy-sh部署文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-sh部署文件"}},[s._v("#")]),s._v(" deploy.sh部署文件")]),s._v(" "),a("p",[s._v("每当 Github 仓库更新时，会触发 Travis CI 执行 "),a("code",[s._v("deploy.sh")]),s._v(" 脚本")]),s._v(" "),a("p",[s._v("创建一个如下的 "),a("code",[s._v("deploy.sh")]),s._v(" 文件（请自行判断去掉高亮行的注释）:")]),s._v(" "),a("p",[s._v("在项目根目录下创建")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── README.md     // Github项目展示文件\n├── docs     //vuepress项目根目录\n│   ├── .vuepress      //存放核心内容的文件夹\n│   │   ├── public     //存放静态文件，如图片等\n│   │   └── config.js     //设定顶部导航栏、侧边导航栏等项目配置的核心文件\n│   ├── pages      //存放markdown页面的文件\n│   ├── README.md     //vuepress首页展示用的markdown文件\n├── deploy.sh     //用于编写TravisCI上传、发布的脚本文件\n├── LISENSE     //许可证文件\n├── package.json     //Node.js项目描述文件\n└── .travis.yml\t//Travis CI 自动部署文件\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs:build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是发布到自定义域名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'www.example.com' > CNAME")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@github.com:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("USERNAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("REPO"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(".git master:gh-pages\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比如")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:Tsanfer/VuePress-GithubPages-TravisCI.git master:gh-pages")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("p",[s._v("上面的 git 地址其实就是仓库的SSH地址")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-image.tsanfer.xyz/img/20200316171506.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"travis-ci-部署文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci-部署文件"}},[s._v("#")]),s._v(" Travis CI 部署文件")]),s._v(" "),a("p",[s._v("在项目的根目录创建一个名为 "),a("code",[s._v(".travis.yml")]),s._v(" 的文件")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n├── "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("README")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("md     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Github项目展示文件")]),s._v("\n├── docs     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//vuepress项目根目录")]),s._v("\n│   ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vuepress      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//存放核心内容的文件夹")]),s._v("\n│   │   ├── "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//存放静态文件，如图片等")]),s._v("\n│   │   └── config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设定顶部导航栏、侧边导航栏等项目配置的核心文件")]),s._v("\n│   ├── pages      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//存放markdown页面的文件")]),s._v("\n│   ├── "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("README")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("md     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//vuepress首页展示用的markdown文件")]),s._v("\n├── deploy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//用于编写TravisCI上传、发布的脚本文件")]),s._v("\n├── "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LISENSE")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//许可证文件")]),s._v("\n├── "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Node.js项目描述文件")]),s._v("\n└── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("travis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("yml\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Travis CI 自动部署文件")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node_js\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node_js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" lts/*\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn install "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm ci")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn docs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("build "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm run docs:build")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pages\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("skip_cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("local_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("github_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("keep_history")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这里指的是部署前的源文件分支")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("上面的 github_token 需要在 Github 上生成")]),s._v(" "),a("h2",{attrs:{id:"生成和使用-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成和使用-token"}},[s._v("#")]),s._v(" 生成和使用 Token")]),s._v(" "),a("h3",{attrs:{id:"生成token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成token"}},[s._v("#")]),s._v(" 生成Token")]),s._v(" "),a("p",[s._v("在 Settings --\x3e Developer settings --\x3e Personal access tokens 右上角 Generate new toekn 生成新Token 名字随便写，权限不清楚的可以全部选上，也可以参考我下面的配置")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-image.tsanfer.xyz/img/20200316174659.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-image.tsanfer.xyz/img/20200316174841.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-image.tsanfer.xyz/img/20200316175236.png",alt:""}})]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("下面的口令只出现一次，需及时保存")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-image.tsanfer.xyz/img/20200316175539.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"travis-ci-绑定和配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci-绑定和配置"}},[s._v("#")]),s._v(" Travis CI 绑定和配置")]),s._v(" "),a("h3",{attrs:{id:"绑定-github-账号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定-github-账号"}},[s._v("#")]),s._v(" 绑定 Github 账号")]),s._v(" "),a("p",[s._v("在 Travis CI 里面 Settings ---\x3e Repositories 点击  Manage repositories on GitHub")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-image.tsanfer.xyz/img/20200316175949.png",alt:""}})]),s._v(" "),a("p",[s._v("选择给权限的仓库，为了方便也可以把所有仓库的权限都给了")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-image.tsanfer.xyz/img/20200316180225.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"添加-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加-token"}},[s._v("#")]),s._v(" 添加 Token")]),s._v(" "),a("p",[s._v("在项目的 Settings --\x3e Environment Variables 中输入 Token")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node_js\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node_js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" lts/*\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn install "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm ci")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" yarn docs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("build "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm run docs:build")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pages\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("skip_cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("local_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("github_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("keep_history")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这里指的是部署前的源文件分支")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("ul",[a("li",[s._v("NAME : GITHUB_TOKEN （刚刚的 "),a("code",[s._v("github_token: $GITHUB_TOKEN")]),s._v(" 这个变量）")]),s._v(" "),a("li",[s._v("VALUE : ****刚刚的 Token****")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-image.tsanfer.xyz/img/20200316181315.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"推送到github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送到github"}},[s._v("#")]),s._v(" 推送到Github")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'初步完成'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@github.com:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Repo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(".git master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比如")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:Tsanfer/VuePress-GithubPages-TravisCI.git master")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完成"}},[s._v("#")]),s._v(" 完成")]),s._v(" "),a("p",[s._v("如果 Travis CI 触发成功构建没有问题的话就完成了")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-image.tsanfer.xyz/img/20200316183049.png",alt:""}})]),s._v(" "),a("blockquote",[a("p",[s._v("本文由"),a("a",{attrs:{href:"https://tsanfer.xyz",target:"_blank",rel:"noopener noreferrer"}},[s._v("Tsanfer's Blog"),a("OutboundLink")],1),s._v(" 发布！")])])])}),[],!1,null,null,null);t.default=e.exports}}]);