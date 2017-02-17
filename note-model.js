(function(exports) {

  var ID_COUNT = 0;

  function Note(text) {
    this.text = text;
    this.id = ID_COUNT;
    ID_COUNT ++;
  };

  Note.prototype.returnNote = function() {
    return this.text;
  };

  exports.Note = Note;

})(this);
