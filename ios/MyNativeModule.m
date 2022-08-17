#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(MyNativeModule, NSObject)
  RCT_EXTERN_METHOD(
    toggleTorch:(BOOL)isActive
    resolver:(RCTPromiseResolveBlock)resolve
    rejecter:(RCTPromiseRejectBlock)reject
  )
@end
