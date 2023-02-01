import { useSelector } from "react-redux";

export function favoritesCreateArray(favoriteArray) {
  const spotligthstate = useSelector((state) => state.spotlight);
  const topstate = useSelector((state) => state.top);
  const notablestate = useSelector((state) => state.notable);

  const spotlightArray = spotligthstate.spotlightArray;
  const topArray = topstate.topArray;
  const notableArray = notablestate.notableArray;
  const TotalArray = [...spotlightArray, ...topArray, ...notableArray];

  // console.log("favorites-Util function", favoriteArray);
  let NewArray = [];

  for (let i = 0; i < favoriteArray.length; i++) {
    let filter = TotalArray.find(
      (elm) => elm.id == favoriteArray[i].collection
    );

    let nftindex = favoriteArray[i].item;
    NewArray.push({ ...filter, nftindex: nftindex });
  }
  //   console.log("--NewArray--", NewArray);
  return NewArray;
}

export function searchData(str = "") {
  let result = [];

  const spotligthstate = useSelector((state) => state.spotlight);
  const topstate = useSelector((state) => state.top);
  const notablestate = useSelector((state) => state.notable);
  const spotlightArray = spotligthstate.spotlightArray;
  const topArray = topstate.topArray;
  const notableArray = notablestate.notableArray;

  const TotalArray = [...spotlightArray, ...topArray, ...notableArray];

  result = TotalArray.filter((elm) =>
    elm.name.toLowerCase().includes(str.toLowerCase())
  );
  return result;
}
