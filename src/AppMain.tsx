import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import H1 from './components/H1';
import NumericButton from './components/NumericButton';
import OperationButton from './components/OperationButton';

export default function AppMain() {
  const [result, setResult] = React.useState("");
  const [show, setShow] = React.useState(true);
  const [current, setCurrent] = React.useState("");
  const [calculationField, setCalculationField] = React.useState("");

  const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return (
    <View style={styles.container}>
      <H1 prefix="H1">Calculadora</H1>
      <Text>{calculationField}</Text>
      <TextInput style={styles.input} value={!show ? result : current}/>
      {array.map((item) => (<NumericButton title={item} setCurrent={setCurrent} setShow={setShow}/>))}
      <OperationButton title="+" setCalculationField={setCalculationField} current={current} setCurrent={setCurrent} setShow={setShow} setResult={setResult}/>
      <OperationButton title="-" setCalculationField={setCalculationField} current={current} setCurrent={setCurrent} setShow={setShow} setResult={setResult}/>
      <OperationButton title="÷" setCalculationField={setCalculationField} current={current} setCurrent={setCurrent} setShow={setShow} setResult={setResult}/>
      <OperationButton title="x" setCalculationField={setCalculationField} current={current} setCurrent={setCurrent} setShow={setShow} setResult={setResult}/>
      <OperationButton title="=" setCalculationField={setCalculationField} current={current} setCurrent={setCurrent} setShow={setShow} setResult={setResult}/>
      <Button title="C" onPress={() => {
        setCalculationField("")
        setCurrent("")
        setResult("")
      }}></Button>
      <StatusBar style="auto" />
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
