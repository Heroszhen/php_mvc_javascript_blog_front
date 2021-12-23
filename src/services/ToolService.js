export const getBaseurl =()=>{
    //let url = "127.0.0.1:8000";
    let url = "http://localhost:8000/api";
    return url;
}

export const getRelativepath = (host,href) =>{
    let path = href.replace(host, '')
    path = path.replace("///","");
    path = path.replace("//","");
    let tab = path.split("http:");
    if(tab[1] != "")tab[1] = tab[1][0].toLowerCase() + tab[1].substring(1, tab[1].length);
    return tab[1];
}

export const orderByString = (tab,field) =>{
    tab.sort((a,b)=>a[field].localeCompare(b[field]));
}

export const stopPropagation = (e) =>{
    e.stopPropagation();
    e.preventDefault();
}

export const getRandomNumber = (min,max) =>{
    return Math.floor(Math.random()*(max-min+1)+min);
}

//localstorage
export const setStorage =(key,value)=>{
    localStorage.setItem(key,value);
}

export const getStorage = (key)=>{
    return localStorage.getItem(key);
}

export const removeStorage =(key)=>{
    localStorage.removeItem(key);
}