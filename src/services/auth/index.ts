import { createTouristUserProfile } from "@src/domain/UserProfile";
import IUserProfile from "@src/types/IUserProfile";

/**
 * 获取当前用户信息
 * @return UserProfile
 */
export const getCurrentUser = async (): Promise<IUserProfile> => {
  return createTouristUserProfile()
};
