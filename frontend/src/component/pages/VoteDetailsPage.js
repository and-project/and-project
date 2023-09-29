import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


export default function VoteDetailsPage({route}) {

    const navigation = useNavigation();
    const {id} = route.params
    const {username} = route.params
    const {phone} = route.params
    const {email} = route.params

    const [isLikeChecked, setLikeChecked] = useState(false);
    const [isDisLikeChecked, setDisLikeChecked] = useState(false);
    const [isAbstainChecked, setAbstainChecked] = useState(false);

    const textFontSize = {
        mainText : wp('5%'),
        subText : wp('3%'),
        icon : wp('3%'),
        voteText : wp('2%')

    }


  return (
    <View style={styles.container}>
      <View style={styles.voteContainer}>
        <Text style={[styles.voteText, { fontSize: textFontSize.mainText }]}>
          투표 현황
        </Text>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleText, { fontSize: textFontSize.subText }]}>
            {username}
          </Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={[styles.titleText, { fontSize: textFontSize.subText }]}>
            {email}
          </Text>
        </View>
        <View style={styles.dayContainer}>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={[
                styles.dateText,
                { paddingLeft: 10, fontSize: textFontSize.subText },
              ]}
            >
              시작일자 : {username}
            </Text>
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={[
                styles.dateText,
                { paddingRight: 10, fontSize: textFontSize.subText },
              ]}
            >
              마감일자 : {username}
            </Text>
          </View>
        </View>


        <View style={styles.voteResultContainer}>
          <View style={styles.voteCheckContainer}>
            <View style={styles.voteKindContainer}>
              <AntDesign name="like2" size={textFontSize.icon} color="black" />
              <Text style={{ fontSize: textFontSize.subText, paddingLeft: 10 }}>
                좋아요
              </Text>
            </View>
            <View style={styles.voteKindContainer}>
            <Checkbox
                style={[styles.checkbox, {size:textFontSize.icon}]}
                value={isLikeChecked}
                onValueChange={setLikeChecked}
                color={isLikeChecked ? "black" : undefined}
              />
              <Text style={{ fontSize: textFontSize.voteText, paddingLeft: 5 }}>
                투표하기
              </Text>
            </View>
          </View>
          <View style={styles.voteCheckContainer}>
            <View style={styles.voteKindContainer}>
              <AntDesign
                name="dislike2"
                size={textFontSize.icon}
                color="black"
              />
              <Text style={{ fontSize: textFontSize.subText, paddingLeft: 5 }}>
                싫어요
              </Text>
            </View>
            <View style={styles.voteKindContainer}>
              <Checkbox
                style={[styles.checkbox, {size:textFontSize.icon}]}
                value={isDisLikeChecked}
                onValueChange={setDisLikeChecked}
                color={isDisLikeChecked ? "black" : undefined}
              />
              <Text style={{ fontSize: textFontSize.voteText, paddingLeft: 5 }}>
                투표하기
              </Text>
            </View>
          </View>
          <View style={styles.voteCheckContainer}>
            <View style={styles.voteKindContainer}>
              <MaterialCommunityIcons
                name="note-off-outline"
                size={textFontSize.icon}
                color="black"
              />
              <Text style={{ fontSize: textFontSize.subText, paddingLeft: 5 }}>
                기 권
              </Text>
            </View>
            <View style={styles.voteKindContainer}>
            <Checkbox
                style={[styles.checkbox, {size:textFontSize.icon}]}
                value={isAbstainChecked}
                onValueChange={setAbstainChecked}
                color={isAbstainChecked ? "black" : undefined}
              />
              <Text style={{ fontSize: textFontSize.voteText, paddingLeft:5, }}>
                투표하기
              </Text>
            </View>
          </View>
        </View>

      <View style={styles.submitContainer}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}
          style={styles.submitButton}>
          <Text style={{fontSize:textFontSize.subText}}>돌아가기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={{fontSize:textFontSize.subText}}>투표하기</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  voteContainer: {
    width: wp("90%"),
    height: hp("80%"),
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: "center",
    elevation : 1,
    backgroundColor : 'white',
    opacity : 0.9
  },

  voteText: {
    fontSize: 30,
    alignSelf: "center",
    paddingTop: 0,
  },

  titleContainer: {
    borderWidth: 1,
    height: hp("7%"),
    width: wp("85%"),
    marginTop: 0,
    borderRadius: 10,
    justifyContent: "center",
    elevation : 1,
    backgroundColor : 'white',
    opacity : 0.8
  },

  titleText: {
    paddingLeft: 20,
    fontSize: 15,
    fontWeight: "700",
  },

  descContainer: {
    borderWidth: 1,
    height: hp("20%"),
    width: wp("85%"),
    marginTop: 0,
    justifyContent: "center",
    borderRadius: 10,
    elevation : 1,
    backgroundColor : 'white',
    opacity : 0.8
  },

  dayContainer: {
    borderWidth: 1,
    height: hp("8%"),
    width: wp("85%"),
    borderRadius: 10,
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation : 1,
    backgroundColor : 'white',
    opacity : 0.8
  },

  dateText: {
    fontSize: 12,
  },

  voteResultContainer: {
    borderWidth: 1,
    height: hp("15%"),
    width: wp("85%"),
    marginTop: 0,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation : 1,
    backgroundColor : 'white',
    opacity : 0.8
  },

  voteCheckContainer: {
    borderWidth: 0,
    height: hp("8%"),
    width: wp("20%"),
    justifyContent: "center",
    alignItems: "center",
  },

  voteKindContainer: {
    borderWidth: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop : 5,
  },

  checkbox : {
    borderRadius : 20,
    borderColor : 'black',
  },

  submitContainer : {
    borderWidth: 0,
    width : wp('85%'),
    height : hp('10%'),
    marginTop : 0,
    borderRadius : 10,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-around'
  },

  submitButton : {
    borderWidth : 0,
    height : hp('5%'),
    width : wp('25%'),
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 5,
    elevation : 1,
    backgroundColor : 'white'
  }
});