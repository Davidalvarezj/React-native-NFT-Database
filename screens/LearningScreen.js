import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Modal,
  ImageBackground,
  Image,
} from "react-native";
import { useState } from "react";
import { Card, Button, Icon, Rating, Input } from "react-native-elements";
import YoutubePlayer from "react-native-youtube-iframe";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../features/favoritesSlice";
import { addComment } from "../features/commentsSlice";

import DetailCard from "../components/DetailCard";
import React from "react";

export default function LearningScreen(route, navigation) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = (state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  };

  const learnobj = route.route.params.info;
  console.log("learnobj", learnobj);
  return (
    <ScrollView>
      {learnobj.youtubeid ? (
        <View>
          <YoutubePlayer
            height={300}
            play={playing}
            videoId={learnobj.youtubeid}
            onChangeState={onStateChange}
          />
        </View>
      ) : null}

      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
            padding: 0,
          }}
        >
          {learnobj.name}
        </Text>

        <Text style={{ marginBottom: 0 }}>{learnobj.description1}</Text>
        <Image
          source={{
            uri: learnobj.imgbg,
          }}
          resizeMode="cover"
          style={{
            height: 350,
            padding: 0,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
            marginTop: 0,
            padding: 0,
          }}
        >
          {learnobj.subtitle}
        </Text>
        <Text style={{ marginBottom: 50 }}>{learnobj.description2}</Text>
      </View>
    </ScrollView>
  );
}
