import React from "react"
import { Button, View } from "react-native"
import Calculation from "./Calculation"

interface IProps {
    title: string
    setCalculationField: Function
    setCurrent: Function
    current: string
    setShow: Function
    setResult: Function
}

const OperationButton: React.FC<IProps> = ({ title, setCalculationField, setCurrent, current, setShow ,setResult}) => {
    return (
        <View>
            <Button title={title} onPress={() => {
                    setCalculationField((calculationField: string) => {
                        
                        if(!calculationField && !current){
                            return `0${title}`
                        }
                        
                        if(!calculationField){
                            setCurrent("")
                            setShow(false)
                            setResult(current)
                            return `${current}${title}`
                        }
                        
                        if(!current){
                            if(!/[^(\d.)]$/g.test(String(calculationField))){
                                return `${calculationField}${title}`
                            }
                            
                            return calculationField.replace(/[^(\d.)]$/g,title)
                        }

                        const result = Calculation(calculationField, current)
                        
                        setShow(false)
                        setResult(result)
                        setCurrent("")
                        return `${result}${title}`
                    })
            }} />
        </View>
    )
}
export default OperationButton