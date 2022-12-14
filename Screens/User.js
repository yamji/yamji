import { Button, Text, View } from 'react-native';
   const User = (props) => {
    const {params} = props.route
    const userIdx = params? params.userIdx:null;
    const userName = params? params.userName:null;
    const userLastName = params? params.userLastName:null;
    return (
        <View style = {{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
           }}>
               <Text>User Screen</Text>
            <Button
              title='To Home Screen'
              onPress={()=>{
                props.navigation.navigate("Home")
              }}></Button>
              <Text>UserIdx: {JSON.stringify(userIdx)}</Text>
              <Text>User Name: {JSON.stringify(userName)}</Text>
              <Text>User LastName: {JSON.stringify(userLastName)}</Text>
           </View> );
   }
   
   export default User;