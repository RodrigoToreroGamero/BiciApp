import { StyleSheet } from 'react-native';

/*
const colors = {
	primary: 	'#2563eb',
	danger: 	'#dc2626',
	background: '#f9fafb',
	text: 		'#111827',
	gray:		'#6b7280',
	white:		'#ffffff',
	border:		'#d1d5db'
};
*/

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		paddingHorizontal: 24,
		backgroundColor: 'rgb(150, 150, 150)'
		//backgroundColor: colors.background
	},
	background: {
		backgroundColor: 'rgb(255, 100, 100)',
		justifyContent: 'center',
		marginTop: 30,
		width: '100%'
	},
	titleText: {
		flex: 1,
		color: 'black',
		//color: colors.text,
		fontSize: 24,
		fontWeight: '600',
		marginBottom: 20,
		textAlign: 'center'
	},
	input: {
		backgroundColor: 'white',
		//backgroundColor: colors.white,
		color: 'rgb(50,50,50)',
		//color: colors.text,
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
	/*
	loginTxt: {
		color: 'white',
		textAlign: 'center',
		margin: 5
	},
	*/
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	horizontalBtns: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	leftVehicleBtn: {
		backgroundColor: 'white',
		borderRadius: 5,
		padding: 10,
		//borderWidth: 2		
	},
	rightVehicleBtn: {
		backgroundColor: 'white',
		borderRadius: 5,
		padding: 10,
		//borderWidth: 2
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
		//borderWidth: 2
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
		//borderWidth: 2
	},
	acceptBtn: {
		backgroundColor: 'rgb(0,255,0)',
		borderRadius: '50%',
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
		borderRadius: '50%',
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
		//width: 120,
		width: '100%',
		//height: 120,
		height: '100%',
		//backgroundColor: '#cccc',
		resizeMode: 'cover'
	}
});