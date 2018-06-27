import { NativeModules } from 'react-native';


const BGNativeModuleExample = NativeModules.BGNativeModuleExample;

function testPrint(){
	return BGNativeModuleExample.testPrint();
} 

export default TestPrint;
