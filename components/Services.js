import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import React from "react";

const Services = () => {
  const services = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLQyHJgf5FD8H5Gkn2wDZ2GgGVHnV8Sgb8w&usqp=CAU",
      name: "Washing",
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
      name: "Laundry",
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
      name: "Wash & Iron",
    },
    {
      id: "13",
      image:
        "data:image/jpeg;base64,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",
      name: "Cleaning",
    },
  ];

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 7 }}>
        Services Available
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services.map((service, index) => (
          <Pressable
            style={{
              margin: 10,
              backgroundColor: "white",
              padding: 20,
              borderRadius: 7,
            }}
            key={index}
          >
            <Image
              source={{ uri: service.image }}
              style={{ width: 70, height: 70 }}
            />

            <Text style={{ textAlign: "center", marginTop: 10 }}>
              {service.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
