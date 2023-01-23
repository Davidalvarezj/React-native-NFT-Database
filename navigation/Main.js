import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HomeNavigation from "./HomeNavigation";
import SearchNavigation from "./SearchNavigation";
import StatsNavigation from "./StatsNavigation";
import UserScreenNavigation from "./UserScreenNavigation";
import { fetchCategories } from "../features/categoriesSlice";
import { fetchLearning } from "../features/learningSlice";
import { fetchSpotlight } from "../features/spotlightSlice";
import { fetchTop } from "../features/topSlice";
import { fetchNotable } from "../features/notableSlice";

const screenOptions = {
  headerTintColor: "#fff",
  headerStyle: { backgroundColor: "#5637DD" },
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchLearning());
    dispatch(fetchSpotlight());
    dispatch(fetchTop());
    dispatch(fetchNotable());
  }, [dispatch]);

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsNavigation}
        options={{
          tabBarLabel: "Stats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-stats-chart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigation}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreenNavigation}
        options={{
          tabBarLabel: "My Collection",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
