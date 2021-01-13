const ADD_MESSAGE = "message/ADD_MESSAGE";

let initialState = {
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
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messagesData: [...state.messagesData, { id: "6", text: action.text }],
      };
    default:
      return state;
  }
};

export const addMessage = (text) => ({ type: ADD_MESSAGE, text });

export default messageReducer;
