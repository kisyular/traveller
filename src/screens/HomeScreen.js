import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
	const navigation = useNavigation()
	//Use layoutEffect to hide the header
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [navigation])

	return (
		<SafeAreaView className='flex-1 bg-red-white relative'>
			<View className='flex-row px-6 mt-8 items-center space-x-2'>
				<View className='w-16 h-16 bg-black rounded-full items-center justify-center'>
					<Text className='text-3xl font-bold text-[#05b8c6]'>
						Go
					</Text>
				</View>
				<Text className='text-3xl font-bold'>Travel</Text>
			</View>

			<View className='px-6 mt-8 space-y-3'>
				<Text className='text-[42px] text-[#3C6072]'>
					Enjoy the trip with
				</Text>
				<Text className='text-[38px] font-bold text-[#05b8c6]'>
					Good Moments
				</Text>
				<Text className='text-[#3C6072] text-base'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nihil quibusdam consequatur quas expedita, aspernatur vero
					dolore.
				</Text>
			</View>

			<View className='w-[400px] h-[400px] absolute -right-36 bg-[#05b8c6] rounded-full bottom-20'></View>
			<View className='w-[400px] h-[400px] absolute -left-36 bg-[#e89263] rounded-full -bottom-20'></View>

			<View className='flex-1 relative items-center justify-center'>
				<Image
					source={require('../../assets/images/heroImage.png')}
					className='w-full h-full object-cover mt-8'
				/>

				<View className='absolute bottom-28 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#05b8c6] items-center justify-center rounded-full'>
					<TouchableOpacity>
						<View className='w-20 h-20 bg-[#05b8c6] items-center justify-center rounded-full'>
							<Text className='text-gray-50 text-4xl font-semibold'>
								Go
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen
