import { Card, Icon, Input } from "react-native-elements";
import { Text, View, StyleSheet, FlatList, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { searchData } from "../utils/favoritesCreateArray";

export default function SearchScreen() {
  const [searchKey, setSearchKey] = useState("");
  const [dataArray, setDataArray] = useState([]);

  const startsearchArray = (inputText) => {
    setSearchKey(inputText);
    console.log("searchKey->", searchKey);
    let returnData = searchData(inputText);
    console.log("returnData->", returnData);
    setDataArray(returnData);
  };

  return (
    <>
      <View>
        <Input
          placeholder="Search NFT ..."
          onChangeText={(data) => startsearchArray(data)}
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
              isFavorite={true}
              markFavorite={() =>
                dispatch(
                  addFavorite({ collection: item.id, item: item.nftindex })
                )
              }
            />
          )}
          contentContainerStyle={styles.flatListContentContainer}
        />
      </View>
    </>
  );
}

const DetailCard = ({
  cardInfo,
  collectionid,
  isFavorite,
  markFavorite,
  index,
}) => {
  const navigation = useNavigation();
  const halfWindowsWidth = Dimensions.get("window").width / 2;
  const goToDetailCard = () => {
    // console.log("Se undio una Card!");
    // console.log("cardInfo: ", {
    //   ...cardInfo.nft[cardInfo.nftindex],
    //   id: collectionid,
    // });

    navigation.navigate("Detail", {
      detail: {
        ...cardInfo.nft[cardInfo.nftindex],
        id: collectionid,
        isFavorite: isFavorite,
        index: index,
      },
    });
  };

  return (
    <>
      <Card
        containerStyle={{
          padding: 0,
          borderRadius: 10,
          height: 230,
          width: halfWindowsWidth - 25,
          margin: 0,
          marginLeft: 15,
          marginBottom: 10,
          overflow: "hidden",
        }}
      >
        <Card.Image
          source={{ uri: cardInfo.nft[cardInfo.nftindex].image }}
          style={styles.cardImg}
          onPress={() => goToDetailCard()}
        >
          <View style={{ justifyContent: "center", flex: 1 }}></View>
        </Card.Image>

        <Text style={{ margin: 10, fontWeight: "bold" }}>
          {cardInfo.nft[cardInfo.nftindex].name}{" "}
        </Text>

        <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
          {cardInfo.nft[cardInfo.nftindex].price}
        </Text>
        <View style={styles.cardRow}>
          <Icon
            name={isFavorite ? "heart" : "heart-o"}
            type="font-awesome"
            color={isFavorite ? "#f50" : "#43484C"}
            size={20}
            onPress={() => markFavorite()}
          />
        </View>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: { paddingBottom: 100, marginTop: 50 },

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
