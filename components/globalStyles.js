import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		//alignItems: 'stretch',
		paddingHorizontal: 24,
		backgroundColor: 'rgb(150, 150, 150)'		
	},
	header: {
		height: 80,
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	content: {
		flex: 1
	},
	carouselSelection: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		//paddingBottom: 10,
		overflow: 'hidden'
	},		
	/*
	background: {
		flex: 1,
		backgroundColor: 'rgb(255, 100, 100)',
		//justifyContent: 'center',
		//marginTop: 30,		
		width: '100%',
		paddingTop: 20
	},
	*/
	titleText: {		
		color: 'black',		
		fontSize: 24,
		fontWeight: '600',
		//marginBottom: 20,
		textAlign: 'center'
	},
	input: {
		backgroundColor: 'white',		
		color: 'rgb(50,50,50)',		
		width: '100%',
		paddingVertical: 10,
		borderRadius: 10,
		marginBottom: 15
	},
	loginBtn: {		
		backgroundColor: 'blue',
		borderRadius: 10,
		marginTop: 10,
		paddingVertical: 12,
		alignItems: 'center',
		width: '100%',
	},
	loginBtnDisabled: {		
		backgroundColor: 'grey',
		borderRadius: 10,
		marginTop: 10,
		paddingVertical: 12,
		alignItems: 'center',
		width: '100%',
	},
	forgotPassword: {
		marginTop: 15,
		textAlign: 'center'
	},	
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	horizontalBtns: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		width: '100%',
		zIndex: 2,
		paddingHorizontal: 10,
		pointerEvents: 'box-none'
	},
	vehicleActionBtns: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		//marginTop: 20,
		alignItems: 'center',
		height: 90,
		//paddingBottom: 10
	},
	leftVehicleBtn: {
		backgroundColor: 'white',
		borderRadius: 5,
		padding: 10,
		position: 'absolute',
		left: 10,
		zIndex: 1
	},
	rightVehicleBtn: {
		backgroundColor: 'white',
		borderRadius: 5,
		padding: 10,
		position: 'absolute',
		right: 10,
		zIndex: 1		
	},
	deleteVehicleBtn: {
		backgroundColor: 'red',
		borderRadius: 5,
		padding: 10
	},
	editVehicleBtn: {
		backgroundColor: 'white',
		borderRadius: 5,
		padding: 10,		
	},
	registerVehicleBtn: {
		backgroundColor: 'blue',
		borderRadius: 5,
		padding: 10
	},
	previousScreenBtn: {
		backgroundColor: 'white',
		borderRadius: 5,
		padding: 10,		
	},
	acceptBtn: {
		backgroundColor: 'rgb(0,255,0)',
		borderRadius: 50,
		padding: 10,		
	},
	imgContainer: {
		width: 200,
		height: 200,
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'grey',
		borderRadius: 10,
		overflow: 'hidden'
	},
	setImgBtn: {
		backgroundColor: 'blue',
		borderRadius: 50,
		padding: 10,
		position: 'absolute',
		top: 8,
		right: 8
	},
	imgPlaceholder: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {		
		width: '100%',		
		height: '100%',		
		resizeMode: 'cover'
	},
	card: {
		//flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		width: '90%',
		height: '70%',
		backgroundColor: 'white',
		borderRadius: 16
	}
});