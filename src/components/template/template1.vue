<!--
 * @Author: honghong
 * @Date: 2019-09-02 10:39:35
 * @LastEditors: honghong
 * @LastEditTime: 2019-09-10 16:31:05
 * @Description: 模板1
 * @email: 3300536651@qq.com
 -->

<template>
  <div class="template-wrap">
    <div class="template-inner">
      <div class="template" :id="id">
        <h1 class="edit-ele edit-item" :contenteditable="true">{{ name }}</h1>
        <img :src="imgUrl" style="display:none;" width="80" height="80" alt="avator" />
        <p class="edit-item">
          <strong class="edit-ele" :contenteditable="true">求职意向:</strong>
          <span class="edit-ele" :contenteditable="true">前端开发工程师</span>
        </p>
        <ul>
          <li class="edit-item">
            <ul class="edit-toolbar">
              <li>
                <a-icon class="edit-icon" type="plus-circle" />
              </li>
              <li>
                <a-icon class="edit-icon" type="up-circle" />
              </li>
              <li>
                <a-icon class="edit-icon" type="down-circle" />
              </li>
              <li>
                <a-icon class="edit-icon" type="delete" />
              </li>
            </ul>
            <div class="edit-div">
              <div class="item-title">
                <a-icon class="item-icon" type="smile" />
                <div class="item-text" :contenteditable="true">基本信息</div>
              </div>
            </div>
          </li>
          <li class="edit-item">
            <ul class="edit-toolbar">
              <li>
                <a-icon class="edit-icon" type="plus-circle" />
              </li>
              <li>
                <a-icon class="edit-icon" type="up-circle" />
              </li>
              <li>
                <a-icon class="edit-icon" type="down-circle" />
              </li>
              <li>
                <a-icon class="edit-icon" type="delete" />
              </li>
            </ul>
            <div class="edit-div">
              <div class="item-title">
                <a-icon class="item-icon" type="smile" />
                <div class="item-text" :contenteditable="true">个人技能</div>
              </div>
              <div class="item-content">
                <p :contenteditable="true">1. 熟练掌握HTML/CSS布局，熟练运用DIV+CSS制作符合W3C标准的页面并解决浏览器版本兼容问题;</p>
                <p :contenteditable="true">2. 熟练ajax、fetch前端交互技术，熟悉jsonp跨域，并且能够运用它们解决跨域问题;</p>
              </div>
            </div>
          </li>
          <li class="edit-item">
            <ul class="edit-toolbar">
              <li>
                <a-icon class="edit-icon" type="plus-circle" v-on:click="add('work')" />
              </li>
              <li>
                <a-icon class="edit-icon" type="up-circle" />
              </li>
              <li>
                <a-icon class="edit-icon" type="down-circle" />
              </li>
              <li>
                <a-icon class="edit-icon" type="delete" />
              </li>
            </ul>
            <div class="edit-div">
              <div class="item-title">
                <a-icon class="item-icon" type="smile" />
                <div class="item-text" :contenteditable="true">工作经历</div>
              </div>
              <div class="item-content">
                <p :contenteditable="true">1. 熟练掌握HTML/CSS布局，熟练运用DIV+CSS制作符合W3C标准的页面并解决浏览器版本兼容问题;</p>
                <p :contenteditable="true">2. 熟练ajax、fetch前端交互技术，熟悉jsonp跨域，并且能够运用它们解决跨域问题;</p>
                <div v-for="item in works" v-bind:key="item">
                  <span>20XX.XX-20XX.XX{{item}}</span>
                  <span>XX科技有限公司</span>
                  <span>前端开发</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import imgUrl from '@/assets/images/1.jpeg';
  export default {
    name: 'tempate1',
    data() {
      return {
        works: [],
        id: 'template1',
        message: '400000',
        name: '青成',
        imgUrl: imgUrl, // 头像
        editName: 'N' // 名字
      };
    },
    methods: {
      exportPdf: function() {},
      add: function(type) {
        switch (type) {
          case 'work':
            this.works.push(1);
            break;
          default:
            break;
        }
      }
    },
    computed: {},
    components: {}
  };
</script>

<style>
  .template-wrap {
    background: #fafafa;
  }
  
  .template-inner {
    border: 1px solid #e8e8e8;
  }
  
  .template {
    width: 100%;
    padding: 30px;
    background: #fff;
  }
  
  .template:focus-within {
    background: gray;
  }
  
  [contenteditable]:focus {
    border-color: #40a9ff;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
  }
  
  .ul {
    padding: 0;
  }
  
  li {
    list-style: none;
  }
  
  .edit-item {
    position: relative;
    border: 2px dashed transparent;
    margin-bottom: 10px;
    padding: 5px 0;
  }
  
  .edit-div {}
  
  .edit-item:hover {
    background-color: #f2f4f5;
    border: 2px dashed #ddd;
  }
  
  .edit-div:focus-within {
    background-color: #fff;
  }
  
  .edit-toolbar {
    position: absolute;
    left: -24px;
    top: 30px;
    transition: all .3s;
    opacity: 0;
    padding-right: 20px;
    visibility: hidden;
  }
  
  .edit-item:hover .edit-toolbar,
  .edit-item:focus .edit-toolbar {
    top: 0;
    opacity: 1;
    visibility: visible;
  }
  
  .edit-toolbar .edit-icon {
    cursor: pointer;
    padding: 2px;
    background: #ddd;
    color: #fff;
    border-radius: 2px;
  }
  
  .edit-toolbar .edit-icon:hover {
    background: #1890ff;
    color: #fff;
  }
  
  .item-title {
    display: flex;
  }
  
  .item-icon {
    height: 25px;
    line-height: 30px;
    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer;
  }
  
  .item-text {
    font-weight: bold;
    border-bottom: 1px solid #333;
    flex: 1;
  }
</style>
