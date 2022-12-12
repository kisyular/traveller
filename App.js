import { TailwindProvider } from 'tailwindcss-react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import Discover from './src/screens/Discover'
import ItemScreen from './src/screens/ItemScreen'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<TailwindProvider>
			<SafeAreaProvider>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name='Home' component={HomeScreen} />
						<Stack.Screen name='Discover' component={Discover} />
						<Stack.Screen
							name='ItemScreen'
							component={ItemScreen}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</TailwindProvider>
	)
}
