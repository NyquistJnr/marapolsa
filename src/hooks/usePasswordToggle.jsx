import { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const usePasswordToggle = () => {
  const [visible, setVisibility] = useState(false);
  const [visibleConfirm, setVisibilityConfirm] = useState(false);
  const { colorMode } = useColorMode();
  const Icon = visible ? (
    <AiOutlineEye
      size={20}
      style={{ opacity: 0.5, color: colorMode === "dark" ? "black" : "" }}
      onClick={() => setVisibility(!visible)}
    />
  ) : (
    <AiOutlineEyeInvisible
      style={{ opacity: 0.5, color: colorMode === "dark" ? "black" : "" }}
      size={20}
      onClick={() => setVisibility(!visible)}
    />
  );

  const IconConfirm = visibleConfirm ? (
    <AiOutlineEye
      size={20}
      style={{ opacity: 0.5, color: colorMode === "dark" ? "black" : "" }}
      onClick={() => setVisibilityConfirm(!visibleConfirm)}
    />
  ) : (
    <AiOutlineEyeInvisible
      style={{ opacity: 0.5, color: colorMode === "dark" ? "black" : "" }}
      size={20}
      onClick={() => setVisibilityConfirm(!visibleConfirm)}
    />
  );

  const InputType = visible ? "text" : "password";
  const InputTypeConfirm = visibleConfirm ? "text" : "password";
  return [InputType, Icon, InputTypeConfirm, IconConfirm];
};

export default usePasswordToggle;
