import React from "react"
import { Button, View } from "react-native"

interface IProps {
    title: string;
    setCurrent: Function;
    setShow: Function
}

const NumericButton: React.FC<IProps> = ({title, setCurrent, setShow}) => {
    return (
        <View >
            <Button title={title} onPress={() => {
                setShow(true)
                setCurrent((cur: string) =>`${cur+title}`) }}/>
        </View>
    )
}

export default NumericButton