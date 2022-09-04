const FETCH_USERS = "FETCH_USERS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
interface UserState {
  users: any;
  loading: boolean;
  error: null | boolean;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

interface UserAction{
	type:string,
	payload?:any
}
export const UserReducer = (state = initialState, action:UserAction): UserState => {
  switch (action.type) {
    case FETCH_USERS:
      return { loading: true, error: null, users: [] };
		case FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
		case FETCH_USERS_ERROR:
      return { loading: false, error: action.payload,users: [] };
		default:
			return state
  }
};
