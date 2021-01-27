import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "b77b24bf8338-a45f-4db3-974e-7b5b90dd",
  },
});

export const authAPI = {
  setAuth() {
    return instance.get("/auth/me").then((response) => response.data);
  },
  login(email, password, rememberMe, captcha = null) {
    return instance.post(`/auth/login`, { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete("/auth/login");
  },
};

export const usersAPI = {
  getUsers(pageSize, pageNumber) {
    return instance
      .get(`/users?count=${pageSize}&page=${pageNumber}`)
      .then((response) => response.data);
  },
  setFollow(userId) {
    return instance
      .post(`/follow/${userId}`)
      .then((response) => response.data.resultCode);
  },
  setUnfollow(userId) {
    return instance
      .delete(`/follow/${userId}`)
      .then((response) => response.data.resultCode);
  },
  getProfile(userId) {
    console.log("Старый метод");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get("/profile/" + userId);
  },
  getStatus(userId) {
    return instance.get("/profile/status/" + userId);
  },
  updateStatus(status) {
    return instance.put("/profile/status", { status: status });
  },
  setPhoto(file) {
    const formData = new FormData();
    formData.append("image", file);
    return instance.put("/profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfileData(profile) {
    return instance.put("/profile", profile)
  }
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get("/security/get-captcha-url")
  }
}
