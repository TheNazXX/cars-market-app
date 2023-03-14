export const pathPublic: {[key: string]: string} = {
  home: '/',
  productDetails: '/product/:id'
};

export const pathPrivate: {[key: string]: string} = {
  accountSettings: '/account-settings'
};

export const paths: {[key: string]: string} = Object.assign({}, pathPublic, pathPrivate);

export const checkPathMatch = (pathname: string, paths: {[k:string]: string}) => {
  let isMatch = false;
  const allPathes =  Object.values(paths);
  allPathes.forEach(p => {  
    if(p.slice(1) === pathname.split('/')[1]) isMatch = true;
  })
  return isMatch
};