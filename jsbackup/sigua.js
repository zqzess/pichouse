/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X:

[rewrite_local]

#丝瓜解锁VIP视频无限看
^http:\/\/api-01\.sssggg666\.com:8089\/cxapi\/.+ url script-request-header https://6678888.xyz/quantumultX/sigua.js

[mitm]
hostname = api-01.sssggg666.com:8089

丝瓜下载地址
https://sigua001.com?_s=KKLADF

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['uid'] = '6972841';
modifiedHeaders['token'] = 'd3351910e8342fd42cd59f037c132fa8';

$done({headers : modifiedHeaders});
