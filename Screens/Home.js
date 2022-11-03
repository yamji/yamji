import {Text, View,Button} from 'react-native';
const Home = (props) => {
    return (
        <View style ={{
            flex:1,
            algnItmes:'center',
            justifyContent:'center'}}>
            <Text>Home Screen</Text>
        <Button
          title='To User Screen'
          onPress={()=>{
            props.navigation.navigate("User",
            {
                userIdx:100,
                username:"J",
                userLastName:"Y"   
            })
          }}/>
        </View> );
}

export default Home;