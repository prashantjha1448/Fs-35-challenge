import { useDispatch } from "react-redux";
import {
  LoginSuccess,
  LogoutSucess,
  RegisterSuccess,
} from "../State/AuthSclice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const UseAuth = () => {
  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let dispatch = useDispatch();

  const onLoging = (data) => {
    
    dispatch(LoginSuccess(data));
    Navigate("/home");
  };
  const onLogout = () => {
    dispatch(LogoutSucess());
    Navigate("/");
  };
  const onRegister = (data) => {
    dispatch(RegisterSuccess(data));
    Navigate("/home");
  };

  return { onLoging, onLogout, onRegister, handleSubmit, register, errors };
};
