console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection,title,artist,tracks,yearPublished){
  let newRecord = {
    collection: collection,
    title: title,
    artist: artist,
    tracks: tracks, 
    yearPublished: yearPublished 
  };
  collection.push(newRecord);

  return newRecord;
}
addToCollection(myCollection,"Die Lit","Playboi Carti",[["Long Time (intro)","3:31"],
                                                        ["R.I.P","3:12"],
                                                        ["Lean 4 Real","2:57"],
                                                        ["Old Money","2:15"],
                                                        ["Love Hurts","3:00"],
                                                        ["Shoota","2:33"],
                                                        ["Right Now","3:27"],
                                                        ["Poke it Out","4:29"],
                                                        ["Home(KOD)","2:42"],
                                                        ["Fell in Luv","3:26"],
                                                        ["Foreign","2:22"],
                                                        ["Pull Up","3:36"],
                                                        ["Mileage","2:29"],
                                                        ["FlatBed Freestyle","3:13"],
                                                        ["No Time","3:39"],
                                                        ["Middle of the Summer","2:17"],
                                                        ["Choppa Won't Miss", "3:37"],
                                                        ["R.I.P Fredo", "2:47"],
                                                        ["Top","2:13"],],2018);

addToCollection(myCollection,"Icedancer","Bladee",[["SmartWater","2:30"],
                                                   ["Okk","1:33"],
                                                   ["Mallwhore Freestyle","1:59"],
                                                   ["Be Nice 2 Me","2:07"],
                                                   ["Frosty the Snowman","2:50"],
                                                   ["Inside Out","2:17"],
                                                   ["Close","3:22"],
                                                   ["Jaws","1:56"],
                                                   ["Cartier'god Icedancer (Intermission)", "3:01"],
                                                   ["Side by Side","2:16"],
                                                   ["Topman","3:13"],
                                                   ["Waster","2:01"],
                                                   ["Special Place","2:02"],
                                                   ["Dg Jeans","1:43"],
                                                   ["Feel Like","1:34"],
                                                   ["Linkdin","2:33"],
                                                   ["For Nothing","2:00"],
                                                   ["Anything","2:37"],
                                                   ["The Silent Boy Cries (Ripsquadd Outro)", "1:19"],],2018);

addToCollection(myCollection,"Yeezus","Kanye West",[["On Sight", "2:36"],
                                                    ["Black Skinhead","3:08"],
                                                    ["I Am A God","3:51"],
                                                    ["New Slaves", "4:16"],
                                                    ["Hold My Liquor", "5:26"],
                                                    ["I'm In It", "3:54"],
                                                    ["Blood On The Leaves","5:59"],
                                                    ["Guilt Trip","4:03"],
                                                    ["Send It Up", "2:58"],
                                                    ["Bound 2","3:49"]],2013);

addToCollection(myCollection,"Good Luck","Bladee",[["Intro","2:29"],
                                                   ["Rainbow","3:28"],
                                                   ["Sun","3:10"],
                                                   ["God","2:25"],
                                                   ["Drama","2:00"],
                                                   ["You","2:02"],
                                                   ["Into One","3:08"],
                                                   ["Grace","2:06"],],2020);



addToCollection(myCollection,"James Blake","James Blake",[["Unluck","3:00"],
                                                         ["The Willhelm Scream","4:33"],
                                                         ["I Never Learmt To Share","4:51"],
                                                         ["Lindisfarne I","2:42"],
                                                         ["Lindisfarne II","2:58"],
                                                         ["Limit To Your Love","4:36"],
                                                         ["Give Me My Month","1:53"],
                                                         ["To Care (Like You)","3:52"],
                                                         ["Why Don't You Call Me","1:32"],
                                                         ["I Mind","3:31"],
                                                         ["Measurements","4:19"],],2011);



addToCollection(myCollection,"After Hours","The Weeknd",[["Alone Again","4:10"],
                                                        ["Too Late","3:59"],
                                                        ["Hardest To Love","3:31"],
                                                        ["Scared To Live","3:31"],
                                                        ["Snowchild","4:07"],
                                                        ["Escape From LA","5:55"],
                                                        ["Heartless","3:18"],
                                                        ["Faith","4:43"],
                                                        ["Blinding Lights","3:20"],
                                                        ["In Your Eyes", "3:57"],
                                                        ["Save Your Tears","3:35"],
                                                        ["Repeat After Me (Interlude)","3:15"],
                                                        ["After Hours","6:01"],
                                                        ["Until I Bleed Out","3:10"],],2020);

addToCollection(myCollection,"In Utero","Nirvana",[["Serve the Servants","3:36"],
                                                  ["Scentless Apprentice","3:48"],
                                                  ["Heart-Shaped Box","4:41"],
                                                  ["Rape Me","2:50"],
                                                  ["Frances Farmer Will Have Her Revenge on Seattle","4:09"],
                                                  ["Dumb","2:32"],
                                                  ["Very Ape","1:56"],
                                                  ["Milk It","3:55"],
                                                  ["Pennyroyal Tea","3:37"],
                                                  ["Radio Friendly Unit Shifter","4:51"],
                                                  ["Tourette's", "1:35"],
                                                  ["All Apologies","3:51"],],1993);


addToCollection(myCollection,"Hiding Places","Billy Woods",[["Spongebob","3:52"],
                                                  ["Steak Knives","1:28"],
                                                  ["Checkpoints","3:13"],
                                                  ["Spider Hole","3:40"],
                                                  ["Houthi","2:44"],
                                                  ["A Day in a Week in a Year","5:04"],
                                                  ["Bedtime","2:15"],
                                                  ["Crawlspace","3:45"],
                                                  ["Speak Gently","4:53"],
                                                  ["Toothy","2:17"],
                                                  ["Bigfakelaugh", "3:48"],
                                                  ["Red Dust","3:24"],],2019);
                                                  
