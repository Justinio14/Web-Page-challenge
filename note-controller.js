(function(exports) {



  function NoteController(newlist = new NoteList()) {
    this._newList = newlist;
    this._view = new NoteView(this._newList);
    controller = this;
  };

  // NoteController.prototype.WebPost = function() {
  //   var el = document.getElementById('app');
  //     el.innerHTML = this._view.display();
  // }

  NoteController.prototype.WebURLPost = function() {
    var elem = document.getElementById('app');
    elem.innerHTML = this._view.urlDisplay();
  }


    exports.NoteController = NoteController;


  makeUrlsShowForCurrentPage();

  function makeUrlsShowForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    console.log(window.location);
    showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
    console.log(location.hash.split("#notes/")[1]);
    return location.hash.split("#notes/")[1];
  } ;

  function showNote(id) {
    var thisnote = findNote(id)
    view = document.getElementById("view");
    view.innerHTML = new SingleNoteView(thisnote).viewNote();
  };

  function findNote(id) {

    for (var i=0; i<controller._newList.notes.length; i++) {
      if (controller._newList.notes[i].id == id) return controller._newList.notes[i]
    }
  }

})(this);
