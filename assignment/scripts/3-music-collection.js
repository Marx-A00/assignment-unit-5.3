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

function showCollection(collection){
  for(let i = 0; i < collection.length; i++){
    console.log(collection[i].title + " by " +  collection[i].artist + " Published in " + collection[i].yearPublished + "\n"
    + getTracks(collection[i]));
  }
}

function getTracks(record){ // get tracks of a specific RECORD
  for(let i = 0; i < record.tracks.length; i++){
    console.log(record.tracks[i][0] + ": "+ record.tracks[i][1]);
  }
}
// console.log(myCollection[0].tracks.length);
console.log(showCollection(myCollection));
console.log("\n");
// console.log(myCollection[0].tracks[0][0] +" : " + myCollection[0].tracks[0][1]);
console.log("\n");
//                          i         j  0                         i         j  1
// console.log(myCollection[0].tracks[0][0] + " : " + myCollection[0].tracks[0][1]);
// console.log(myCollection[0].tracks[1][0] + " : " + myCollection[0].tracks[1][1]);
// console.log(myCollection[0].tracks[2][0] + " : " + myCollection[0].tracks[2][1]);
// console.log(myCollection[0].tracks[3][0] + " : " + myCollection[0].tracks[3][1]);

//    First Loop: 
            // Until you reach the end of the RECORDS = i

            // SECOND LOOP:

            // Until you reach the end tracks




// console.log(getTracks(myCollection));

// showCollection(myCollection);

function findByArtist(collection,artist){
  let matchingResults = [];
  for(let record of collection){
    if(record.artist == artist){
      matchingResults.push(record);
    }
  }
  return matchingResults;
}

// console.log(findByArtist(myCollection,"Bladee"));

// OBJECT THAT HAS TWO PROPERTIES ARTIST AND YEAR
function search(collection,searchCriteria){
  let matchingResults = [];
  if(searchCriteria == null || searchCriteria == ""){
    return collection;
  }

  // is search criteria a string?


}
// console.log(myCollection[1]);










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
