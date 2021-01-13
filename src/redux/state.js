import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hello1", likeCount: "20" },
        { id: 2, message: "Hello2", likeCount: "25" },
        { id: 3, message: "Hello3", likeCount: "30" },
      ],
      newPostText: "lalala",
    },
    dialogsPage: {
      dialogsData: [
        { id: "1", name: "Arseniy" },
        { id: "2", name: "Sveta" },
        { id: "3", name: "Bla" },
        { id: "4", name: "Lala" },
        { id: "5", name: "Ogo" },
      ],
      messagesData: [
        { id: "1", text: "Hello" },
        { id: "2", text: "How are you?" },
        { id: "3", text: "yo" },
        { id: "4", text: "yo" },
        { id: "5", text: "yo" },
      ],
      newMessageText: "write",
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("Changed");
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = messageReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
