
import React,{useState,useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,Button,Image,TouchableOpacity
  
} from 'react-native';
import Cards from "./Cards"
import Icon from 'react-native-vector-icons/Ionicons';
import database from "@react-native-firebase/database";
import {connect } from "react-redux"






function MainScreen(props){
//   const [user,setUser]=useState({})


//     useEffect(()=>{
//     if(props.userInfo!={}){
//     setUser(props.userInfo)
//     props.changeisuser(user)


// }
// },[]
//     )
  // console.log("pros",props.Category)

  const [items,setItems]=useState([])
  database().ref(`/Products/${props.Category}/`).once("value").then(snapshot=>{
    console.log("SNAP",snapshot)
    // setItems(snapshot.val())
    setItems(Object.values(snapshot.val()))
  })

  return(
      <>
        <View  style={{backgroundColor:"#1f1f14"}}>
            <View style={{ margin: 7 }}>
                    <Icon name='menu-sharp'
                        size={40}
                        color='#ff6600'
                        onPress={() => props.navigation.openDrawer()}
                    />
           
                </View>
        </View>
        <ScrollView vertical={true}>
        <View>
        {/* <Image resizeMode='contain' source={require("../Images/Logo.png")} style={{height: 100, width: 100,alignSelf:"center"}}/> */}
        <Text style={{fontSize: 25,fontWeight: 'bold',color: '#ff6600',margin:10,}}>
                          Welcome to Shopping app
          </Text>
          <Text style={{fontSize: 18,color: 'black',margin:10,}}>Delivering excitement, innovation and freshness.An exciting place for the whole family to shop.Enjoy your Shopping! </Text>
            {/* <Image resizeMode='stretch' source={require("../Images/shoppingGif.gif")} style={{height: 250, width: "100%"}}/> */}
            <Image resizeMode='stretch' source={{uri:"https://hosservices.com/hos-assets/uploads/2021/03/ecommerce-illustration-animation.gif.pagespeed.ce_.WgBd6dsu3t-min.gif"}} style={{height: 200, width: "100%"}}/>

        </View>
        <Text style={{fontSize: 25,fontWeight: 'bold',color: '#ff6600',margin:10,}}>
                         Categories
          </Text>
        <View  style={{ flexDirection: 'row', marginTop:20,alignSelf:"center"}}>
                <TouchableOpacity  onPress={()=>Category(CategoryList[0])} style={{ flexDirection: 'column', width: 90, height: 90, margin: 15, backgroundColor: 'white', color: '#ff6600'}}>
                    <Image  source={{uri:"https://cdn-icons-png.flaticon.com/512/667/667995.png?w=360&t=st=1662993201~exp=1662993801~hmac=c7a51e254373aed2c5bad06d7004d8b93549bb0fd8c09bab656b63eb15f21152"}} style={{ width: 80, height: 80,marginLeft:5}} />
                    <Text style={{color:"black",fontSize:20,textAlign:"center"}}>Clothes</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>Category(CategoryList[0])} style={{ flexDirection: 'column', width: 90, height: 90, margin: 15, backgroundColor: 'white', color: '#ff6600'}}>
                    <Image  source={{uri:"https://cdn-icons-png.flaticon.com/512/667/667995.png?w=360&t=st=1662993201~exp=1662993801~hmac=c7a51e254373aed2c5bad06d7004d8b93549bb0fd8c09bab656b63eb15f21152"}} style={{ width: 80, height: 80,marginLeft:5}} />
                    <Text style={{color:"black",fontSize:20,textAlign:"center"}}>Clothes</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>Category(CategoryList[0])} style={{ flexDirection: 'column', width: 90, height: 90, margin: 15, backgroundColor: 'white', color: '#ff6600'}}>
                    <Image  source={{uri:"https://cdn-icons-png.flaticon.com/512/667/667995.png?w=360&t=st=1662993201~exp=1662993801~hmac=c7a51e254373aed2c5bad06d7004d8b93549bb0fd8c09bab656b63eb15f21152"}} style={{ width: 80, height: 80,marginLeft:5}} />
                    <Text style={{color:"black",fontSize:20,textAlign:"center"}}>Clothes</Text>
                </TouchableOpacity>
                </View>

                <View  style={{ flexDirection: 'row', marginTop:20,alignSelf:"center"}}>
                <TouchableOpacity  onPress={()=>Category(CategoryList[0])} style={{ flexDirection: 'column', width: 90, height: 90, margin: 15, backgroundColor: 'white', color: '#ff6600'}}>
                    <Image  source={{uri:"https://cdn-icons-png.flaticon.com/512/667/667995.png?w=360&t=st=1662993201~exp=1662993801~hmac=c7a51e254373aed2c5bad06d7004d8b93549bb0fd8c09bab656b63eb15f21152"}} style={{ width: 80, height: 80,marginLeft:5}} />
                    <Text style={{color:"black",fontSize:20,textAlign:"center"}}>Clothes</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>Category(CategoryList[0])} style={{ flexDirection: 'column', width: 90, height: 90, margin: 15, backgroundColor: 'white', color: '#ff6600'}}>
                    <Image  source={{uri:"https://cdn-icons-png.flaticon.com/512/667/667995.png?w=360&t=st=1662993201~exp=1662993801~hmac=c7a51e254373aed2c5bad06d7004d8b93549bb0fd8c09bab656b63eb15f21152"}} style={{ width: 80, height: 80,marginLeft:5}} />
                    <Text style={{color:"black",fontSize:20,textAlign:"center"}}>Clothes</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>Category(CategoryList[0])} style={{ flexDirection: 'column', width: 90, height: 90, margin: 15, backgroundColor: 'white', color: '#ff6600'}}>
                    <Image  source={{uri:"https://cdn-icons-png.flaticon.com/512/667/667995.png?w=360&t=st=1662993201~exp=1662993801~hmac=c7a51e254373aed2c5bad06d7004d8b93549bb0fd8c09bab656b63eb15f21152"}} style={{ width: 80, height: 80,marginLeft:5}} />
                    <Text style={{color:"black",fontSize:20,textAlign:"center"}}>Clothes</Text>
                </TouchableOpacity>
                </View>
      </ScrollView>
      </>
    )


}



function mapStateToProps(state) {
  return {
      Category:state.Category,
      userInfo:state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // changeisuser:(userInfo)=>dispatch({type:"CHANGE_USER",userInfo:userInfo})
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(MainScreen)
