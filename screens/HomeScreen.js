import { SafeAreaView, Text, View, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Spotlights from "../components/Spotlights";
import Categories from "../components/Categories";
import Learning from "../components/Learning";
import Topcomponent from "../components/Topcomponent";
import NotableCollection from "../components/NotableCollection";

export default function HomeScreen() {
  const spotligthstate = useSelector((state) => state.spotlight);
  const topstate = useSelector((state) => state.top);
  const categoriesstate = useSelector((state) => state.categories);
  const learningstate = useSelector((state) => state.learning);
  const notablestate = useSelector((state) => state.notable);

  const spotlightArray = spotligthstate.spotlightArray;
  const categorieArray = categoriesstate.categoriesArray;
  const learningArray = learningstate.learningArray;
  const topArray = topstate.topArray;
  const notableArray = notablestate.notableArray;
  // console.log("spotlightArray: ", spotlightArray);
  // console.log("topstate: ", topArray);
  // console.log("categoriesstate: ", categorieArray);
  // console.log("learningstate: ", learningstate.learningArray)
  // console.log("notableArray: ", notableArray);

  const top5Array = topArray.filter((elm) => elm.rankedpos < 6);

  return (
    <ScrollView>
      <Text style={{ fontSize: 18, margin: 14, fontWeight: "bold" }}>
        Spotlights
      </Text>
      <Spotlights spotlightArray={spotlightArray} />

      <Text
        style={{ fontSize: 18, margin: 14, fontWeight: "bold", marginTop: 40 }}
      >
        Top Collections
      </Text>
      <Topcomponent top5Array={top5Array} />

      <Text
        style={{ fontSize: 18, margin: 14, marginTop: 40, fontWeight: "bold" }}
      >
        Notable Collections
      </Text>
      <NotableCollection notableArray={notableArray} />

      <Text
        style={{ fontSize: 18, margin: 14, fontWeight: "bold", marginTop: 30 }}
      >
        Browse by category
      </Text>
      <Categories categorieArray={categorieArray} />

      <Text
        style={{ fontSize: 18, margin: 14, fontWeight: "bold", marginTop: 30 }}
      >
        NFT 101
      </Text>
      <Learning learningArray={learningArray} />
    </ScrollView>
  );
}
