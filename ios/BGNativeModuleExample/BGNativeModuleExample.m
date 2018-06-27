//
//  BGNativeModuleExample.m
//  BGNativeModuleExample
//
//  Created by Lee on 2018/6/27.
//  Copyright © 2018年 Lee. All rights reserved.
//

#import "BGNativeModuleExample.h"
#import "RCTLog.h"
@implementation BGNativeModuleExample
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(testPrint){
    RCTLogInfo(@"name");
}
@end
