import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useThemeColors } from "@/constants/theme";
import Spacer from "@/components/Spacer";


export default function Home() {

  const colors = useThemeColors();
  return (
    <View style={[styles.container , {backgroundColor: colors.background}]} >
      <View style={[styles.card , {backgroundColor: colors.primary }]}>
          <Image style={styles.image} source={require("@/assets/images/dock.png")} />
          <Text style={[styles.Boldtext, {color: colors.text}]}>Yahoooooo </Text>
      </View>
      <Spacer flex={2} />
      <View style={ styles.textContainer}>
        <Text style={[styles.text , {color: colors.text}]}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium ducimus voluptate? Sapiente eos dolorum quibusdam numquam veritatis, corrupti nisi amet voluptas repudiandae optio nemo sequi vero minus, consequuntur perferendis.
        Quidem esse pariatur explicabo cupiditate dignissimos hic repellendus sit porro, doloribus, beatae voluptates quas mollitia debitis eos quo, maiores voluptate aperiam eveniet asperiores sunt quaerat error eligendi a consequatur. Fuga?
        Quia nostrum esse deleniti, adipisci neque, amet perspiciatis aspernatur sapiente repudiandae, ullam odit qui. Sit obcaecati, amet, officiis dolorum corporis quisquam nam veritatis mollitia ullam quis non ex minima reprehenderit.
        Tenetur alias, iusto vero ratione error rerum beatae accusantium, corporis illum excepturi suscipit ipsa explicabo magni quasi doloremque iste eveniet? At eaque esse sed culpa deserunt, voluptatibus rerum incidunt. Minus!</Text>
      </View>
      <Text style={{color: colors.text}}>page</Text> 
      <Spacer flex={2} />
      <Spacer flex={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    alignItems: "flex-start",
    width: 150,
    height: 150,
  },
  Boldtext: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textContainer: {
    width: '90%'
  },
  text: {
    fontSize: 15,
    fontStyle: "italic"
  }
});
