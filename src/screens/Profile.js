//screens/Profile.js

import React from 'react'
import {View, Text, Stylesheet} from 'react-native'

class Profile extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Profile Screen
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Profile