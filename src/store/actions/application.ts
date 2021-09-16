import IUserProfile from "@src/app/types/IUserProfile";

export const types = {
  APP_INIT: "@app/init",
  SET_USER_PROFILE: "@app/setUserProfile"
};

export const appInitAction = () => ({ type: types.APP_INIT });
export type AppInitAction = ReturnType<typeof appInitAction>;

export const setUserProfileAction = (payload: IUserProfile) => ({
  type: types.SET_USER_PROFILE,
  payload
});
export type SetUserProfileAction = ReturnType<typeof setUserProfileAction>;
