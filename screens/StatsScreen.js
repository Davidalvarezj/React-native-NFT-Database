import { View, Text, FlatList, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-elements";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Topcomponent from "../components/Topcomponent";

export default function StatsScreen() {
  const topstate = useSelector((state) => state.top);

  const topArray = topstate.topArray;
  const top10Array = topArray;

  // console.log("topstate: ", top10Array);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          borderBottomColor: "#8C8B88",
          borderBottomWidth: 1,
          margin: 5,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            flex: 1,
            fontSize: 10,
            textAlign: "left",
            marginLeft: 20,
            fontWeight: "bold",
            color: "#8C8B88",
            marginBottom: 10,
          }}
        >
          COLLECTION
        </Text>
        <Text
          style={{
            fontSize: 10,
            textAlign: "center",
            marginRight: 20,
            fontWeight: "bold",
            color: "#8C8B88",
          }}
        >
          VOLUME
        </Text>
      </View>
      <FlatList
        data={top10Array}
        renderItem={({ item }) => <List cardInfo={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingTop: 0 }}
      />
    </View>
  );
}

const List = ({ cardInfo }) => {
  const navigation = useNavigation();
  function hanndlePress() {
    console.log(cardInfo.id);

    navigation.navigate("Collection", { id: cardInfo.id });
  }

  return (
    <TouchableWithoutFeedback onPress={() => hanndlePress()}>
      <View style={{ flexDirection: "row", paddingTop: 10 }}>
        <View style={{ width: 20 }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {cardInfo.rankedpos}
          </Text>
        </View>
        <View style={{ width: 50, borderRadius: 50, overflow: "hidden" }}>
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={{ uri: cardInfo.image }}
          />
        </View>
        <View style={{ width: 180 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold", marginLeft: 10 }}>
            {cardInfo.name}
            <Text style={{ fontSize: 10 }}>{cardInfo.price}</Text>
          </Text>
        </View>
        <View style={{ width: 100 }}>
          <Text
            style={{ fontSize: 12, fontWeight: "bold", textAlign: "center" }}
          >
            {cardInfo.volume}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
