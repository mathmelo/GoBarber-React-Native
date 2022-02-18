export function signInRequest(email, password, navigate) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password, navigate },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export default function signUpRequest(name, email, password, navigate) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password, navigate },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
