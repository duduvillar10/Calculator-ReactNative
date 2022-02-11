
import { Props } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface LayoutProps {
    children: React.ReactNode,
    prefix: string
}

const H1: React.FC<LayoutProps> = (props) => {
    return (
        <View >
            <Text style = {styles.h1}>{props.prefix}-{props.children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    h1: {
        fontSize:70
    }
})

export default H1