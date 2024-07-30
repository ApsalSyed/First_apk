import { Text, View,StyleSheet,Platform,ImageSourcePropType, Image } from "react-native";
interface Props {
    name:string,
    image:ImageSourcePropType,
    height:number,
    power:string,
    weight:number,
    rank:number,
    favAttacks:string[]
    borderColor:string,
    emoji: string
    
  }
export default function WWECard({name,image,height,weight,power,rank,favAttacks,emoji,borderColor}:Props) {
  return (
    <View style={styles.card}>

        <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.rank}>Rank: {rank}</Text>
        </View>

        <Image source={image} style={styles.images} accessibilityLabel={`${name}  Wrestler`} resizeMode="contain"/>

        <View>
            <View style={styles.emojiPowerContainer}>
            <Text style={styles.text}>Power :{power}</Text>
                <Text style={styles.emoji}>{emoji}</Text>
                
            </View>
        </View>

        <View style={styles.heightWeightContainer}>
            <Text><Text style={styles.boldText}>Height :</Text>{height}</Text>
            <Text><Text style={styles.boldText}>Weight :</Text>{weight}</Text>
        </View>

        <View style={styles.favAttContainer}>
            <Text style={styles.favAttText}><Text style={styles.boldText}>Fav Att :  </Text>{favAttacks.join(", ")}</Text>
        </View>
    </View>
  )
}

const styles =StyleSheet.create({
    card:
    {
        backgroundColor:"white",
        borderRadius:16,
        borderWidth:2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios:{
                shadowOffset :{width:2,height:2},
                shadowColor:"gray",
                shadowOpacity : 0.3,
                shadowRadius: 4,
            },
            android:
            {
                elevation: 5,
            }
        })
    },
    nameContainer : 
    {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom:32,
    },
    name:
    {
        fontSize:32,
        fontWeight:"bold"
    },
    rank:
    {
        fontSize:32,

    },
    images:
    {
        width:"100%",
        height:200,
        marginBottom:16,
    },
    emojiPowerContainer:
    {
        flexDirection:"row",
        justifyContent:"space-between",
        margin:16,
    },
    emoji:
    {
        fontSize:20
    },
    text :
    {
        fontSize:20,
        fontWeight:"500"
    },
    heightWeightContainer:
    {
        flexDirection:"row",justifyContent:"space-between",
        margin:16
    },
    boldText:
    {
        fontWeight:"bold"
    },
    favAttContainer:
    {
        alignItems: "center",
    },
    favAttText:
    {
        borderBlockColor:"green"
    },

})

