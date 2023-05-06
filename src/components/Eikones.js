import { View, Text , Image , ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import Kartela from './Kartela';

const Eikona = require("../../assets/372551.jpg");
const icon = require("../../assets/left.png");

const Eikones = ({ id, title, description }) => {
    return (
        
         <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        
      </View>
      <Text style={styles.description}>{description}</Text>
          
          <ScrollView
          horizontal
          contentContainerStyle={{
              paddingHorizontal: 15,
              
          }}
          showsHorizontalScrollIndicator={false}
          className="pt-4"
          >
              {/* RestaurantCard*/}
              <Kartela
              id={123}
              ImageSource={Eikona}
              title="Athina"
              rating={4.5}
              genre="japanese"
              address="123 main st"
              short_descriptio="this is a test"
              dishes={[]}
              long={20}
              lat={0}
              />
              <Kartela 
              id={123}
              ImageSource={Eikona}
              title="Athina"
              rating={4.5}
              genre="japanese"
              address="123 main st"
              short_descriptio="this is a test"
              dishes={[]}
              long={20}
              lat={0}
              />
              <Kartela 
              id={123}
              ImageSource={Eikona}
              title="Athina"
              rating={4.5}
              genre="japanese"
              address="123 main st"
              short_descriptio="this is a test"
              dishes={[]}
              long={20}
              lat={0}
              />
              <Kartela 
              id={123}
              ImageSource={Eikona}
              title="Athina"
              rating={4.5}
              genre="japanese"
              address="123 main st"
              short_descriptio="this is a test"
              dishes={[]}
              long={20}
              lat={0}
              />
              <Kartela 
              id={123}
              ImageSource={Eikona}
              title="Athina"
              rating={4.5}
              genre="japanese"
              address="123 main st"
              short_descriptio="this is a test"
              dishes={[]}
              long={20}
              lat={0}
              />
              <Kartela 
              id={123}
              ImageSource={Eikona}
              title="Athina"
              rating={4.5}
              genre="japanese"
              address="123 main st"
              short_descriptio="this is a test"
              dishes={[]}
              long={20}
              lat={0}
              />
          </ScrollView>
      
      
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 5,
      paddingHorizontal: 4,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    /*icon: {
      width: 20,
      height: 20,
    },
    */
    description: {
      fontSize: 12,
      color: 'gray',
      paddingHorizontal: 4,
    },
  });
export default Eikones