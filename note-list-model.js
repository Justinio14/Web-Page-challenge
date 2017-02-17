(function(exports) {


  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.AddNote = function(noteContent) {
      this.notes.push(new Note(noteContent));
  }

  NoteList.prototype.GetNotes = function() {
    return this.notes;
  }
  exports.NoteList  = NoteList;
})(this);
