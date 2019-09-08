<!--
 * @Author: honghong
 * @Date: 2019-09-04 14:02:36
 * @LastEditors: honghong
 * @LastEditTime: 2019-09-06 14:29:06
 * @Description: 首页
 * @email: 3300536651@qq.com
 -->
<template>
  <div class="home">
    <div class="banner">
      <img class="banner-item" :src="banner1" width="100%" />
    </div>
    <div class="classify">
      <a-checkable-tag color="blue" v-model="checkedFe" @change="handleChange">前端</a-checkable-tag>
      <a-checkable-tag color v-model="checkedJava" @change="handleChange">Java</a-checkable-tag>
    </div>
    <div style="background-color: #ececec; padding: 20px;">
      <a-row :gutter="16">
        <a-col
          :span="6"
          v-for="(template,i) in templates"
          v-bind:key="template.id"
          v-bind:class="{marginT: i>3}"
        >
          <resume-item
            :title="template.title"
            :imgUrl="template.img"
            :description="template.description"
          ></resume-item>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import banner1 from '@/assets/images/2.jpeg';
import ResumeItem from '@/components/resumeitem';
import Template1 from '@/components/template/template1';
export default {
  name: 'home',
  data() {
    return {
      checkedFe: true,
      checkedJava: false,
      banner1: banner1,
      templates: [
        {
          id: 1,
          img: require('@/assets/images/3.jpeg'),
          title: '前端模版1',
          description: '100人'
        },
        {
          id: 2,
          img: require('@/assets/images/3.jpeg'),
          title: '前端模版2',
          description: '200人'
        },
        {
          id: 3,
          img: require('@/assets/images/3.jpeg'),
          title: '前端模版3',
          description: '50人'
        },
        {
          id: 4,
          img: require('@/assets/images/3.jpeg'),
          title: '前端模版4',
          description: '100人'
        },
        {
          id: 5,
          img: require('@/assets/images/3.jpeg'),
          title: '前端模版5',
          description: '100人'
        },
        {
          id: 6,
          img: require('@/assets/images/3.jpeg'),
          title: '前端模版6',
          description: '100人'
        },
        {
          id: 7,
          img: require('@/assets/images/3.jpeg'),
          title: '前端模版7',
          description: '100人'
        }
      ]
    };
  },
  methods: {
    handleChange(checked) {}
  },
  computed: {},
  components: {
    'resume-item': ResumeItem,
    'resume-template1': Template1
  }
};
</script>

<style>
.banner img {
  height: 200px;
  object-fit: cover;
}

.marginT {
  margin-top: 20px;
}

.classify {
  padding-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.classify .ant-tag {
  padding: 0 20px;
  border-radius: 30px;
}
</style>
