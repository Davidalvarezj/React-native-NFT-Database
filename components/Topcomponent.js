import { FlatList, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Card, Image, ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Topcomponent({ top5Array }) {
  // console.log("top 5 Array: ", top5Array);

  const navigation = useNavigation();

  function hanndlePress(cardInfo) {
    console.log(cardInfo.id);

    navigation.navigate("Collection", { id: cardInfo.id });
  }

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
            fontSize: 12,
            textAlign: "left",
            marginLeft: 20,

            color: "#8C8B88",
            marginBottom: 10,
          }}
        >
          COLLECTION
        </Text>
        <Text
          style={{
            fontSize: 12,
            textAlign: "center",
            marginRight: 20,
            color: "#8C8B88",
          }}
        >
          VOLUME
        </Text>
      </View>
      <View>
        {top5Array.map((item, i) => (
          <ListItem
            key={i}
            containerStyle={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              margin: 5,
              padding: 0,
            }}
          >
            <TouchableWithoutFeedback onPress={() => hanndlePress(item)}>
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 0,
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "bold",
                      textAlign: "center",
                      marginRight: 15,
                      marginLeft: 10,
                    }}
                  >
                    {item.rankedpos}
                  </Text>
                </View>
                <View style={{ width: 60 }}>
                  <Image
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 10,
                    }}
                    source={{ uri: item.image }}
                  />
                </View>
                <View style={{ width: 180, justifyContent: "center" }}>
                  <Text
                    style={{ fontSize: 13, fontWeight: "bold", marginLeft: 10 }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginLeft: 10,
                      color: "#8C8B88",
                    }}
                  >
                    Floor: {item.price}
                  </Text>
                </View>
                <View
                  style={{
                    width: 90,
                    marginRight: 10,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      textAlign: "right",
                    }}
                  >
                    {item.volume}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ListItem>
        ))}
      </View>
    </View>
  );
}
