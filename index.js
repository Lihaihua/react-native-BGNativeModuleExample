import React, { NativeModules } from 'react-native';

//module.exports = NativeModules.BGNativeModuleExample;
const BGNativeModuleExample = NativeModules.BGNativeModuleExample;

function testPrint(){
	return BGNativeModuleExample.testPrint();
} 

export {testPrint}