addToCollection(myCollection,"Blonde","Frank Ocean",[["Nikes","5:14"],
                                                  ["Ivy","4:09"],
                                                  ["Pink + White","3:04"],
                                                  ["Be Yourself","1:26"],
                                                  ["Solo","4:17"],
                                                  ["Skyline To","3:04"],
                                                  ["Self Control","4:09"],
                                                  ["Good Guy","1:06"],
                                                  ["Nights","5:07"],
                                                  ["Solo (Reprise)","1:18"],
                                                  ["Pretty Sweet", "2:38"],
                                                  ["Facebook Story","1:08"],
                                                  ["Close To You","1:25"],
                                                  ["White Ferrari","4:08"],
                                                  ["Seigfried","5:34"],
                                                  ["Godspeed","2:57"],
                                                  ["Futura Free","9:24"]],2016);

addToCollection(myCollection,"Some Rap Songs","Earl Sweatshirt",
                                                [["Shattered Dreams","2:21"],
                                                ["Red Water","1:44"],
                                                ["Cold Summers","1:06"],
                                                ["Nowhere2go","1:53"],
                                                ["December 24","1:46"],
                                                ["Ontheway!","1:41"],
                                                ["The Mint","2:45"],
                                                ["The Bends","1:34"],
                                                ["Loosie","0:59"],
                                                ["Azucar","1:25"],
                                                ["Eclipse", "1:33"],
                                                ["Veins","1:59"],
                                                ["Playing Possum","1:34"],
                                                ["Peanut","1:13"],
                                                ["Riot!","1:06"]], 2018);                                                                                                   

function showCollection(collection){
  for(let i = 0; i < collection.length; i++){
    console.log(collection[i].title + " by " +  collection[i].artist + " Published in " + collection[i].yearPublished +":"+ "\n");
    console.log("=========================================== ");
    console.log(getTracks(collection[i]));
  }
  return 1;
}

function getTracks(record){ // get tracks of a specific RECORD
  for(let i = 0; i < record.tracks.length; i++){
    console.log(i+1 +". "+ record.tracks[i][0] + ": "+ record.tracks[i][1]);    
  }
  return 1;

}

function getTracksArray(record){
  let tracksArray = [];
  for(let i = 0; i < record.tracks.length; i++){
    tracksArray.push(record.tracks[i][0]);
  }
  return tracksArray;
}
//                          i         j  0                         i         j  1
// console.log(myCollection[0].tracks[0][0] + " : " + myCollection[0].tracks[0][1]);
// console.log(myCollection[0].tracks[1][0] + " : " + myCollection[0].tracks[1][1]);
// console.log(myCollection[0].tracks[2][0] + " : " + myCollection[0].tracks[2][1]);
// console.log(myCollection[0].tracks[3][0] + " : " + myCollection[0].tracks[3][1]);

//    First Loop: 
            // Until you reach the end of the RECORDS = i

            // SECOND LOOP:

            // Until you reach the end tracks



function findByArtist(collection,artist){
  let matchingResults = [];
  for(let record of collection){
    if(record.artist == artist){
      matchingResults.push(record);
    }
  }
  return matchingResults;
}


// OBJECT THAT HAS TWO PROPERTIES ARTIST AND YEAR
function search(collection,searchCriteria){
  let matchingResults = [];
  let hasTrackName = searchCriteria.hasOwnProperty("trackName"); // T or F

  if(searchCriteria == null       ||
    searchCriteria.artist == null ||
    searchCriteria.yearPublished == null){
      return collection;
    }

    else if(hasTrackName){

      for(let i = 0; i < collection.length; i++){
        let trackArrayCompare = getTracksArray(collection[i]);
        for(let j = 0; j < trackArrayCompare.length; j++){
          if(trackArrayCompare[j] == searchCriteria.trackName){
            matchingResults.push(collection[i]); // find way to return record of track name and format it with string
          }
        }
      }
    }

    else if(!hasTrackName){

      for(let record of collection){
        if((record.artist == searchCriteria.artist) &&
        (record.yearPublished == searchCriteria.yearPublished)){
          matchingResults.push(record);
        }
      }
    }

  return matchingResults;
}


let testSearchObject = {
  artist: "Bladee",
  yearPublished: 2020
};
let testSearchObjectTwo = {
  artist: "Bladee",
  yearPublished: 2020,
  trackName: "Bound 2"
};

let testSearchObjectThree = {
  artist: "Earl Sweatshirt",
  yearPublished: 2018
};
let testSearchObjectFour = {
  artist: "Bladee",
  yearPublished: 2020,
  trackName: "Waster"
};
let testSearchObjectFive = {
  artist: "Frank Ocean"
};
let testSearchObjectSix = {
  artist: "Billy Joel",
  yearPublished: 1980
};

console.log(showCollection(myCollection));
console.log("=========================================== ");


console.log("search function, should return yeezus:" ,search(myCollection,testSearchObjectTwo));
console.log("\n");
console.log("Search function, should return GL by Bladee : ",search(myCollection,testSearchObject));
console.log("\n");
console.log("Search function, should return Some Rap Songs: ",search(myCollection,testSearchObjectThree));
console.log("\n");
console.log("Search function, should return Icedancer ",search(myCollection,testSearchObjectFour));
console.log("\n");
console.log("Search function, should return full collection: ",search(myCollection,testSearchObjectFive));
console.log("\n");
console.log("Search function, should return empty array : ",search(myCollection,testSearchObjectSix));













// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
