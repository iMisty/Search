/*
 * @Author: Miya
 * @Date: 2020-07-23 15:38:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-08 18:38:07
 * @Description: file content
 * @FilePath: /Single-Search/src/components/Admin/user.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
// Button Component
import Button from '@/components/button';
import User from '@/model/user';
@Component({})
export default class UserAdmin extends Vue {
  // tips图标
  private tipsicon: object = require('@/assets/tips.svg');
  // 保存成功
  private statusSuccess: boolean = false;
  // 原始数据
  private userData: User = {
    name: '',
    sex: '',
    avatar: '',
    introduce: '',
    dark_style: false,
    default_search: ''
  };

  // 获取数据
  private getUserData() {
    const userData = this.$store.state.user;
    this.userData = userData;
    // 头像设置
    if (!userData.avatar) {
      this.userData.avatar = require('@/assets/female.svg');
    }
  }
  // 保存修改
  private handleSave() {
    console.log(`新数据：${JSON.stringify(this.userData)}`);
    this.$store.commit('set_user', this.userData);
    this.statusSuccess = true;

    // this.$store.dispatch('set_user', this.userData);
    // localStorage.setItem('user_info', JSON.stringify(this.userData));
  }

  private mounted() {
    this.getUserData();
  }

  private render() {
    return (
      // TODO: 拆分为组件
      <section class="content">
        <div class="admin__user">
          {/* 头像 */}
          <div class="admin__user--setting admin__user--avatar">
            <section class="admin__user--setting--title">
              <h5>头像</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">Test Text</div>
              </section>
            </section>
            <input
              type="text"
              name="avatar"
              value={this.userData.avatar}
              onBlur={() => (this.userData.avatar = this.userData.avatar)}
              v-model={this.userData.avatar}
            />
            <div class="admin__user--avatar--image">
              <img src={this.userData.avatar} />
            </div>
          </div>
          {/* 昵称 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>昵称</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">Test Text</div>
              </section>
            </section>
            <input
              type="url"
              name="setting"
              value={this.userData.name}
              v-model={this.userData.name}
            />
          </div>
          {/* 默认头像 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>默认头像</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">Test Text</div>
              </section>
            </section>
            <select
              class="admin__user--setting--select"
              v-model={this.userData.sex}
            >
              <option value="undefined">-- 就不告诉你 --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* 骚话 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>骚话</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">Test Text</div>
              </section>
            </section>
            <input
              type="text"
              name="setting"
              value={this.userData.introduce}
              v-model={this.userData.introduce}
            />
          </div>
          {/* 默认搜索引擎 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>默认搜索引擎</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">Test Text</div>
              </section>
            </section>
            <select
              class="admin__user--setting--select"
              value={this.userData.default_search}
            >
              <option value="google">谷歌</option>
              <option value="bing">必应</option>
              <option value="baidu">百度</option>
            </select>
          </div>
          {/* 适配颜色模式 */}
          <div class="admin__user--setting">
            <section class="admin__user--setting--title">
              <h5>适配颜色模式</h5>
              <section class="admin__user--setting--tips">
                <img
                  class="admin__user--setting--tips--image"
                  src={this.tipsicon}
                />
                <div class="admin__user--setting--tips--text">Test Text</div>
              </section>
            </section>
            <section class="admin__user--setting--checkpoint">
              <section class="admin__user--setting--checkpoint--item">
                {/* switch组件 */}
                <input
                  class="admin__user--setting--checkpoint--switch"
                  type="checkbox"
                  name="style"
                  value={this.userData.default_search}
                  v-model={this.userData.default_search}
                />
                {this.userData.default_search ? (
                  <p>暗色模式</p>
                ) : (
                  <p>亮色模式</p>
                )}
              </section>
            </section>
          </div>
          <div class="admin__user--submit">
            <Button onHandleClick={() => this.handleSave()}>保存</Button>
            {/* TODO: 优化样式 */}
            {this.statusSuccess ? <p>1</p> : <p>2</p>}
          </div>
        </div>
      </section>
    );
  }
}
