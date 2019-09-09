<!--
 * @Author: honghong
 * @Date: 2019-09-02 11:03:15
 * @LastEditors: honghong
 * @LastEditTime: 2019-09-06 14:23:57
 * @Description: 模板编辑
 * @email: 3300536651@qq.com
 -->
<template>
  <div>
    <div class="toolbar">
      <span class="toolbar-title">简约风格</span>
      <a-button
        class="toolbar-btn"
        type="primary"
        v-on:click="exportTemplate('template1','我的模版')"
      >导出模版</a-button>
      <a-button class="toolbar-btn" type="default" v-on:click="backHome()">回到首页</a-button>
    </div>

    <component v-bind:is="currentTabComponent"></component>
  </div>
</template>

<script>
import Template1 from '@/components/template/template1';
import { exportPdf } from '@/utils/utils';
export default {
  name: 'resume-edit',
  props: [],
  data() {
    return {};
  },
  methods: {
    exportTemplate(id, fileName) {
      exportPdf(id, fileName, false);
    },
    backHome() {
      this.$router.push('/');
    }
  },
  computed: {
    currentTabComponent: function() {
      return 'resumeTemplate' + this.$route.params.id;
    }
  },
  components: {
    resumeTemplate1: Template1
  }
};
</script>

<style>
.toolbar {
  text-align: right;
}
</style>
