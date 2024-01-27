import { toast } from "react-toastify";

export const notifySuccess = (message: string) => {
  toast.success(message, {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    progress: undefined,
  });
};
