const intialState = {
  notes: [],
};

export const ActionTypes = {
  SET_NOTES: "SET_NOTES",
  DELETE_NOTE: "DELETE_NOTE",
  NEW_NOTE: "NEW_NOTE",
  EDIT_NOTE: "EDIT_NOTE",
};

export const ActionsCreators = {
  setNotes: (payload) => ({ type: ActionTypes.SET_NOTES, payload }),
  deleteNote: (payload) => ({ type: ActionTypes.DELETE_NOTE, payload }),
  newNote: (payload) => ({ type: ActionTypes.NEW_NOTE, payload }),
  editNote: (payload) => ({ type: ActionTypes.EDIT_NOTE, payload }),
};

export default function NotesReducer(state = intialState, action) {
  switch (action.type) {
    case ActionTypes.SET_NOTES:
      return { ...state, notes: [...action.payload] };
    case ActionTypes.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    case ActionTypes.NEW_NOTE:
      console.log("new note!");
      action.payload.id = state.notes.length + 1;
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case ActionTypes.EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) => {
          return note.id === action.payload.id
            ? { value: action.payload.value, id: note.id }
            : note;
        }),
      };
    default:
      return state;
  }
}
