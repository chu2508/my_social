import IUserProfile from "@src/domain/types/IUserProfile";

/**
 * 获取当前用户信息
 * @return UserProfile
 */
export const getCurrentUser = async (): Promise<IUserProfile> => {
  return {
    id: "0",
    nickname: "游客",
    isTourist: true
  };
};
