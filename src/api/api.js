import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "a096fe26-0545-4f07-8c19-2ba2fe66063d",
  },
});

export const authAPI = {
  setAuth() {
    return instance.get("/auth/me").then((response) => response.data);
  },
  login(email, password, rememberMe) {
    return instance.post(`/auth/login`, { email, password, rememberMe });
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
};

