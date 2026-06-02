import { useDispatch } from "react-redux";
import {
  LoginSuccess,
  LogoutSucess,
  RegisterSuccess,
} from "../State/AuthSclice";
import { useForm } from "react-hook-form";

export const UseAuth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let dispatch = useDispatch();

  ;

  const onLoging = (data) => {
    dispatch(LoginSuccess(data));
  };
  const onLogout = () => {
    dispatch(LogoutSucess());
  };
  const onRegister = (data) => {
    dispatch(RegisterSuccess(data));
  };

  return { onLoging, onLogout, onRegister , handleSubmit,  register , errors };
};
