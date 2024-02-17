import { IUserData } from "@/components/Forms/SignUpForm/SignUpForm";
import { Dispatch, SetStateAction } from "react";

export const signUpService = async (
  data: IUserData,
  setApiError?: Dispatch<SetStateAction<string>>
) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/signup`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const status = res.ok;

  if (!status) {
    const result = await res.json();
    setApiError && setApiError(result.message);
    return;
  }
};
