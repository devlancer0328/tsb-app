import Lottie from "lottie-react";
import loadingAnimation from "@/app/assets/loading.json";

export function LoadingAnimation() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <div className="w-64 h-64">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
}
