const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _price, _owners, yearsetting) {
    const NFT = {
        "name": _name,
        "price": _price,
        "owners": _owners,
        "yearsetting": yearsetting
    }
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    console.log("Listing All NFTs:");
    
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID: " + (i +1) );
        console.log("Name: " + NFTs[i].name);
        console.log("Price: " + NFTs[i].price);
        console.log("Owners: " + NFTs[i].owners);
        console.log("yearsetting: " + NFTs[i]._yearsetting);
    
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs: " + NFTs.length);
}

// call your functions below this line
mintNFT("Rahul", "8000", "Mohit", "07/03/2005");
mintNFT("Rishi", "8000", "Amit", "01/11/2015");
mintNFT("suraj", "5000", "Ansh", "20/08/2009");
mintNFT("john",  "4000", "Vikas", "28/12/2014");

listNFTs();
getTotalSupply();
// Code example
for(var i=1; i<=5; i++) {
 console.log(i);
}
