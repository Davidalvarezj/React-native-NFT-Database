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

export default function Learning({ learningArray }) {
  // console.log("Learning-Array: ", learningArray);

  return (
    <FlatList
      data={learningArray}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      keyExtractor={(elm, index) => String(`${elm.id}-${index}`)}
      renderItem={({ item }) => <LearningCard cardInfo={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: { padding: 0 },
  cardImg: {
    height: 160,
    backgroundColor: "rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
});

const LearningCard = ({ cardInfo }) => {
  const navigation = useNavigation();

  const goToLearning = () => {
    console.log("Se undio una Learning!", cardInfo);
    navigation.navigate("Learning", { info: cardInfo });
  };

  return (
    <TouchableWithoutFeedback onPress={goToLearning}>
      <Card
        containerStyle={{
          padding: 0,
          borderRadius: 10,
          height: 220,
          margin: 5,
          overflow: "hidden",
          flexGrow: 1,
          flex: 1,
          width: 150,
          marginBottom: 50,
        }}
      >
        <Card.Image source={{ uri: cardInfo.image }} style={styles.cardImg}>
          <View style={{ justifyContent: "center", flex: 1 }}></View>
        </Card.Image>
        <View>
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
        </View>
      </Card>
    </TouchableWithoutFeedback>
  );
};
