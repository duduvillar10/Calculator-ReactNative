import React from "react"
import { Button, View } from "react-native"
import Calculation from "./Calculation"

interface IProps {
    title: string
    setCalculationField: Function
    setCurrent: Function
    current: string
}

const OperationButton: React.FC<IProps> = ({ title, setCalculationField, setCurrent, current }) => {
    return (
        <View>
            <Button title={title} onPress={() => {
                    setCalculationField((calculationField: string) => {
                        if(!calculationField && !current){
                            return `0${title}`
                        }

                        if(!calculationField){
                            setCurrent("")
                            return `${current}${title}`
                        }

                        if(!/[^\d]/g.test(String(calculationField))){
                            setCurrent("")
                            return `${calculationField}${title}`
                        }

                        if(!current){
                            return calculationField.replace(/[^\d]$/g,title)
                        }

                        const result = Calculation(calculationField, current)
                        
                        setCurrent("")
                        return `${result}${title}`
                    })
            }} />
        </View>
    )
}
export default OperationButton