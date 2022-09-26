import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
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
    navigate('/login');
  };

  return { token, email, fullName, signIn, signOut };
};

export default useAuth;
