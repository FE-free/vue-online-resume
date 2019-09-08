<!--
 * @Author: honghong
 * @Date: 2019-09-02 10:39:35
 * @LastEditors: honghong
 * @LastEditTime: 2019-09-06 14:46:42
 * @Description: 模板1
 * @email: 3300536651@qq.com
 -->

<template>
  <div class="template-wrap">
    <div class="template-inner">
      <div class="template" :id="id">
        <h1 class="edit-ele" :contenteditable="true">{{ name }}</h1>
        <img :src="imgUrl" width="80" height="80" alt="avator" />
        <p>
          <strong class="edit-ele" :contenteditable="true">求职意向:</strong>
          <span class="edit-ele" :contenteditable="true">前端开发工程师</span>
        </p>
        <ul>
          <li>
            <div class="item-title">
              <img class="item-icon" :src="imgUrl" />
              <div class="item-text" :contenteditable="true">求职意向</div>
            </div>
          </li>
          <li>
            <div class="item-title">
              <img class="item-icon" :src="imgUrl" />
              <div class="item-text" :contenteditable="true">个人技能</div>
            </div>
            <div class="item-content">
              <p :contenteditable="true">1. 熟练掌握HTML/CSS布局，熟练运用DIV+CSS制作符合W3C标准的页面并解决浏览器版本兼容问题;</p>
              <p :contenteditable="true">2. 熟练ajax、fetch前端交互技术，熟悉jsonp跨域，并且能够运用它们解决跨域问题;</p>
              <p :contenteditable="true">3. 熟练使用Flex，Rem,百分比等进行移动端布局。有效解决和改善手机适配问题；</p>
              <p :contenteditable="true">4. 熟练使用VueJs+Vuex，进行组件化开发,实现模块化管理；</p>
              <p :contenteditable="true">5. 熟练运用熟练mint-ui，element-ui等组件库与Ant-Design UI与Bootstrap等框架；</p>
              <p :contenteditable="true">6. 熟练使用React框架，参与过React项目的开发；</p>
              <p :contenteditable="true">7. 熟练掌握JQuery，能够熟练使用swiper，lazyLoad等插件的使用；</p>
              <p :contenteditable="true">8. 熟练掌握微信小程序的开发，了解微信公众号的开发；</p>
              <p :contenteditable="true">9.了解nodeJs+Express+Mongodb，开发后端。</p>
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
      id: 'template1',
      message: '400000',
      name: '青成',
      imgUrl: imgUrl, // 头像
      editName: 'N' // 名字
    };
  },
  methods: {
    exportPdf: function() {}
  },
  computed: {},
  components: {}
};
</script>

<style>
.template-wrap {
  background: #fafafa;
  padding-top: 20px;
}

.template-inner {
  border: 1px solid #e8e8e8;
}

.template {
  padding: 30px;
  background: #fff;
}

[contenteditable]:focus {
  background: gray;
  outline: none;
}

li {
  list-style: none;
}

.item-title {
  display: flex;
}

.item-icon {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 5px;
}

.item-text {
  font-weight: bold;
  border-bottom: 1px solid #333;
  flex: 1;
}
</style>
