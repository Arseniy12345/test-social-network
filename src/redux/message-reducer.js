const ADD_MESSAGE = "message/ADD_MESSAGE";

let initialState = {
  dialogsData: [
    { id: "1", name: "Арсений" },
    { id: "2", name: "Света" },
    { id: "3", name: "Аня" },
    { id: "4", name: "Максим" },
    { id: "5", name: "Егор" },
  ],
  messagesData: [
    { id: "1", text: "Привет" },
    { id: "2", text: "Как дела?" },
    { id: "3", text: "React может использоваться для разработки одностраничных и мобильных приложений." },
    { id: "4", text: "Redux — библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения." },
    { id: "5", text: "Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст." },
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
