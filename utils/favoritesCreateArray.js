import { useSelector } from "react-redux";

function favoritesCreateArray(favoriteArray) {
  const spotligthstate = useSelector((state) => state.spotlight);
  const topstate = useSelector((state) => state.top);
  const notablestate = useSelector((state) => state.notable);

  const spotlightArray = spotligthstate.spotlightArray;
  const topArray = topstate.topArray;
  const notableArray = notablestate.notableArray;

  console.log("favorites-Util function", favoriteArray);
  let NewArray = [];

  for (let i = 0; i < favoriteArray.length; i++) {
    let filter1 = spotlightArray.find(
      (elm) => elm.id == favoriteArray[i].collection
    );
    if (!!filter1) {
      let nftindex = favoriteArray[i].item;
      NewArray.push({ ...filter1, nftindex: nftindex });
    }

    let filter2 = topArray.find((elm) => elm.id == favoriteArray[i].collection);
    if (!!filter2) {
      let nftindex = favoriteArray[i].item;
      NewArray.push({ ...filter2, nftindex: nftindex });
    }
    let filter3 = notableArray.find(
      (elm) => elm.id == favoriteArray[i].collection
    );
    if (!!filter3) {
      let nftindex = favoriteArray[i].item;
      NewArray.push({ ...filter3, nftindex: nftindex });
    }
  }
  //   console.log("--NewArray--", NewArray);
  return NewArray;
}

export { favoritesCreateArray };
