import { ArticleApi } from "@/app/api/article-api";
import { IMG_ITEM } from "@/app/components/Nav/constant";
import Image from "next/image";

const CategoryDetail = (props: {
  params: { id: keyof typeof IMG_ITEM }, //id参数
  // searchParams: { date: string }   // 查询参数
}) => {
  const item = IMG_ITEM[props.params.id]
  ArticleApi.fetchToday().then(res=>{
    console.log(res);
    
  })

  return (
    <div className={'flex items-center space-x-4'}>
      <Image className={'size-10'} src={item.src} alt={item.alt} />
      <h1 className={"font-bold capitalize text-3xl"}>
        {props.params.id} News
      </h1>
    </div>
  );
};

export default CategoryDetail;
