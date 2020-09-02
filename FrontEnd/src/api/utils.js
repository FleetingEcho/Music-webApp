import Cookies from 'js-cookie'
// 123,000
export const getCount = (count) => {
  if (count < 0) return;
  if (count < 1000) {
    return count;
  }else if (Math.floor (count / 1000) < 1000) {
    return Math.floor (count/100)/10 + "K";
  }  
  else if (Math.floor (count / 100000) < 100000) {
    return Math.floor (count/10000)/10 + "M";
  } else  {
    return Math.floor (count / 100000000)/ 10 + "B";
  }
}
export const setToken = (token, tokenName = 'NET_EASE_TOKEN') => {
  Cookies.set(tokenName, token)
}
export const delToken = (tokenName = 'NET_EASE_TOKEN') => {
  Cookies.remove(tokenName)
}

export const getToken = (tokenName = 'NET_EASE_TOKEN') => {
  return Cookies.get(tokenName)
}
export const delCookie = (cookieName = 'NET_EASE_COOKIE') => {
   Cookies.remove(cookieName)
      }
export const setCookie = (cookie, cookieName = 'NET_EASE_COOKIE') => {
  Cookies.set(cookieName, cookie)
}

export const getCookie = (cookieName = 'NET_EASE_COOKIE') => {
  return Cookies.get(cookieName)
}



export const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout (timer);
    }
    timer = setTimeout (() => {
      func.apply (this, args);
      clearTimeout (timer);
    }, delay);
  }
}

// 处理数据，找出第一个没有歌名的排行榜的索引
export const filterIndex = rankList => {
  for (let i = 0; i < rankList.length - 1; i++) {
    if (rankList[i].tracks.length && !rankList[i + 1].tracks.length) {
      return i + 1;
    }
  }
}

// 处理歌手列表拼接歌手名字
export const getName = list => {
  let str = "";
  list.map ((item, index) => {
    str += index === 0 ? item.name : "/" + item.name;
    return item;
  });
  return str;
};

// 判断一个对象是否为空
export const isEmptyObject = obj => !obj || Object.keys (obj).length === 0;

let elementStyle = document.createElement("div").style;
let vendor = (() => {
  // 首先通过 transition 属性判断是何种浏览器
  let transformNames = {
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransfrom",
    ms: "msTransform",
    standard: "Transform"
  };
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key;
    }
  }
  return false;
})();

export function prefixStyle(style) {
  if (vendor === false) {
    return false;
  }
  if (vendor === "standard") {
    return style;
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1);
}

//转换歌曲播放时间
export const formatPlayTime = interval => {
  interval = interval | 0;// |0表示向下取整
  const minute = (interval / 60) | 0;
  const second = (interval % 60).toString().padStart(2, "0");
  return `${minute}:${second}`;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// 随机算法
export function shuffle(arr) {
  let new_arr = [];
  arr.forEach(item => {
    new_arr.push(item);
  });
  for (let i = 0; i < new_arr.length; i++) {
    let j = getRandomInt(0, i);
    let t = new_arr[i];
    new_arr[i] = new_arr[j];
    new_arr[j] = t;
  }
  return new_arr;
}

// 找到当前的歌曲索引
export const findIndex = (song, list) => {
  return list.findIndex(item => {
    return song.id === item.id;
  });
};

