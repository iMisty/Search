/*
 * @Author: Miya
 * @Date: 2020-08-05 22:53:12
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-13 23:19:44
 * @Description: Setting Page In Admin
 * @FilePath: /Single-Search/src/layout/admin/setting.tsx
 */

import { Component, Vue } from 'vue-property-decorator';
// checkbox
import checkbox from '@/components/Admin/input-checkbox';

interface Setting {
  background: string;
  search_logo: string;
  blur_style: boolean;
  hitokoto: boolean;
  copyright: {
    author: string;
    website: string;
  };
  start_date: string;
}
@Component({
  components: {
    'input-checkbox': checkbox
  }
})
export default class SettingsAdmin extends Vue {
  // tips图标
  private tipsicon: object = require('@/assets/tips.svg');
  // 设置数据
  private settingData: Setting = {
    background: '',
    search_logo: '',
    blur_style: false,
    hitokoto: false,
    copyright: {
      author: '',
      website: ''
    },
    start_date: ''
  };

  // 获取数据
  private getSettingData() {
    const getDataInLocalStorage = localStorage.getItem('setting_data');
    if (getDataInLocalStorage === null) {
      const getDataInVuex = this.$store.state.settings.home;
      this.settingData = getDataInVuex;
      console.log(`获取设置数据： ${JSON.stringify(this.settingData)}`);
      return;
    }
    this.settingData = JSON.parse(getDataInLocalStorage);
    console.log(`获取设置数据： ${JSON.stringify(this.settingData)}`);
  }

  private mounted() {
    this.getSettingData();
  }

  private render() {
    return (
      <div class="content">
        <div class="admin__settings">
          {/* 首页背景图片 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>背景图片</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">依然没什么用</div>
              </section>
            </section>
            <input
              type="text"
              name="setting"
              value={this.settingData.background}
              v-model={this.settingData.background}
            />
          </div>
          {/* 首页 logo */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>搜索处logo</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">依然没什么用</div>
              </section>
            </section>
            <input
              type="text"
              name="setting"
              value={this.settingData.search_logo}
              v-model={this.settingData.search_logo}
            />
          </div>
          <input-checkbox
            title="毛玻璃效果"
            tiptext={true}
            status={this.settingData.blur_style}
            disabled={true}
          ></input-checkbox>
          <input-checkbox
            title="一言"
            tiptext={false}
            status={this.settingData.hitokoto}
          ></input-checkbox>
          {/* 版权信息 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>作者信息</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">依然没什么用</div>
              </section>
            </section>
            <input
              type="text"
              name="setting"
              value={this.settingData.copyright.author}
              v-model={this.settingData.copyright.author}
            />
            <input
              type="text"
              name="setting"
              value={this.settingData.copyright.website}
              v-model={this.settingData.copyright.website}
            />
          </div>
          {/* 网站开始时间 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>开始时间</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">依然没什么用</div>
              </section>
            </section>
            <input
              type="text"
              name="setting"
              value={this.settingData.start_date}
              v-model={this.settingData.start_date}
            />
          </div>
        </div>
      </div>
    );
  }
}
