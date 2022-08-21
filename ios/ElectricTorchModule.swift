import Foundation
import AVFoundation

@objc(ElectricTorchModule)
class ElectricTorchModule: NSObject {
  private var currentBrightness: Float = 0.5
  
  @objc
  func toggle(_ isActive: Bool) {
    let avCaptureDevice = AVCaptureDevice.default(for: AVMediaType.video)
    
    if !avCaptureDevice!.hasTorch {
      return
    }
  
    
    if isActive {
      do {
          try avCaptureDevice!.lockForConfiguration()
      } catch let error {
          print(error)
      }
      avCaptureDevice!.torchMode = .off
    } else {
      do {
        try avCaptureDevice!.lockForConfiguration()
        try avCaptureDevice!.setTorchModeOn(level: currentBrightness)
      } catch let error {
        print(error)
      }
    }
    avCaptureDevice!.unlockForConfiguration()
  }
  
  @objc
  func changeBrightness(_ nextBrightness: Float) {
    currentBrightness = nextBrightness
    
    let avCaptureDevice = AVCaptureDevice.default(for: AVMediaType.video)
    
    if !avCaptureDevice!.hasTorch {
      return
    }
    
    do {
      try avCaptureDevice!.lockForConfiguration()
      try avCaptureDevice?.setTorchModeOn(level: nextBrightness)
    } catch let error {
      print(error)
    }
    avCaptureDevice!.unlockForConfiguration()
  }
}
