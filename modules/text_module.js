import { StyleSheet, Text } from 'react-native';
import { useFonts } from '@/node_modules/expo-font/build/FontHooks';
import InriaSansRegular from '../assets/inria_sans/InriaSans-Regular.ttf'
import InriaSansLight from '../assets/inria_sans/InriaSans-Light.ttf'
import InriaSansBold from '../assets/inria_sans/InriaSans-Bold.ttf'
//main styled-text component
function StyledText({ children, style }) {
	return <Text style={style}>{children}</Text>;
}

//renditions
export function Header({ children, style }) {
	return <StyledText style={[styles.header, style]}>{children}</StyledText>;
}

export function Subtitle({ children, style }) {
	return <StyledText style={[styles.subtitle, style]}>{children}</StyledText>;
}

export function Body({ children, style }) {
	return <StyledText style={[styles.body, style]}>{children}</StyledText>;
}

export function Caption({ children, style }) {
	return <StyledText style={[styles.caption, style]}>{children}</StyledText>;
}

const styles = StyleSheet.create({
	header: {
	  fontSize: 24,
	  fontWeight: 'bold',
	  fontFamily: {InriaSansBold}, // Replace with your custom font if needed
	},
	subtitle: {
	  fontSize: 18,
	  fontWeight: '600',
	  fontFamily: {InriaSansRegular}, // Replace with your custom font if needed
	},
	body: {
	  fontSize: 14,
	  fontWeight: 'normal',
	  fontFamily: {InriaSansRegular}, // Replace with your custom font if needed
	},
	caption: {
	  fontSize: 12,
	  fontWeight: '300',
	  fontFamily: {InriaSansLight}, // Replace with your custom font if needed
	},
  });