import IUserProfile from "@src/domain/types/IUserProfile";
import { createTouristUserProfile } from "@src/domain/UserProfile";

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
  return createTouristUserProfile();
};
