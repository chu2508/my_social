import IUserProfile from "@src/types/IUserProfile";

export const types = {
 APP_INIT: "@app/init",
  SET_USER_PROFILE: "@app/setUserProfile"
} as const;// types as const @see: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference

export const appInitAction = () => ({ type: types.APP_INIT });
export type AppInitAction = ReturnType<typeof appInitAction>;

export const setUserProfileAction = (payload: IUserProfile) => ({
  type: types.SET_USER_PROFILE,
  payload
});
export type SetUserProfileAction = ReturnType<typeof setUserProfileAction>;

export type AppActions = AppInitAction | SetUserProfileAction;
