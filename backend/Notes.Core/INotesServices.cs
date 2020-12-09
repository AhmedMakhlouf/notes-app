using Notes.DB;
using System;
using System.Collections.Generic;
using System.Text;

namespace Notes.Core
{
    public interface INotesServices
    {
        Note CreateNote(Note note);
        Note GetNote(int id);
        List<Note> GetNotes();

        void DeleteNote(int id);
        void EditNote(Note note);
    }
}
