import { useDispatch, useSelector } from 'react-redux';
import { setSignOut, setUser } from '../store/slices/userSlice';
import { RootState, userPersistor } from '../store/store';

export interface IAuthResponse {
  token: string;
  user: {
    email: string;
    fullName: string;
  };
}

const useAuth = () => {
  const { token, email, fullName } = useSelector(
    (state: RootState) => state.user,
  );

  const dispatch = useDispatch();

  const signIn = (res: IAuthResponse) => {
    // Saving in localStorage with Redux Persist
    dispatch(
      setUser({
        token: res.token,
        email: res.user.email,
        fullName: res.user.fullName,
      }),
    );
  };

  const signOut = async () => {
    dispatch(setSignOut());

    await userPersistor.purge();
  };

  return { token, email, fullName, signIn, signOut };
};

export default useAuth;
