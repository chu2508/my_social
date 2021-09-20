import { getCurrentUser } from "@src/services/auth/index";
import getServiceToken from "@src/tools/getServiceToken";
import IUserProfile from "@src/types/IUserProfile";
import { useEffect, useState } from "react";

const touristProfile = {
  id: "0",
  isTourist: true,
  nickname: "Tourist"
};

/**
 * 用户认证服务，返回用户的账户相关信息，以及登录注册方法
 * @returns
 */
export default function useAuthenticationService() {
  const [profile, setProfile] = useState<IUserProfile>(touristProfile);

  const signUp = async (phone: number) => {};
  const signIn = async () => {
    setProfile({ id: "1", nickname: "Dirac", isTourist: false });
  };
  const signOut = async () => {
    setProfile({ ...touristProfile });
  };

  useEffect(() => {
    getCurrentUser().then(setProfile);
  }, []);

  return {
    profile,
    signUp,
    signIn,
    signOut
  };
}

export const AuthenticationService = getServiceToken(useAuthenticationService);
