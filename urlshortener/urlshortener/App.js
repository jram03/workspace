import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import React from 'react';
import { useState,useEffect } from 'react';
import Main from './components/Main';

export default function App() {
  const [hdata,sethdata]=useState([]);
  const [searchTerm,setSearchterm] = useState('');
  const [searchResults,setSearchresults]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://192.168.1.39:3005/history");
        const arr = response.data;
        sethdata(arr);
      } catch (err) {
        console.log("fail");
      }
    };

    fetchData();
  }, []);


  const searchHandler =(st) =>{
    setSearchterm(st);
    if(st !== ""){
      const newHlist = hdata.filter((hd)=>{
        return Object.values(hd).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
        console.log(Object.values(hd).join(" ").toLowerCase().includes(searchTerm.toLowerCase()));
      });
      setSearchresults(newHlist);
    }
    else{
      setSearchresults(hdata);
    }
   }

  const deletehandler=(id)=>{
    console.log(id)
    try {
        
        axios.delete(`http://192.168.1.39:3005/history/${id}`).then((res)=>{
          console.log("deleted");
          const newlist = hdata.filter((el)=>el.id!=id);
          sethdata(newlist);
        }).catch((e)=>{console.log("failed "+e)})
    }
    catch(er){
      console.log("failed "+er)
    }
}
  return (
    <View style={styles.container}>
      <Header />
      <Main hdata={hdata} sethdata={sethdata}/>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    // padding: 50
  },
});
