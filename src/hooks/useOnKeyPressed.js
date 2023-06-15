import { useEffect } from "react";

function useOnKeyPressed(callback) {
  useEffect(() => {
    window.addEventListener("keydown", callback);

    return () => {
      window.removeEventListener("keydown", callback);
    };
  }, [callback]);
}

export default useOnKeyPressed;
