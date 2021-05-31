import React from 'react'

const isWindow = typeof window !== 'undefined'

export default function useSetStateWithLocalStorage(defaultValue, key) {
  // pass our function to setState
  const [value, setValue] = React.useState(() => {
    // use key to store data in localStorage
    const newValue = isWindow ? localStorage.getItem(key) : null
    // pass back our new value or the default value
    return newValue !== null ? JSON.parse(newValue) : defaultValue
  })
  // update local storage whenever the state value changes
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
