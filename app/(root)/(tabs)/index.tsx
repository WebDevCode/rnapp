import { Link } from 'expo-router';
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <Text className="font-bold text-lg my-10">Hello World</Text>
      <Link className="underline my-2" href="/sign-in">Sign In</Link>
      <Link className="underline my-2" href="/explore">Explore</Link>
      <Link className="underline my-2" href="/profile">Profile</Link>
      <Link className="underline my-2" href="/properties/1">Property</Link>
    </View>
  );
}
