import axios from 'axios';
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'  
import { getToken,getCookie } from './utils'
// export const baseUrl = 'http://localhost:3001';
// export const baseUrl = '';

export const HEADER_HEIGHT = 45;

// 播放模式
export const playMode = {
  sequence: 0,
  loop: 1,
  random: 2
};

// //axios 的实例及拦截器配置
// const axiosInstance = axios.create ({
//   baseURL: baseUrl
// });

// axiosInstance.interceptors.response.use (
//   res => res.data,
//   err => {
//     console.log (err, "网络错误");
//   }
// );
class HttpRequest {
  // http://localhost:3001
  constructor (baseUrl = '') {
    this.baseUrl = baseUrl
    this.queue = {}
    
  }

  // Set the default configuration items of the request instance of axios
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        // "Content-Type": "application/json;charset=utf-8"
      //  "Content-Type": "application/x-www-form-urlencoded"
      },
      withCredentials: true, //Whether to allow these with cookies

    }
    return config
  }

  // Destroy the request instance
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
    }
  }
  interceptors (instance, url) {
    instance.interceptors.request.use(
      config => {
        
        const token=getToken()
        const cookie=getCookie()
        if(token){
          config.headers.token = token
        }

        if(config.method === 'get'){
         config.params = config.params || {};
         config.params["cookie"]=cookie;
        //  config.params["proxy"]=`http://127.0.0.1:8080`
       };

        NProgress.start() //Set the loading progress bar (start...)
        if (!Object.keys(this.queue).length) {
        }
        this.queue[url] = true
        console.log(config);
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )

    instance.interceptors.response.use(
      res => {
        NProgress.done() // Set the loading progress bar (end...)
        this.destroy(url)
        // console.log(res);
        const { data } = res // ES6
        // Generally only need to use data
        // console.log(data);
        return data
      },
      error => {
        // return Promise.reject(error)
        // Destroy the request instance
        this.destroy(url)
        return Promise.reject(error.response)
      }
    )
  }

  // Expose to the methods used in other files, the options parameter is also passed in by external files
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url) 
    return instance(options) 
  }
}

export {
  HttpRequest
};

// 倍速播放配置
export const list = [
  {
    key: 0.75,
    name: "x0.75"
  },
  {
    key: 1,
    name:"x1"
  }, 
  {
    key: 1.25,
    name:"x1.25"
  }, 
  {
    key: 1.5,
    name:"x1.5"
  }, 
  {
    key: 2,
    name:"x2"
  }
]

// 歌手种类
export const categoryTypes = [{
  name: "华语男",
  key: "1001"
},
{
  name: "华语女",
  key: "1002"
},
{
  name: "华语组合",
  key: "1003"
},
{
  name: "欧美男",
  key: "2001"
},
{
  name: "欧美女",
  key: "2002"
},
{
  name: "欧美组合",
  key: "2003"
},
{
  name: "日本男",
  key: "6001"
},
{
  name: "日本女",
  key: "6002"
},
{
  name: "日本组合",
  key: "6003"
},
{
  name: "韩国男",
  key: "7001"
},
{
  name: "韩国女",
  key: "7002"
},
{
  name: "韩国组合",
  key: "7003"
},
{
  name: "其他男歌手",
  key: "4001"
},
{
  name: "其他女歌手",
  key: "4002"
},
{
  name: "其他组合",
  key: "4003"
},
];

// 歌手首字母
export const alphaTypes = [{
    key: "A",
    name: "A"
  },
  {
    key: "B",
    name: "B"
  },
  {
    key: "C",
    name: "C"
  },
  {
    key: "D",
    name: "D"
  },
  {
    key: "E",
    name: "E"
  },
  {
    key: "F",
    name: "F"
  },
  {
    key: "G",
    name: "G"
  },
  {
    key: "H",
    name: "H"
  },
  {
    key: "I",
    name: "I"
  },
  {
    key: "J",
    name: "J"
  },
  {
    key: "K",
    name: "K"
  },
  {
    key: "L",
    name: "L"
  },
  {
    key: "M",
    name: "M"
  },
  {
    key: "N",
    name: "N"
  },
  {
    key: "O",
    name: "O"
  },
  {
    key: "P",
    name: "P"
  },
  {
    key: "Q",
    name: "Q"
  },
  {
    key: "R",
    name: "R"
  },
  {
    key: "S",
    name: "S"
  },
  {
    key: "T",
    name: "T"
  },
  {
    key: "U",
    name: "U"
  },
  {
    key: "V",
    name: "V"
  },
  {
    key: "W",
    name: "W"
  },
  {
    key: "X",
    name: "X"
  },
  {
    key: "Y",
    name: "Y"
  },
  {
    key: "Z",
    name: "Z"
  }
];