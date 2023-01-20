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
} from "react-native";
import { useState } from "react";
import { Card, Tile } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { SPOTLIGTH } from "../assets/data/spotligth";

export default function CollectionScreen({ route, navigation }) {
  const spotligthstate = useSelector((state) => state.spotlight);
  const topstate = useSelector((state) => state.top);

  const spotlightArray = spotligthstate.spotlightArray;
  const topArray = topstate.topArray;
  // console.log("array: ", spotligthstate.spotlightArray);

  let colectionselected = spotlightArray.find(
    (elm) => elm.id === route.params.id
  );
  if (colectionselected == undefined) {
    colectionselected = topArray.find((elm) => elm.id === route.params.id);
  }
  if (colectionselected == undefined) {
    return <Text>Not found</Text>;
  }

  return (
    <ScrollView>
      <ImageBackground
        source={{ uri: colectionselected.bgimage }}
        resizeMode="cover"
      >
        <Text style={styles.text}>by {colectionselected.creator}</Text>
      </ImageBackground>

      <View>
        <Image style={styles.img} source={{ uri: colectionselected.image }} />
      </View>
      <View>
        <Text>{colectionselected.name}</Text>
        <Text>by {colectionselected.creator}</Text>
        <Text>{colectionselected.description}</Text>
        <Text>Official Website: {colectionselected.name}</Text>
      </View>
      <View>
        <Text>Total Volume: {colectionselected.price}</Text>
        <Text>Floor price: {colectionselected.price}</Text>
      </View>
      <View>
        <FlatList
          data={colectionselected.nft}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
          keyExtractor={(elm, index) => String(elm.id + "-" + index)}
          renderItem={({ item }) => <DetailCard cardInfo={item} />}
          contentContainerStyle={styles.flatListContentContainer}
        />
      </View>
    </ScrollView>
  );
}

const DetailCard = ({ cardInfo }) => {
  const navigation = useNavigation();

  const goToDetailCard = () => {
    console.log("Se undio una Card!");
    console.log(cardInfo);

    navigation.navigate("Detail", { detail: cardInfo });
  };

  return (
    <TouchableWithoutFeedback onPress={() => goToDetailCard()}>
      <Card
        containerStyle={{
          padding: 0,
          borderRadius: 10,
          height: 240,
          width: 180,
          margin: 5,
          overflow: "hidden",
        }}
      >
        <Card.Image source={{ uri: cardInfo.image }} style={styles.cardImg}>
          <View style={{ justifyContent: "center", flex: 1 }}></View>
        </Card.Image>
        <Text style={{ marginTop: 10 }}>{cardInfo.name}</Text>
        <Text style={{ marginBottom: 10 }}>{cardInfo.price}</Text>
      </Card>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  img: {
    width: 150,
    height: 150,
  },
  imgback: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 10,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#5637DD",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
  },
});
