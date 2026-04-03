import { useState } from "react"
import Header from "./components/header/Header"
import NewsItems from "./components/NewsItems"
import NewsList from "./components/NewsList"
import { newsData } from "./utils/data"
export default function App(){
  let [news, setNews] = useState(newsData)
  return(
    <>
    <Header/>
    <NewsList news={news}/>

    </>
  )
}