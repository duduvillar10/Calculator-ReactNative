import React from "react"
import { Button, View } from "react-native"

interface IProps {
    title: string;
    setCurrent: Function;
}

const NumericButton: React.FC<IProps> = ({title, setCurrent}) => {
    return (
        <View >
            <Button title={title} onPress={() => {
                setCurrent((cur: string) =>`${cur+title}`) }}/>
        </View>
    )
}

export default NumericButton