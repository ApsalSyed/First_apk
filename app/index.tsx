

import WWECard from '@/components/WWECard'
import {Text, SafeAreaView,StyleSheet,Platform, ImageSourcePropType, ScrollView} from 'react-native'

const getPowerDetails=(power :string) =>
{
  switch(power.toLowerCase())
  {
      case  "max":
      return {borderColor : "black", emoji:"⬆️"}
      case  "high":
      return {borderColor : "black", emoji:"⚡️"}
      case  "medium":
      return {borderColor : "black", emoji:"👌🏻"}
      case  "low":
      return {borderColor : "black", emoji:"👇🏻"}
      default : 
      {
        return {borderColor:"red", emoji:"❔"}
      }

  }


}


function index() {

  const johnCenaData={
    name: "John Cena",
    image: require('../assets/images/johnCena.png'),
    height:170,
    weight :93,
    power:"max",
    rank:1,
    favAttacks:["AAA","Chock Slam","Codebreaker"]
  }
  const randyOrtan={
    name: "Randy Ortan",
    image: require('../assets/images/randyOrtan.png'),
    height:182,
    weight :83,
    power:"medium",
    rank:1,
    favAttacks:["dead Lock","Chock Slam","AAA"]
  }
  const romanReigns={
    name: "Roman Reigns",
    image: require('../assets/images/RomanReigns.png'),
    height:158,
    weight :88,
    power:"high",
    rank:1,
    favAttacks:["Sphear","Slam","upper cut"]
  }
  const hulk={
    name: "Hulk",
    image: require('../assets/images/hulk.png'),
    height:112,
    weight :343,
    power:"low",
    rank:1,
    favAttacks:["Slam","Neck Kick","deadLock"]
  }

  const johnCenaDetails = getPowerDetails(johnCenaData.power);
  const randyOrtanDetails = getPowerDetails(randyOrtan.power);
  const romanReignsDetails = getPowerDetails(romanReigns.power);
  const hulkDetails = getPowerDetails(hulk.power);
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <ScrollView>
        <WWECard {...johnCenaData} borderColor={johnCenaDetails.borderColor} emoji={johnCenaDetails.emoji} />
        <WWECard {...randyOrtan} borderColor={randyOrtanDetails.borderColor} emoji={randyOrtanDetails.emoji} />
        <WWECard {...romanReigns} borderColor={romanReignsDetails.borderColor} emoji={romanReignsDetails.emoji} />
        <WWECard {...hulk} borderColor={hulkDetails.borderColor} emoji={hulkDetails.emoji} />
      </ScrollView>
      </ScrollView>
      </SafeAreaView>

  )
}

export default index

const styles =StyleSheet.create({
  container:
  {
    flex:1,
    backgroundColor:"lightblue",
    paddingTop :Platform.OS === "android"?25:10,
  }
})