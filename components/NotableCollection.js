import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Card, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function NotableCollection({ notableArray }) {
  // console.log("notableArray : ", notableArray);
  return (
    <FlatList
      data={notableArray}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      keyExtractor={(elm, index) => String(`${elm.id}-${index}`)}
      renderItem={({ item }) => <SpotligthCard cardInfo={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: { padding: 0 },
  cardImg: {
    width: 160,
    height: 150,
    overflow: "hidden",
  },
  imgbackview: {
    ...StyleSheet.absoluteFillObject,
  },
  background: {
    height: 220,
  },
  img: {
    margin: 0,
    padding: 0,
    width: 60,
    height: 60,
  },
});

const SpotligthCard = ({ cardInfo }) => {
  const navigation = useNavigation();

  const goToSpotlight = () => {
    console.log("Se undio una Notable Collection!");
    console.log(cardInfo.id);
    navigation.navigate("Collection", { id: cardInfo.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToSpotlight}>
      <Card
        containerStyle={{
          padding: 0,
          borderRadius: 10,
          height: 210,
          margin: 5,
          overflow: "hidden",
        }}
      >
        <Card.Image source={{ uri: cardInfo.bgimage }} style={styles.cardImg}>
          <View style={{ justifyContent: "center", flex: 1 }}></View>
        </Card.Image>

        <Card
          containerStyle={{
            padding: 0,
            borderRadius: 10,
            height: 60,
            width: 60,
            margin: 5,
            overflow: "hidden",
            top: -50,
            borderWidth: 3,
            borderColor: "white",
          }}
        >
          <Card.Image source={{ uri: cardInfo.image }} style={styles.img} />
        </Card>

        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontSize: 14,
            margin: 10,
            fontWeight: "bold",
            top: -50,
          }}
        >
          {cardInfo.name}
        </Text>
      </Card>
    </TouchableWithoutFeedback>
  );
};
