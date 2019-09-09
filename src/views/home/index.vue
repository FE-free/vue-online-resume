<!--
 * @Author: honghong
 * @Date: 2019-09-04 14:02:36
 * @LastEditors: honghong
 * @LastEditTime: 2019-09-09 10:47:10
 * @Description: 首页
 * @email: 3300536651@qq.com
 -->
<template>
  <div class="home">
    <div class="banner"></div>
    <div class="classify">
      <a-checkable-tag
        color="blue"
        v-model="checkedList.checkedFe"
        @change="handleChange('checkedFe')"
      >前端</a-checkable-tag>
      <a-checkable-tag
        color
        v-model="checkedList.checkedJava"
        @change="handleChange('checkedJava')"
      >Java</a-checkable-tag>
    </div>
    <div class="template-list" v-if="checkedList.checkedFe===true">
      <a-row :gutter="16">
        <a-col
          :span="6"
          v-for="(template,i) in templates"
          v-bind:key="template.id"
          v-bind:class="{marginT: i>3}"
        >
          <resume-item
            :id="template.id"
            :title="template.title"
            :imgUrl="template.img"
            :description="template.description"
          ></resume-item>
        </a-col>
      </a-row>
    </div>
    <div class="template-list" v-if="checkedList.checkedJava===true">正在开发中</div>
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
      checkedList: {
        checkedFe: true,
        checkedJava: false
      },
      banner1: banner1,
      templates: [
        {
          id: 'markdown',
          img: require('@/assets/images/markdown.jpg'),
          title: 'markdown风格',
          description: '100人'
        },
        {
          id: '1',
          img: require('@/assets/images/3.jpeg'),
          title: '简约风格',
          description: '200人'
        }
      ]
    };
  },
  methods: {
    handleChange(checkedItem) {
      for (let i = 0; i < this.checkedList.length; i++) {
        this.checkedList[i] = false;
        if (this.checkedList[i] === checkedItem) {
          this.checkedList[i] = true;
        }
      }

      console.log(checkedItem, 'checked');
      console.log(this.checkedList, 'checked');
    },
    goMarkdown() {
      this.$router.push('/markdown');
    }
  },
  created() {},
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
.template-list {
  background-color: #ececec;
  padding: 20px;
}
</style>
