import Foundation
import AVFoundation

@objc(MyNativeModule)
class MyNativeModule: NSObject {
  @objc
  func toggleTorch(_ isActive: Bool, resolver resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
    let avCaptureDevice = AVCaptureDevice.default(for: AVMediaType.video)
    print("native", isActive)
  
    if avCaptureDevice!.hasTorch {
      if isActive {
        do {
          try avCaptureDevice!.lockForConfiguration()
          try avCaptureDevice!.setTorchModeOn(level: 1.0)
        } catch let error {
          print(error)
        }
      } else {
        do {
            try avCaptureDevice!.lockForConfiguration()
        } catch let error {
            print(error)
        }
        avCaptureDevice!.torchMode = .off
      }
      avCaptureDevice!.unlockForConfiguration()
    }
  }
}
