import Mock from "mockjs";
import avatar from "@/assets/avatar.jpg"
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar,
    siteTitle: "我的个人空间",
    github: "https://github.com/pandora9518",
    qq: "1744753754",
    qqQrCode:avatar,
    weixin: "yh777bao",
    weixinQrCode:avatar,
    mail: "duyi@gmail.com",
    icp: "黑ICP备17001719号",
    githubName: "DuYi-Edu",
    favicon: avatar,
  },
});

