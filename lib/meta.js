import {BASE} from './site';
export function pageMeta(path,title,description){
  return {
    title, description,
    alternates:{canonical:BASE+path},
    openGraph:{
      title,description,url:BASE+path,siteName:'DISPUTE',type:'website',
      images:[{url:BASE+'/opengraph-image',width:1200,height:630,alt:'DISPUTE — Prove the work. Check the pay. Show the record.'}]
    },
    twitter:{card:'summary_large_image',title,description,images:[BASE+'/opengraph-image']}
  };
}
