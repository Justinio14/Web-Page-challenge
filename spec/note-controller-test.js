function checkIfNoteControllerCanBeInstatiated() {
	assert.isTrue(controller = new NoteController());
};

checkIfNoteControllerCanBeInstatiated()


function CheckNoteControllerTakesNewList() {
	var newlist = new NoteList();
	var controller = new NoteController(newlist);
	newlist.AddNote("Favourite drink: Fanta");
	var noteview = new NoteView(newlist);
	noteview.display();
	assert.isTrue(controller._view.display() === "<ul><li>Favourite drink: Fanta</li></ul>" );
};

CheckNoteControllerTakesNewList();

function CheckNoteControllerCanDisplayURLlist() {
	var newlist = new NoteList();
	var controller = new NoteController(newlist);
	newlist.AddNote("thistestsURLlinkdisplay");
	assert.isTrue(controller._view.urlDisplay() === "<ul><li><a href='http://localhost:8080#notes/1'>thistestsURLlinkdis</a></li></ul>");

};

CheckNoteControllerCanDisplayURLlist();
