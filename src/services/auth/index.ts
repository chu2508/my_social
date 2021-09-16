import IUserProfile from "@src/domain/types/IUserProfile";
import Taro from "@tarojs/taro";

/**
 * 获取当前用户信息
 * @return UserProfile
 */
export const getCurrentUser = async (): Promise<IUserProfile> => {
  // const {code} = await Taro.login();
  // const {data: res} = await Taro.request({
  //   url: "/api/auth/wx_login",
  //   method: "GET",
  //   data: { authCode: code }
  // });
  // return res;
  return {
    id: "0",
    nickname: "游客",
    isTourist: true
  };
};
