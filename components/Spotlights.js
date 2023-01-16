import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function Spotlights({ spotlightArray }) {
  return (
    <FlatList
      data={spotlightArray}
      showsVerticalScrollIndicator={false}
      horizontal={true}
      keyExtractor={(elm) => String(elm.id)}
      renderItem={({ item }) => <SpotligthCard cardInfo={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: { padding: 0 },
  cardImg: {
    width: 240,
    height: 240,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 10,
  },
});

const SpotligthCard = ({ cardInfo }) => {
  const navigation = useNavigation();

  const goToSpotlight = () => {
    console.log("Se undio una spotligth!");
    console.log(cardInfo.id);
    navigation.navigate("Collection", { id: cardInfo.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToSpotlight}>
      <Card
        containerStyle={{
          padding: 0,
          borderRadius: 10,
          height: 240,
          margin: 5,
        }}
      >
        <Card.Image source={{ uri: cardInfo.image }} style={styles.cardImg}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
              {cardInfo.name}
            </Text>
            <Text style={{ color: "white", textAlign: "center", fontSize: 14 }}>
              Floor: {cardInfo.price}
            </Text>
          </View>
        </Card.Image>
      </Card>
    </TouchableWithoutFeedback>
  );
};
