
  function init() {
    list = new NoteList();
    list.AddNote("drop kids off at school");
    list.AddNote("pick up dry cleaning");
    list.AddNote("buy bread and milk");
    list.AddNote("post letter");
    controller = new NoteController(list);
    controller.WebURLPost();

  }

  window.onload = init;
