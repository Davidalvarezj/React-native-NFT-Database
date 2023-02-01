import { Card, Icon, Input } from "react-native-elements";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import { searchData } from "../utils/favoritesCreateArray";

export default function SearchScreen() {
  const [searchKey, setSearchKey] = useState("");

  let dataArray = [];

  dataArray = searchData(searchKey);
  // console.log("Search-dataArray->", dataArray);

  if (!searchKey) {
    dataArray = [];
  }

  return (
    <>
      <View>
        <Input
          placeholder="Search NFT ..."
          onChangeText={(data) => {
            setSearchKey(data);
          }}
          value={searchKey}
          leftIcon={
            <Icon
              name={"search"}
              type="font-awesome"
              color="#8C8B88"
              size={25}
            />
          }
          leftIconContainerStyle={{ paddingRight: 10 }}
        />
      </View>
      <View>
        <FlatList
          data={dataArray}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
          keyExtractor={(elm, index) => String(elm.id + "-" + index)}
          renderItem={({ item, index }) => (
            <DetailCard
              cardInfo={item}
              index={item.nftindex}
              collectionid={item.id}
            />
          )}
          contentContainerStyle={styles.flatListContentContainer}
        />
      </View>
    </>
  );
}

const DetailCard = ({ cardInfo, collectionid, index }) => {
  const navigation = useNavigation();
  const halfWindowsWidth = Dimensions.get("window").width / 2;

  const goToCollection = () => {
    navigation.navigate("Collection", { id: collectionid });
  };

  return (
    <TouchableWithoutFeedback onPress={() => goToCollection()}>
      <Card
        containerStyle={{
          padding: 0,
          borderRadius: 10,
          height: 300,
          width: halfWindowsWidth - 25,
          margin: 0,
          marginLeft: 15,
          marginBottom: 10,
          overflow: "hidden",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,

          elevation: 12,
        }}
      >
        <Card.Image source={{ uri: cardInfo.image }} style={styles.cardImg}>
          <View style={{ justifyContent: "center", flex: 1 }}></View>
        </Card.Image>
        <View
          style={{
            right: -60,
            bottom: -110,
          }}
        >
          <Icon
            name={"plus-circle"}
            type="font-awesome"
            color={"#165D7F"}
            size={30}
          />
        </View>
        <View
          style={{
            position: "relative",
            bottom: 30,
          }}
        >
          <Text style={{ marginLeft: 10, marginTop: 10, fontWeight: "bold" }}>
            {cardInfo.name}
          </Text>
          <Text
            style={{
              marginLeft: 15,
              marginTop: 5,
              marginBottom: 5,
              fontWeight: "bold",
              fontSize: 10,
            }}
          >
            Floor Price: {cardInfo.price}
          </Text>

          <Text
            style={{
              fontSize: 10,
              marginLeft: 15,
              marginRight: 15,
              textAlign: "justify",
              color: "#8C8B88",
            }}
          >
            {cardInfo.description.slice(0, 90) + "..."}
          </Text>
        </View>
      </Card>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: { paddingBottom: 100, marginTop: 10 },

  descconatiner: {
    padding: 20,
    paddingTop: 90,
  },

  imgbackview: {
    ...StyleSheet.absoluteFillObject,
  },
  background: {
    height: 220,
  },
  img: {
    width: 120,
    height: 120,
  },
  imgback: {
    height: 220,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  cardRow: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: 15,
    top: -15,
  },
});
