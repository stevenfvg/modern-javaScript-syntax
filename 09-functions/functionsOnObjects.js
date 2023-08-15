const player = {
  play: function (id) {
    console.log(`Playing song ${id}...`);
  },
  pause: function () {
    console.log(`Pausing player...`);
  },
  delete: function (id) {
    console.log(`Deleting song ${id}...`);
  },
  createPlayList: function (name) {
    console.log(`Creating the playlist ${name}`);
  },
};

player.play(2);
player.pause();
player.delete(2);
player.createPlayList('Heavy Metal');
