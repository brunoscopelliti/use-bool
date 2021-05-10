import { useCallback, useState } from "react";

/**
 * @callback setState
 * @returns {void}
 */

/**
 * A shortcut for React.useState<boolean>.
 * @name useBool
 * @param {boolean} [initialValue]
 * @returns {[boolean, setState, setState]}
 */
const useBool =
  (initialValue) => {
    const [value, setValue] = useState(!!initialValue);

    const setTrue = useCallback(
      () => { setValue(true); },
      []
    );

    const setFalse = useCallback(
      () => { setValue(false); },
      []
    );

    return [value, setTrue, setFalse];
  };

export default useBool;
