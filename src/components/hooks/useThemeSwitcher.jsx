import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
  const prefersDarkMode = "(prefers-color-scheme: dark)"; // media query
  const [mode, setMode] = useState("");

  //check local storage or media query for theme
  useEffect(() => {
    const mediaQuery=window.matchMedia(prefersDarkMode)
    const userPref= window.localStorage.getItem("theme");

    const handleChange = () => {
      if(userPref){
        let check=userPref === "dark" ? true : false;
        setMode(check);
        if(check==="dark") {
          document.documentElement.classList.add("dark");
        }else{
          document.documentElement.classList.remove("dark");
        }
      }else {
        let check=mediaQuery.matches ? true : false;
        setMode(check);
        if(check==="dark") {
          document.documentElement.classList.add("dark");
        }else{
          document.documentElement.classList.remove("dark");
        }
      }
    }
    mediaQuery.addEventListener("change", handleChange)

    return()=>mediaQuery.removeEventListener("change", handleChange)
  }, [])

  //set theme to local storage and document
  useEffect(()=>{
    if(mode==="dark") {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    }else{
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
    return[mode,setMode]
  }, [mode])

  return (
    <div>useThemeSwitcher</div>
  )
}

export default useThemeSwitcher
