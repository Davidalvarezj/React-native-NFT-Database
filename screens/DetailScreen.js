import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Modal,
} from "react-native";
import { useState } from "react";
import { Card, Button, Icon, Rating, Input } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../features/favoritesSlice";
import { addComment } from "../features/commentsSlice";

import DetailCard from "../components/DetailCard";
import React from "react";

export default function DetailScreen(route, navigation) {
  const nftobj = route.route.params.detail;

  const commentobj = useSelector((state) => state.comments);
  const favorite = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  console.log("comment-State:", commentobj);
  const comment = commentobj.commentsArray;
  // console.log("favorite-State:", favorite);
  // console.log("commentArray:", com);
  let favoriteCollection = favorite.filter(
    (elm) => elm.collection === nftobj.id
  );

  let commentfilter = comment.filter(
    (elm) => elm.colectionId === nftobj.id && elm.nftid === nftobj.index
  );

  console.log("commentfilter: ", commentfilter);

  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  // console.log("rating: ", rating);
  // console.log("author: ", author);
  // console.log("text: ", text);
  // console.log("Collection id: ", route.route.params.detail);
  // console.log("nftobj", nftobj);

  const handleSubmit = () => {
    const newComment = {
      author,
      rating,
      text,
      colectionId: nftobj.id,
      nftid: nftobj.index,
      date: new Date().toISOString().slice(0, 10),
    };
    setShowModal(!showModal);
    console.log("newComment Obj: ", newComment);
    dispatch(addComment(newComment));
  };
  const resetForm = () => {
    setRating(5);
    setAuthor("");
    setText("");
  };

  const renderCommentItem = ({ item }) => {
    return (
      <View style={styles.commentItem}>
        <Text style={{ fontSize: 14 }}>{item.text}</Text>
        <Rating
          startingValue={item.rating}
          imageSize={10}
          readonly
          style={{
            paddingVertical: 10,
            alignItems: "flex-start",
            paddingVertical: "5%",
          }}
        />

        <Text
          style={{ fontSize: 12 }}
        >{`--${item.author}, ${item.date},`}</Text>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={commentfilter}
        renderItem={renderCommentItem}
        keyExtractor={(item) => item.author.toString()}
        contentContainerStyle={{ marginHorizontal: 20, paddingVertical: 20 }}
        ListHeaderComponent={(item, index) => (
          <>
            <DetailCard
              nftobj={nftobj}
              markFavorite={() =>
                dispatch(
                  addFavorite({ collection: nftobj.id, item: nftobj.index })
                )
              }
              onShowModal={() => setShowModal(!showModal)}
            />

            {commentfilter.length > 0 ? (
              <Text style={styles.commentsTitle}>Comments</Text>
            ) : (
              <></>
            )}
          </>
        )}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <View style={styles.modal}>
          <Rating
            startingValue={rating}
            imageSize={40}
            showRating
            onFinishRating={(rating) => setRating(rating)}
            style={{ paddingVertical: 10 }}
          />
          <Input
            placeholder="Author"
            onChangeText={(data) => setAuthor(data)}
            value={author}
            leftIcon={
              <Icon
                name={"user-o"}
                type="font-awesome"
                color="#5637DD"
                size={25}
              />
            }
            leftIconContainerStyle={{ paddingRight: 10 }}
          />
          <Input
            placeholder="Comment"
            onChangeText={(data) => setText(data)}
            value={text}
            leftIcon={
              <Icon
                name={"comment-o"}
                type="font-awesome"
                color="#5637DD"
                size={25}
              />
            }
            leftIconContainerStyle={{ paddingRight: 10 }}
          />
          <View style={{ margin: 10 }}>
            <Button
              color="#5637DD"
              title="Submit"
              onPress={() => {
                handleSubmit();
                resetForm();
              }}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Button
              color="#808080"
              title="Cancel"
              onPress={() => {
                setShowModal(!showModal);
                resetForm();
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  commentsTitle: {
    textAlign: "center",
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeigh: "bold",
    color: "#43484D",
    padding: 10,
    paddingTop: 30,
  },
  commentItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
});
