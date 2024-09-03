
import { StyleSheet, View, Image } from 'react-native';
import iStatic from '../assets/splash_logo/icon_static.png'
// import iBook from '../assets/splash_logo/icon_book.png'
// import iSignal from '../assets/splash_logo/icon_signal.png'
// import iText from '../assets/splash_logo/icon_text.png'

const styles = StyleSheet.create({
	tinyLogo: {
		flex: 1,
		width: 200,
		height: null,
		resizeMode: 'contain'
	  },
});

export default function SplashAnimation() {
	
	return (
		<View>
			<Image
			style={styles.tinyLogo}
			source = {iStatic}
			/>
		</View>
	);
};
