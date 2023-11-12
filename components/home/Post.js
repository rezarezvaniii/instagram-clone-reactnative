import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Post = ({ post }) => {
  return (
    <View style={{ marginTop: 30 }}>
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image style={styles.storyImg} source={{ uri: post.profile_img }} />
      <Text style={{ color: "white", fontWeight: "700", marginLeft: 5 }}>
        {post.user}
      </Text>
    </View>
    <Text style={{ color: "white", fontWeight: "900", fontSize: 20 }}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.image }}
      style={{ resizeMode: "cover", height: "100%", width: "100%" }}
    />
  </View>
);

const PostFooter = ({ post }) => (
  <View>
    <FooterButtons />
    <FooterDetails post={post} />
  </View>
);

const FooterButtons = ({ post }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={require("../../assets/icons/heart.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={require("../../assets/icons/comment.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={require("../../assets/icons/send.png")}
        />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={require("../../assets/icons/bookmark.png")}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const FooterDetails = ({ post }) => (
  <>
    <Text style={{ color: "white" }}>{post.likes} likes</Text>
    <View>
      <Text style={{ color: "'white" }}>
        <Text style={{ color: "white", fontWeight: "800" }}>{post.user} </Text>
        <Text style={{ color: "white" }}>{post.caption}</Text>
      </Text>
    </View>

    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View {post.comments.length > 1 ? "all" : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
    <Comments post={post} />
  </>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => 
    (
      <View key={index}>
        <Text style={{color:'white'}}>
          <Text style={{ color: "white" , fontWeight:'900' }}>{comment.user} </Text>
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

export default Post;

const styles = StyleSheet.create({
  storyImg: {
    width: 50,
    height: 50,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "tomato",
    marginLeft: 6,
  },
  footerIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
