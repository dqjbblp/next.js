// "use client"
//有它才能用hook
// export const dynamic = "force-dynamic";
//这个能让我们当前的组件是动态的，会让js的缓存刷新
const Time = async () => {
  const fetch1 = await (
    await fetch("http://api.open-notify.org/iss-now.json", {
      // next:{revalidate:5}
      //这段配置代表几秒重新重置缓存
      cache: "no-cache",
      //这段配置cache是对缓存的配置,代表不用缓存用缓存等...
    })
  ).json();

  return <>{new Date().toLocaleString()}</>;
};

export default Time;
