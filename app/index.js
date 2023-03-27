import { StyleSheet, Text, TextInput, View  , TouchableOpacity} from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Log-in with your credentials</Text>
      <View style={styles.main}>
        <TextInput style={styles.input} placeholderTextColor="#000"  placeholder=" name here ....." autoCapitalize="none" secureTextEntry={false} /*value="username" */ />
      </View>
      <View style={styles.main}>
        <TextInput style={styles.input} placeholderTextColor="#000" placeholder=" email here ....." autoCapitalize="none" secureTextEntry={false} /*value="username" */ />
      </View>
      <View style={styles.main}>
        <TextInput style={styles.input} placeholderTextColor="#000" placeholder=" password  here ....." autoCapitalize="none" secureTextEntry={true} /*value="username" */ />
        <Text style ={styles.text1}>Forgot password ?</Text>
      </View>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>login</Text>
      </TouchableOpacity>

       <View style={styles.textContainer}>

       <Text style ={styles.text2}>Don't have an account ? </Text>
       <Text style ={styles.text3}> Sign-up </Text>
       </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'column',
    padding: 14,
    justifyContent : 'center',
    gap : 20,
    backgroundColor : "gold",
    color : "#008F8",
    
  
  },
  main: {
  
  
    // maxWidth: 1260,
    marginHorizontal: 20,
    marginVertical: 10,

  },

  input: {
    borderBottomColor : "#000",
    borderBottomWidth : .5,
    // backgroundColor : "yellow",
    width : "100%",
 
    
  },

  text : {
    alignSelf: "center",
    marginVertical :30,
    fontSize : 20,
    fontWeight : "bold",
  },
  text1 : {
    alignSelf: "flex-end",
    marginVertical :10,
    fontSize : 16,
    fontWeight : "bold",
  },
  text2 : {
    
    marginVertical :10,
    fontSize : 16,
    fontWeight : "bold",
  },
  textContainer : {
    flexDirection:"row",
    justifyContent:"center",
    alignItems: "center",
    marginVertical :10,
    fontSize : 16,
    fontWeight : "bold",
  },
  text3 : {
    color: "#015958",
    marginVertical :10,
    fontSize : 19,
    fontWeight : '700',
    fontVariant : "oldstyle-nums",
    
  },


  button: {
    alignItems: 'center',
    borderWidth:1,
    borderColor: "#000",
    backgroundColor : "#000",
    padding: 10,
    marginHorizontal : 70,
    marginTop : 10 ,
    width: 120,
    alignSelf : 'center',
    
    
  },

  buttonText : {
    color : '#FFF',
    fontWeight : 700,
    fontSize : 18,
    

  }


});
