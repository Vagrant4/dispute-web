import {BASE} from './site';
export function pageMeta(path,title,description){
  const pageTitle = /\bDISPUTE\b/.test(title) ? title : `${title} | DISPUTE`;
  return {
    title:{absolute:pageTitle}, description,
    alternates:{canonical:BASE+path},
    openGraph:{
      title:pageTitle,description,url:BASE+path,siteName:'DISPUTE',type:'website',
      images:[{url:BASE+'/opengraph-image',width:1200,height:630,alt:'DISPUTE — Prove the work. Check the pay. Show the record.'}]
    },
    twitter:{card:'summary_large_image',title:pageTitle,description,images:[BASE+'/opengraph-image']}
  };
}

