import { useEffect, useState } from "react";

function useLocalState(defaultValue: string, key: string) {
  console.log(`Input is ${defaultValue} and value is ${key}`);
  const [value, setValue] = useState(() => {
    const localStorageValue = localStorage.getItem(key);
    console.log(localStorage.getItem(key));

    return localStorageValue !== null
      ? JSON.parse(localStorageValue)
      : defaultValue;
  });

  useEffect(() => {
    console.log("Setting value as " + value);
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export { useLocalState };
