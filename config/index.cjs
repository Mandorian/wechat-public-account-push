/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxdad470d919ccfbf7',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '44d0fbaab13278639727694327fdeab8',
  
  TIAN_API: {
  
  PROVINCE: '山东',
  CITY: '东营',

  USERS: [
    {
      // 想要发送的人的名字
      name: '雪宝',  
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o3LBk6doMiyQWscOpq8Kkh7MFSxw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'jCfLmz8iWl7shQt-2O3w6MMF7NLZfX-ZiZ_x0LQQFKI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11.24',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '雪宝', year: '2002', date: '10-12',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '雪宝', year: '2002', date: '11-16',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '10-17',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-12-06' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  // CALLBACK_TEMPLATE_ID: 'jCfLmz8iWl7shQt-2O3w6MMF7NLZfX-ZiZ_x0LQQFKI',

  // CALLBACK_USERS: [
  //   {
  //     name: '自己',
  //     // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
  //     id: 'o3LBk6S6yI-HYvPwvi7dqKlMgjzY',
  //   }
  // ],

}
    module.exports = USER_CONFIG

