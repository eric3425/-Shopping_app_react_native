import React, {useState,useEffect} from 'react';
import { Image,TouchableOpacity,TouchableNativeFeedback,TouchableHighlight } from 'react-native';
import { Content, Card, CardItem, Text, Left, Body, Right,Button,Icon } from 'native-base';
import database from "@react-native-firebase/database";
import {connect} from "react-redux"
import { changeisproduct, changeisuser } from '../Store/action';





const Cards=(props)=> {


  // useEffect(()=>{
  // console.log("cards",props.userInfo)


  // })
  // console.log("cards",props.userInfo)


  const AddToCart=(user,title,price,url,quantity,detail)=>{
  
    database().ref(`/Cart/${user}/${title}`).update({title,price,url,quantity,detail})
  
  }

//   const [user,setUser]=useState({})


//   useEffect(()=>{
//   if(props.userInfo!={}){
//   setUser(props.userInfo)
//   props.changeisuser(user)
// }})

//   for(var i=0;i<3;i++){
//     if(props.userInfo!=undefined){
//     setUser(props.userInfo.displayName)
// {console.log("asxsxsxsxsxsx",props.userInfo.displayName)}}
// }
  // console.log("qwerty",props.userInfo)

  const Todetails=()=>{
    
    props.changeisproduct([props.TITLE,props.PRICE,props.IMAGE,props.DETAILS])
    props.navigation.navigate("Detail");
  
  }
    return (

        <Content style={{margin:15,backgroundColor:"rgb(106, 109, 124)"}}  >

          <TouchableHighlight underlayColor="rgb(255, 102, 0)" onPress={()=>Todetails()}>
          <Card style={{flex: 0,borderColor:"rgb(106, 109, 124)",borderWidth:5}}>
            <CardItem  >
              <Left style={{marginLeft:-5}} >
              <Body style={{marginLeft:-5}} >
                <Image  source={props.IMAGE} style={{height: 250, width: 180, flex: 1}}/>
              </Body >
              </Left>
              <Right style={{marginLeft:40,marginTop:-10}}>
              <CardItem>
                  <Text  style={{fontSize:22}}>{props.DETAILS}</Text>
            </CardItem>
              </Right>
            </CardItem>
            <CardItem style={{marginBottom:-5}}>
                  <Text  style={{fontSize:20,fontWeight:"bold",fontStyle:"italic"}}>{props.TITLE}</Text>
  
            </CardItem>
            <CardItem style={{marginTop:-5}}>
                  <Text  style={{fontSize:25,textDecorationLine:"underline",color:"rgb(255, 102, 0)"}}>RS: {props.PRICE}</Text>
                  <Right>
                    <Button onPress={()=>AddToCart(props.userInfo.displayName,props.TITLE,props.PRICE,props.IMAGE.uri,1,props.DETAILS)} rounded warning style={{marginLeft:15,marginRight:-25}}   >
                      <Text>Add to Cart</Text>
                    </Button>
                  </Right>
            </CardItem>
          </Card>
          </TouchableHighlight>
        </Content>
    
    );
  
}



function mapStateToProps(state) {
  return {
      product:state.product,
      userInfo:state.userInfo
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeisproduct:(product)=>dispatch(changeisproduct(product)),
    changeisuser:(userInfo)=>dispatch(changeisuser(userInfo))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cards)

