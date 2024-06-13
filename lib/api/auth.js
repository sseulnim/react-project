import axios from "axios";

const AUTH_APT_HOST = "https://moneyfulpublicpolicy.co.kr";

export const register = async ({ id, password, nickname }) => {
  try {
    const response = await axios.post(AUTH_APT_HOST + "/register", {
      id: id,
      password: password,
      nickname: nickname,
    });
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};

export const login = async ({ id, password }) => {
  try {
    const response = await axios.post(AUTH_APT_HOST + "/login?expiresIn=30m", {
      id: id,
      password: password,
    });
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log(error?.response?.data?.message);
    alert(error?.response?.data?.message);
  }
};

export const getUserInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.get(AUTH_APT_HOST + "/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (err) {
      // console.log(error?.response?.data?.message);
      alert("AccessToken 이 만료되었습니다.");
      localStorage.clear();
    }
  }
};

export const updateProfile = async (formData) => {
  console.log(formData);
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.patch(AUTH_APT_HOST + "/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (err) {
      // console.log(error?.response?.data?.message);
      // alert("AccessToken 이 만료되었습니다.");
      // localStorage.clear();
    }
  }
};
