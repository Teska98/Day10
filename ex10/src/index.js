function myFunction(){
  var myMusic = {
    001: {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD
        2: "8T",
        3: "LP"
      },
      gold: true
    },
    002: {
    //Add recor here
      artist: "Eminem",
      title: "Like Toy Soldiers",
      release_year: 2005,
      formats: {
        1: "CD
        2: "DVD",
        3: "DD"
      },
      gold: true
    }
  };
}
myFunction()[2];
module.exports = myFunction;
