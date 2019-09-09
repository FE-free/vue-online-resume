<template>
  <div>
    <div class="toolbar">
      <span class="toolbar-title">markdown风格</span>
      <a-button class="toolbar-btn" type="primary" v-on:click="showModal()">导出模版</a-button>
      <a-button class="toolbar-btn" type="default" v-on:click="goHome()">返回首页</a-button>
    </div>
    <mavon-editor v-model="markdown" id="markdown-template" />
    <a-modal title="文件名称" v-model="visible" okText="导出模版" @ok="handleOk" :zIndex="2000">
      <a-input placeholder="请输入文件名称" v-model="fileName" />
    </a-modal>
  </div>
</template>
<script>
import { exportPdf } from '@/utils/utils';
export default {
  name: 'markdown-edit',
  data() {
    return {
      visible: false,
      fileName: '',
      // eslint-disable-next-line
      markdown: `
## 基本信息

- 青成/25岁/XX学校/本科
- 求职意向：web前端开发工程师
- 手机：1XX-XXX-XXX
- 邮箱：xxxxx@xx.com
- 工作经验：3年

## 职业技能
1. 前端基础扎实，掌握HTML5语义化标签、CSS3、Flex常用布局、JavasSript、TypeScript、ES6。
2. 熟悉vue、angular、ionic等常用的前端框架，熟练使用ng.ant.design、Bootstrap、material等UI控件。
3. 熟悉npm操作命令、sql常用语句，熟悉使用ngx-chart、swiper、ag-grid、jquery、ngx-admin、ng2-dragula、fullpage、SpreadJS在线Excel编辑、ckeditor等前端插件。
4、熟悉g2、echarts、hightchart、d3.js等可视化工具使用。
5. 熟悉使用git进行版本管理，jira、bugclose进行团队协作，compodoc、markdown进行文档和自动化部署，photoshop、axure进行设计，VSCode、webstom编辑代码，less预编译css代码。
6.熟悉web 单页面应用开发，GitHub开源过相关项目（80+star）。
7.了解Nodejs、express相关框架，了解Http协议。
8.保持持续学习、爱总结、爱分享。

## 工作经历 
2017/03~至今                        XX公司| web前端开发工程师
岗位职责:
1.负责平台组通用后台管理系统的搭建。
2.编写前端入职文档，培训和帮助前端新人如何使用平台和熟悉公司的技术栈。


2016/03~2017/03                    XX公司 | web前端开发工程师
岗位职责：
1.保质保量按时的完成多个项目的开发任务。
2.提取公共方法、统一样式，主动积极参与功能测试。
## 项目经历 
- 项目1：XX项目
- 项目描述：
描述该项目。

## 职责描述：
1. 描述职责。
2. 描述职责。



## 结语
感谢您花时间阅读我的简历，期待能有机会和您共事！
      `
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.visible = false;
      exportPdf('v-show-content', this.fileName, true);
    },
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>
<style scoped>
</style>
