import { Link } from 'expo-router';
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <Text className="font-bold text-3xl my-10 font-rubik">Welcome to ReState</Text>
      <Link className="underline my-2" href="/sign-in">Sign In</Link>
      <Link className="underline my-2" href="/explore">Explore</Link>
      <Link className="underline my-2" href="/profile">Profile</Link>
      <Link className="underline my-2" href="/properties/1">Property</Link>
    </View>
  );
}
