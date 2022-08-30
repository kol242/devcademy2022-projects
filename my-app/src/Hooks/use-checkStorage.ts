const useCheckStorage = (key: any) => {
    const storedData: any = localStorage.getItem(key)
    if (storedData === null) {
      return false
    } else {
      const parsedData = JSON.parse(storedData)
      return parsedData.loggedIn  
    }
}

export default useCheckStorage