import { SafeAreaView, Text, StyleSheet, View, Share } from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import { useState } from "react";
import { useSelector } from "react-redux";
import React from "react";

export default function DetailCard({
  nftobj,
  campsite,
  markFavorite,
  onShowModal,
}) {
  const favorite = useSelector((state) => state.favorites);
  console.log("favorite-State: ", favorite);
  let favoriteCollection = favorite.filter(
    (elm) => elm.collection === nftobj.id
  );

  let isFavorite = !!favoriteCollection.filter(
    (elm) => elm.item === nftobj.index
  ).length;

  const shareNFT = (title, msg, url) => {
    Share.share(
      {
        title,
        message: `${title}: ${msg} ${url}`,
        url,
      },
      {
        dialogTitle: "Share " + title,
      }
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40,
      }}
    >
      <Card
        containerStyle={{
          padding: 0,
          borderRadius: 10,
          height: 560,
          width: 350,
          margin: 5,
          overflow: "hidden",
        }}
      >
        <Card.Image source={{ uri: nftobj.image }} style={styles.img}>
          <View style={{ justifyContent: "center", flex: 1 }}></View>
        </Card.Image>
        <Text style={{ marginTop: 20, fontWeight: "bold", marginLeft: 20 }}>
          {nftobj.name}
        </Text>

        <Text
          style={{
            marginBottom: 0,
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          {nftobj.price}
        </Text>

        <Text
          style={{
            marginTop: 0,
            fontWeight: "bold",
            marginLeft: 20,
            color: "#43484C",
            fontSize: 10,
            marginBottom: 0,
          }}
        >
          Current Price
        </Text>
        <View style={styles.cardRow}>
          <Icon
            name={isFavorite ? "heart" : "heart-o"}
            type="font-awesome"
            color={isFavorite ? "#f50" : "#43484C"}
            size={25}
            onPress={() => {
              markFavorite();
            }}
          />
          <Icon
            name={"pencil"}
            type="font-awesome"
            color="#5637DD"
            size={25}
            onPress={() => onShowModal()}
          />
          <Icon
            name={"share"}
            type="font-awesome"
            color="#5637DD"
            size={25}
            onPress={() => shareNFT(nftobj.name, nftobj.price, nftobj.image)}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  cardRow: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    margin: 20,
  },
  img: {
    height: 400,
  },
});
