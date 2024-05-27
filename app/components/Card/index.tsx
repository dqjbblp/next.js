import { Article } from "@/app/types/article-type"
import Image from "next/image"
import Link from "next/link"
import defaultPng from "@/public/default-news.png"
import { IMG_ITEM } from "../Nav/constant"

interface IcarProps {
  article:Article
}

const Card = (props:IcarProps) => {
  const {article} = props

  return(
    <Link href="#">
      <div>
        <div>
          <div>
            <Image alt="" src={IMG_ITEM[article.category[0]].src}/>
          </div>
          <div></div>
        </div>
        <div>Published:{new Date(article.pubDate).toDateString()}</div>
      </div>
      
      <div>
        <div>{article.title}</div>
        <Image height={200} width={300} alt="" src={article.image_url ||defaultPng} />
      </div>
    </Link>
  )
}

export default Card