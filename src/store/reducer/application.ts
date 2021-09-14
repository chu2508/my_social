import { createTouristUserProfile } from "@src/domain/UserProfile";
import { AppActions, types } from "../actions/application";

const initState = {
  userProfile: createTouristUserProfile()
};

export type AppState = typeof initState;

export default function applicationReducer(
  state: AppState = initState,
  action: AppActions
): AppState {
  switch (action.type) {
    case types.SET_USER_PROFILE:
      return { ...state, userProfile: action.payload };
    default:
      return state;
  }
}
