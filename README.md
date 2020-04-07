<!--
 * @Author: honghong
 * @Date: 2019-09-06 17:47:36
 * @LastEditors: honghong
 * @LastEditTime: 2019-09-10 17:48:57
 * @Description: 
 * @email: 3300536651@qq.com
 -->

# 开发者在线简历 vue-online-resume
固定排版，不固定数量,可以根据模版在线编辑和修改,导出pdf,
> vue online edit resume export pdf, edit markdown export resume

## 预览地址:
- 码云预览速度更快：http://perfect_l.gitee.io/vue-online-resume
- github预览: https://fe-free.github.io/vue-online-resume/

## 学习
- vue-loader 没有 vue-template-compiler 
编译.vue文件
```bash
npm install ant-design-vue --save
```
- vue-style-loader 解析、编译vue单文件组件中的样式
- vue-loader 解析、编译vue单文件组件

-  HTML5全局 contenteditable 属性

## 插件
https://github.com/sparksuite/simplemde-markdown-editor

## 规范
### commit 提交 Git 时规范
## 问题
- gh-pages 出现404 

 mode: 'hash', // 设置为history `gh-pages` 出现404
 如果想设置为history，是需要服务端设置的，而github 只是静态资源，不支持Nodejs、Java、Nginx等设置
- html2canvas 导出pdf宽度不完整
参考: https://www.jianshu.com/p/570c84ee2e8d
## 不足之处
导出的pdf是通过canvas截图，不支持搜索文字

## 参考文章
- [【commit规范和自动生成changelog】](https://juejin.im/post/5bd2debfe51d457abc710b57#heading-4)
