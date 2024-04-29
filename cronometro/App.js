import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function App() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const countRef = useRef(null);

  const startTimer = () => {
    setIsActive(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  

  const stopTimer = () => {
    clearInterval(countRef.current);
    setIsActive(false);
  };

  const resetTimer = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./despertador.png')} style={styles.clockImage}>
        <Text style={styles.timerText}>{formatTime()}</Text>
      </ImageBackground>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={isActive ? stopTimer : startTimer}>
          <Text style={styles.buttonText}>{isActive ? 'Parar' : 'Iniciar'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetTimer}>
          <Text style={styles.buttonText}>Zerar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DcDcDc',
  },
  clockImage: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 25,
    fontFamily: 'cursive',
    marginBottom: 30,
    color: '#fff',
    textShadowColor: '#003C5F',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
  button: {
    backgroundColor: '#fff',
    padding: 7,
    borderRadius: 5,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#003C5F',
    fontSize: 16,
    fontFamily: 'cursive',
  },
});

