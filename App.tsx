import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import Calculation from './Calculation';
import H1 from './H1';
import NumericButton from './NumericButton';
import OperationButton from './OperationButton';

export default function App() {
  const [current, setCurrent] = React.useState("");
  const [show, setShow] = React.useState(true);
  const [calculationField, setCalculationField] = React.useState("");

  const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return (
    <View style={styles.container}>
      <H1 prefix="H1">Calculadora</H1>
      <Text>{calculationField}</Text>
      {show && (<TextInput style={styles.input} value={current} />)}
      {array.map((item) => (<NumericButton title={item} setCurrent={setCurrent} />))}
      <OperationButton title="+" setCalculationField={setCalculationField} current={current} setCurrent={setCurrent} />
      <OperationButton title="-" setCalculationField={setCalculationField} current={current} setCurrent={setCurrent} />
      <OperationButton title="÷" setCalculationField={setCalculationField} current={current} setCurrent={setCurrent} />
      <OperationButton title="x" setCalculationField={setCalculationField} current={current} setCurrent={setCurrent} />
      <Pressable
        onPressIn={() => {
          setCalculationField(() => {
            
            if (!calculationField) {
              setCurrent("")
              return current
            }

            if(!/[^\d]/g.test(String(calculationField))){
              setCurrent("")
              return calculationField
            }

            if (!current) {
              return  calculationField.replace(/[^\d]$/g,"")
            }
            
            const result = Calculation(calculationField, current)

            setCurrent("")
            return result
          })
        }}
      ><Text>=</Text></Pressable>
      <StatusBar style="auto" />
      <Button title="mostrar" onPress={() => { setShow(!show) }}></Button>
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 36
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
