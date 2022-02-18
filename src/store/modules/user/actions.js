export function userUpdateRequest(data) {
  return {
    type: '@user/USER_UPDATE_REQUEST',
    payload: { data },
  };
}

export function userUpdateSuccess(profile) {
  return {
    type: '@user/USER_UPDATE_SUCCESS',
    payload: { profile },
  };
}

export function userUpdateFailure() {
  return {
    type: '@user/USER_UPDATE_FAILURE',
  };
}
