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
import { favoritesCreateArray } from "../utils/favoritesCreateArray";

export default function UserScreen() {
  const spotligthstate = useSelector((state) => state.spotlight);
  const topstate = useSelector((state) => state.top);
  const notablestate = useSelector((state) => state.notable);
  const favorite = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const spotlightArray = spotligthstate.spotlightArray;
  const topArray = topstate.topArray;
  const notableArray = notablestate.notableArray;
  // console.log("array: ", spotligthstate.spotlightArray);

  // console.log("favoriteState: ", favorite);

  let favoriteArray = favoritesCreateArray(favorite);

  let favoriteCollection = favorite;

  return (
    <View>
      <FlatList
        data={favoriteArray}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        numColumns={2}
        keyExtractor={(elm, index) => String(elm.id + "-" + index)}
        renderItem={({ item, index }) => (
          <DetailCard
            cardInfo={item}
            index={index}
            isFavorite={
              !!favoriteCollection.filter((elm) => elm.item === index).length
            }
            markFavorite={() =>
              dispatch(addFavorite({ collection: 99, item: index }))
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
