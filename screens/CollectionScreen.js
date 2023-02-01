import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
  SectionList,
  Platform,
  Modal,
  Button,
  Linking,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Card, Tile, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { addFavorite } from "../features/favoritesSlice";

import { useSelector, useDispatch } from "react-redux";
import { SPOTLIGTH } from "../assets/data/spotligth";

export default function CollectionScreen({ route, navigation }) {
  const spotligthstate = useSelector((state) => state.spotlight);
  const topstate = useSelector((state) => state.top);
  const notablestate = useSelector((state) => state.notable);
  const favorite = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const spotlightArray = spotligthstate.spotlightArray;
  const topArray = topstate.topArray;
  const notableArray = notablestate.notableArray;
  // console.log("route: ", route);

  let colectionselected = spotlightArray.find(
    (elm) => elm.id === route.params.id
  );
  if (colectionselected == undefined) {
    colectionselected = topArray.find((elm) => elm.id === route.params.id);
  }
  if (colectionselected == undefined) {
    colectionselected = notableArray.find((elm) => elm.id === route.params.id);
  }
  if (colectionselected == undefined) {
    return <Text>Not found</Text>;
  }

  // console.log("favoritestate: ", favorite);

  let favoriteCollection = favorite.filter(
    (elm) => elm.collection === colectionselected.id
  );
  // console.log("favoriteCollection: ", favoriteCollection);
  let isFavbool = favoriteCollection.filter((elm) => elm.item === 0);
  isFavbool = !!isFavbool.length;
  // console.log("isFavbool: ", isFavbool);

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <CollectionHeader colectionselected={colectionselected} />
        }
        data={colectionselected.nft}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        numColumns={2}
        keyExtractor={(elm, index) => String(elm.id + "-" + index)}
        renderItem={({ item, index }) => (
          <DetailCard
            cardInfo={item}
            collectionid={colectionselected.id}
            index={index}
            isFavorite={
              !!favoriteCollection.filter((elm) => elm.item === index).length
            }
            markFavorite={() =>
              dispatch(
                addFavorite({ collection: colectionselected.id, item: index })
              )
            }
          />
        )}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
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
    // console.log("cardInfo: ", { ...cardInfo, id: collectionid });

    navigation.navigate("Detail", {
      detail: {
        ...cardInfo,
        id: collectionid,
        index: index,
        isFavorite: isFavorite,
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
          source={{ uri: cardInfo.image }}
          style={styles.cardImg}
          onPress={() => goToDetailCard()}
        >
          <View style={{ justifyContent: "center", flex: 1 }}></View>
        </Card.Image>

        <Text style={{ margin: 10, fontWeight: "bold" }}>{cardInfo.name} </Text>

        <Text style={{ fontWeight: "bold", marginLeft: 10 }}>
          {cardInfo.price}
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

const CollectionHeader = ({ colectionselected }) => {
  return (
    <>
      <ImageBackground
        source={{ uri: colectionselected.bgimage }}
        resizeMode="cover"
        style={styles.imgback}
      >
        <View style={styles.imgbackview}></View>
        <LinearGradient
          // Background Linear Gradient
          colors={["transparent", "rgba(240,240,240,0.9)"]}
          style={styles.background}
        />
        <Card
          containerStyle={{
            padding: 0,
            borderRadius: 20,
            height: 120,
            width: 120,
            margin: 20,
            overflow: "hidden",
            top: -80,
            borderWidth: 4,
            borderColor: "white",
          }}
        >
          <Card.Image
            style={styles.img}
            source={{ uri: colectionselected.image }}
          />
        </Card>
      </ImageBackground>

      <View style={styles.descconatiner}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          {colectionselected.name}
        </Text>
        <Text style={{ marginTop: 10, marginBottom: 10, fontWeight: "bold" }}>
          by {colectionselected.creator}
        </Text>
        <Text style={{ textAlign: "justify" }}>
          {colectionselected.description}
        </Text>
        <Text style={{ marginTop: 10, fontWeight: "bold" }}>
          Official Website:
        </Text>
        <Text
          style={{ color: "blue", marginBottom: 20 }}
          onPress={() => Linking.openURL(colectionselected.web)}
        >
          {colectionselected.web}
        </Text>

        <View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View>
              <Text
                style={{ marginEnd: "20%", fontSize: 18, fontWeight: "bold" }}
              >
                {colectionselected.volume}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  marginEnd: "20%",

                  color: "#43484C",
                }}
              >
                total volume
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {colectionselected.price}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  marginEnd: "20%",

                  color: "#43484C",
                }}
              >
                floor price
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          borderBottomColor: "#8C8B88",
          borderBottomWidth: 1,
        }}
      ></View>
      <Text
        style={{
          marginTop: 0,
          marginBottom: 0,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        <Ionicons name="md-stats-chart" color={"black"} /> Items
      </Text>

      <View
        style={{
          marginTop: 20,
          marginBottom: 40,
          borderBottomColor: "#8C8B88",
          borderBottomWidth: 1,
        }}
      ></View>
    </>
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: { paddingBottom: 100 },

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
