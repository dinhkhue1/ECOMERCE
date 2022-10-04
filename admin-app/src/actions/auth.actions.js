import { authConstants } from "./constants";
import axios from "../helpers/axios";

export const login = (user) => {
  console.log(user);

  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const res = await axios.post(`/admin/signin`, {
      ...user,
    });

    if (res.status === 200) {
      const { token, user } = res.data;
      //localStorage: Lưu trữ dữ liệu vô thời hạn, dữ liệu sẽ được lưu trữ cho tới khi người dùng clear history
      //đưa đối tượng và bộ nhớ
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Đăng nhập thất bại" },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    const res = await axios.post(`/admin/signout`);

    if (res.status === 200) {
      //LocalStorage là một loại lưu trữ web cho phép các trang web và ứng dụng Javascript lưu trữ và truy cập dữ liệu ngay trong trình duyệt mà không có ngày hết hạn
      //Hay dữ liệu được lưu trữ trong trình duyệt sẽ tồn tại ngay cả sau khi cửa sổ trình duyệt đã bị đóng, Dữ liệu chỉ mất khi bạn sử dụng chức năng clear history của trình duyệt, hoặc bạn sử dụng localStorage API để xóa
      localStorage.clear();
      dispatch({ type: authConstants.LOGOUT_SUCCESS });
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
