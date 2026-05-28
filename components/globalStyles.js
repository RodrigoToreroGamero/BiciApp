import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
	/* SCREEN LAYOUT: */
	container: {
		flex: 1,		
		paddingHorizontal: 24,
		backgroundColor: 'rgb(150, 150, 150)'		
	},
	header: {
		height: 80,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	content: {
		flex: 1,
		paddingBottom: 20
	},
	center: {		
		justifyContent: 'center',
		alignItems: 'center'
	},

	/* TEXT: */
	titleText: {		
		color: 'black',
		fontSize: 24,
		fontWeight: '600',		
		textAlign: 'center'
	},
	forgotPassword: {
		marginTop: 15,
		textAlign: 'center'
	},
	
	/* INPUTS: */	
	input: {
		backgroundColor: 'white',
		color: 'rgb(50,50,50)',
		width: '100%',
		paddingVertical: 10,
		paddingHorizontal: 12,
		borderRadius: 10,
		marginBottom: 15
	},
	
	/* LOGIN BUTTONS: */	
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

	/* CAROUSEL SELECTION: */
	carouselSelection: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'		
	},
	cardContainer: {
		alignItems: 'center',		
		width: '100%',				
		marginBottom: 20		
	},
	cardInfo: {
		marginTop: 20,
		width: '100%',
		gap: 8
	},
	horizontalBtns: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',		
	},	
	leftVehicleBtn: {
		backgroundColor: 'white',
		borderRadius: 5,
		padding: 10,	
	},
	rightVehicleBtn: {
		backgroundColor: 'white',
		borderRadius: 5,
		padding: 10,
	},
	
	/* CRUD BUTTONS: */
	vehicleActionBtns: {
		flexDirection: 'row',
		justifyContent: 'space-between',		
		alignItems: 'center',		
		paddingVertical: 20,
		marginHorizontal: 20,
		marginTop: 'auto'
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
		borderRadius: 25,		
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	
	/* IMAGE: */
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
		borderRadius: 20,		
		top: 8,
		right: 8,
		width: 40,
		height: 40,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center'
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
	
	/* VEHICLE CARD: */
	card: {
		alignItems: 'center',
		padding: 20,
		width: '90%',		
		backgroundColor: 'white',
		borderRadius: 16		
	}
});