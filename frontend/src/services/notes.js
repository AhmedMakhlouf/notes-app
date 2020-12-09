import { ActionsCreators } from "../redux/notesReducer";
import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:5001/notes",
});

export const GetNotes = async (dispatch) => {
  try {
    // api call
    const { data } = await axiosInstance.get();

    console.log(data);

    dispatch(ActionsCreators.setNotes(data));
  } catch (err) {
    console.log(err.message);
  }
};

export const DeleteNote = async (dispatch, note) => {
  try {
    await axiosInstance.delete(`/${note.id}`);
    dispatch(ActionsCreators.deleteNote(note));
  } catch {
    console.log("Error!");
  }
};

export const NewNote = async (dispatch, note) => {
  try {
    // api call
    //const response = { value: note, id: "1" };
    const { data } = await axiosInstance.post("", note);

    dispatch(ActionsCreators.newNote(data));
  } catch (err) {
    console.log(err.message);
  }
};

export const EditNote = async (dispatch, note) => {
  try {
    //const response = { value: note, id: "1" };
    await axiosInstance.put("", note);
    dispatch(ActionsCreators.editNote(note));
  } catch (err) {
    console.log(err.message);
  }
};
