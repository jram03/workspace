import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { nanoid } from "nanoid";
import "react-native-get-random-values";
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Main({ hdata, sethdata }) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shorturl, setShortUrl] = useState("");
  const [cpy_status, setcpystatus] = useState("copy");

  const formHandler = async () => {
    console.log("ori url : " + originalUrl);
    try {
      const response = await axios.post(
        "http://192.168.1.39:4000/create",
        { url: originalUrl },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (
        response &&
        response.data &&
        response.data.data &&
        response.data.data.tiny_url
      ) {
        setShortUrl(response.data.data.tiny_url);
        console.log("before uid", shorturl);
        // let newid = 1897;
        console.log("aftr");
        // console.log(newid);
        sethdata([
          ...hdata,
          {
            // id: newid,
            long_url: originalUrl,
            short_url: response.data.data.tiny_url,
          },
        ]);
        formHandler2(response.data.data.tiny_url);
      } else {
        console.log("Invalid response data structure");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const formHandler2 = async (url) => {
    try {
      console.log("form hqandler 2:", url);
      const res = await axios.post(
        "http://localhost:3005/history",
        {
          long_url: originalUrl,
          shorturl: url,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (e) {}
  };

  console.log("before uid", shorturl);
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          keyboardType="default"
          value={originalUrl}
          onChangeText={(e) => {
            setOriginalUrl(e);
          }}
        />
        <TouchableOpacity style={styles.button} onPress={formHandler}>
          <Text style={styles.buttonText}>Click Me</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.resultText}>{shorturl}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginTop: 10,
  },
  container: {},
  box: {},
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
    backgroundColor: "lightgray",
    marginBottom: 10,
    width: 320,
    marginTop: 50,
  },
  button: {
    backgroundColor: "coral",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    opacity: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
