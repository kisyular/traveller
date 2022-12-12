import { TailwindProvider } from 'tailwindcss-react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<TailwindProvider>
			<SafeAreaProvider>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen name='Home' component={HomeScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</TailwindProvider>
	)
}
