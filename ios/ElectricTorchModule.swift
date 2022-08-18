import Foundation
import AVFoundation

@objc(ElectricTorchModule)
class ElectricTorchModule: NSObject {
  @objc
  func toggle(_ isActive: Bool) {
    let avCaptureDevice = AVCaptureDevice.default(for: AVMediaType.video)
  
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
