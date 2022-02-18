import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  loading: false,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.profile = null;
        draft.loading = false;
      });
    case '@user/USER_UPDATE_SUCCESS':
      return produce(state, draft => {
        draft.loading = false;
        draft.profile = action.payload.profile;
      });
    case '@user/USER_UPDATE_REQUEST':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@user/USER_UPDATE_FAILURE':
      return produce(state, draft => {
        draft.loading = false;
      });
    default:
      return state;
  }
}
