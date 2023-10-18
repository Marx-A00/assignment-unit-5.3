console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection,title,artist,yearPublished){
  let newRecord = {
    collection: collection,
    title : title,
    artist: artist,
    yearPublished: yearPublished 
  };
  collection.push(newRecord);

  return newRecord;
}
addToCollection(myCollection,"Die Lit","Playboi Carti",2018);
addToCollection(myCollection,"Icedancer","Bladee",2018);
addToCollection(myCollection,"Yeezus","Kanye West",2013);
addToCollection(myCollection,"Good Luck","Bladee",2020);
addToCollection(myCollection,"James Blake","James Blake",2011);
addToCollection(myCollection,"After Hours","The Weeknd",2020);

function showCollection(collection){
  for(let record of collection){
    console.log(record.title + " by " +  record.artist + " Published in " + record.yearPublished);
  }
}

showCollection(myCollection);

function findByArtist(collection,artist){
  let matchingResults = [];
  for(let record of collection){
    if(record.artist == artist){
      matchingResults.push(record);
    }
  }
  return matchingResults;
}

console.log(findByArtist(myCollection,"Bladee"));


function search(collection,searchCriteria){

}











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
