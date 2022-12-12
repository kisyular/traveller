import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { TailwindProvider } from 'tailwindcss-react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
	return (
		<TailwindProvider>
			<SafeAreaProvider>
				<SafeAreaView>
					<Text className='text-xl text-red-400'>Test!</Text>
					<StatusBar style='auto' />
				</SafeAreaView>
			</SafeAreaProvider>
		</TailwindProvider>
	)
}
