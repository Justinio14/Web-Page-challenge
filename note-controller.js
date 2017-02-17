(function(exports) {



  function NoteController(newlist = new NoteList) {
    this._newList = newlist;
    this._view = new NoteView(newlist);
    var controller = this;
  }

  NoteController.prototype.WebPost = function() {
    var elem = document.getElementById('app');
      document.body.innerHTML = this._view.display();
  }

  NoteController.prototype.WebURLPost = function() {
    var elem = document.getElementById('app');
    document.body.innerHTML = this._view.urlDisplay();
  }

    exports.NoteController = NoteController;

  makeUrlsShowForCurrentPage();

  function makeUrlsShowForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage());
  };

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
    return location.hash.split("#")[1];
  } ;

  function showNote(id) {
    // var thisnote = findNote(id)
    var elem = document.getElementById("app")
    document.body.innerHTML = new SingleNoteView(thisnote);
  };

  // function findNote(id) {
  //   console.log(controller._newList);
  //   for (var i = 0; i < this._newList.notes.length; i++) {
  //     if (this._newList.notes[i].id == id) return this._newList.notes[i]
  //   }
  // }



})(this);
