export const loadScript = (src, callback) => {
    const el = document.createElement('script');
    el.src = src;
    el.type = 'text/javascript';
    el.onload = callback;

    document.body.appendChild(el);
};


// function loadScript(url, callback){
 
//     var script = document.createElement("script")
//     script.type = "text/javascript";
 
//     if (script.readyState){  //IE
//         script.onreadystatechange = function(){
//             if (script.readyState == "loaded" ||
//                     script.readyState == "complete"){
//                 script.onreadystatechange = null;
//                 callback();
//             }
//         };
//     } else {  //Others
//         script.onload = function(){
//             callback();
//         };
//     }
 
//     script.src = url;
//     document.getElementsByTagName("head")[0].appendChild(script);
// }
