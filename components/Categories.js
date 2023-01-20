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

export default function Categories({ categorieArray }) {
  // console.log("Categories-Array: ", categorieArray);

  return (
    <FlatList
      data={categorieArray}
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
    width: 150,
    height: 150,
    backgroundColor: "rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
});

const SpotligthCard = ({ cardInfo }) => {
  const navigation = useNavigation();

  const goToSpotlight = () => {
    console.log("Se undio una spotligth!");
    console.log(cardInfo.id);
    // navigation.navigate("Collection", { id: cardInfo.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToSpotlight}>
      <Card
        containerStyle={{
          padding: 0,
          borderRadius: 10,
          height: 200,
          margin: 5,
          overflow: "hidden",
        }}
      >
        <Card.Image source={{ uri: cardInfo.image }} style={styles.cardImg}>
          <View style={{ justifyContent: "center", flex: 1 }}></View>
        </Card.Image>
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontSize: 14,
            margin: 10,
            fontWeight: "bold",
          }}
        >
          {cardInfo.name}
        </Text>
      </Card>
    </TouchableWithoutFeedback>
  );
};
