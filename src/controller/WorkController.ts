/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-10-18 04:51:32
 * @LastEditors: Miya
 * @LastEditTime: 2020-11-04 11:31:13
 * @Description: 项目模块接口
 * @FilePath: \LandingPagec:\Users\Platinum Prism\Documents\GitHub\Kagura-Landing-Backend\src\controller\WorkController.ts
 */
const WorkModel = require('../model/WorkModel');

/**
 *    id: 项目 ID
 *    avatar: 封面图片
 *    title: 标题
 *    tag: 标签
 *    intro: 简介
 *    content: 正文
 *    preview: 演示地址
 *    source: 源码地址
 *    lastupdate: 最后更新时间
 *    version: 版本
 *    status: 状态(-1: 已停止维护,0: 未完成,1: 正在维护)
 */
class Work {
  // 新建一个项目
  public static async addNewWork(ctx: {
    request: {
      body: {
        id: number;
        avatar: string;
        title: string;
        tag: string[];
        intro: string;
        content: string;
        preview: string;
        source: string;
        lastupdate: string;
        version: string;
        status: string;
      };
    };
    body: { code: number; msg: string };
  }) {
    const result = new WorkModel({
      id: ctx.request.body.id,
      avatar: ctx.request.body.avatar,
      title: ctx.request.body.title,
      tag: ctx.request.body.tag,
      intro: ctx.request.body.intro,
      content: ctx.request.body.content,
      preview: ctx.request.body.preview,
      source: ctx.request.body.source,
      lastupdate: ctx.request.body.lastupdate,
      version: ctx.request.body.version,
      status: ctx.request.body.status,
    });
    try {
      await result.save();
      return (ctx.body = {
        code: 1,
        msg: 'successed',
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }

  // 查找所有项目或指定条数项目
  public static async getWork(ctx: {
    request: { body: { limit: number } };
    body: { code: number; msg: string[] | string };
  }) {
    const limit = Number(ctx.request.body.limit);
    const result = await WorkModel.find().limit(limit).sort({ _id: -1 });
    try {
      return (ctx.body = {
        code: 1,
        msg: result,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }

  // 根据ID查找项目
  public static async getWorkByID(ctx: {
    request: { body: { id: string } };
    body: { code: number; msg: string | string[] };
  }) {
    const result = await WorkModel.find({ _id: ctx.request.body.id });
    try {
      return (ctx.body = {
        code: 1,
        msg: result,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }

  // 修改项目内容
  public static async updateWork(ctx: {
    request: {
      body: {
        id: string;
        avatar: string;
        title: string;
        tag: string[];
        intro: string;
        content: string;
        preview: string;
        source: string;
        lastupdate: string;
        version: string;
        status: string;
      };
    };
    body: { code: number; msg: string | string[] };
  }) {
    const result = await WorkModel.updateOne(
      { _id: ctx.request.body.id },
      {
        $set: {
          avatar: ctx.request.body.avatar,
          title: ctx.request.body.title,
          tag: ctx.request.body.tag,
          intro: ctx.request.body.intro,
          content: ctx.request.body.content,
          preview: ctx.request.body.preview,
          source: ctx.request.body.source,
          lastupdate: ctx.request.body.lastupdate,
          version: ctx.request.body.version,
          status: ctx.request.body.status,
        },
      }
    );
    try {
      return (ctx.body = {
        code: 1,
        msg: result,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }

  // 删除项目
  public static async deleteWork(ctx: {
    request: { body: { id: string } };
    body: { code: number; msg: string | string[] };
  }) {
    const result = await WorkModel.deleteOne({ _id: ctx.request.body.id });
    try {
      return (ctx.body = {
        code: 1,
        msg: result,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        msg: err,
      });
    }
  }
}

module.exports = Work;
