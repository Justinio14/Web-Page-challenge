function CheckNoteListIsEmpty() {
  var notelist = new NoteList();
  assert.isEmpty(notelist.GetNotes());
};

CheckNoteListIsEmpty()

function CheckNoteListIsEmpty() {
  var notelist = new NoteList();
  notelist.AddNote("Hello");
  assert.isNotEmpty(notelist.GetNotes());
};

CheckNoteListIsEmpty()

function CheckNoteID() {
  var notelist = new NoteList();
  notelist.AddNote("Hello");
  notelist.AddNote("Ola");
  assert.isTrue(notelist.notes[0].id === 0);
  assert.isTrue(notelist.notes[1].id === 1);
};

CheckNoteID()
