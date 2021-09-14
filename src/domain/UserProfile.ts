import IUserProfile from '@src/types/IUserProfile';

export const createTouristUserProfile = (): IUserProfile => {
  return {
    id: "0",
    nickname: "游客",
    isTourist: true
  };
}