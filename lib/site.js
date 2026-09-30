export const BASE='https://disputewho.com';
export const PLAY_URL='https://play.google.com/store/apps/details?id=sg.claimproof.mobile';
export const API_PROXY_BASE='/api/dispute';

export async function apiJson(path,init={}){
  const headers=new Headers(init.headers||{});
  if(init.body&&!headers.has('content-type')) headers.set('content-type','application/json');
  const response=await fetch(API_PROXY_BASE+path,{...init,headers,credentials:'include'});
  const text=await response.text();
  let data=null; try{data=text?JSON.parse(text):null}catch{data=text}
  if(!response.ok){
    const message=data&&typeof data==='object'?(data.error||data.message):null;
    throw new Error(message||`Request failed (${response.status})`);
  }
  return data;
}
export function getWebPurchaseUrl(userId,email){
  const base=process.env.NEXT_PUBLIC_REVENUECAT_PURCHASE_LINK_BASE?.trim();
  if(!base) return null;
  const u=new URL(base.replace(/\/$/,'')+'/'+encodeURIComponent(userId));
  if(email) u.searchParams.set('email',email);
  return u.toString();
}
