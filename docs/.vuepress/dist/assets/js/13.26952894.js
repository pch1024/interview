(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{224:function(e,t,n){"use strict";n.r(t);var v=n(0),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"http"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTP")]),e._v(" "),n("h2",{attrs:{id:"http-方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-方法","aria-hidden":"true"}},[e._v("#")]),e._v(" HTTP 方法")]),e._v(" "),n("blockquote",[n("p",[e._v("一台服务器要与 HTTP1.1 兼容，只要为资源实现 "),n("code",[e._v("GET")]),e._v(" 和 "),n("code",[e._v("HEAD")]),e._v(" 方法即可")])]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("方法")]),e._v(" "),n("th",[e._v("介绍")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("GET")]),e._v(" "),n("td",[e._v("最常用的方法，通常用于请求服务器发送某个资源")])]),e._v(" "),n("tr",[n("td",[e._v("HEAD")]),e._v(" "),n("td",[e._v("与 GET 类似，但服务器在响应中值返回首部，不返回实体的主体部分")])]),e._v(" "),n("tr",[n("td",[e._v("PUT")]),e._v(" "),n("td",[e._v("让服务器用请求的主体部分来创建一个由所请求的 URL 命名的新文档，或者，如果那个 URL 已经存在的话，就用干这个主体替代它")])]),e._v(" "),n("tr",[n("td",[e._v("POST")]),e._v(" "),n("td",[e._v("起初是用来向服务器输入数据的。实际上，通常会用它来支持 HTML 的表单。表单中填好的数据通常会被送给服务器，然后由服务器将其发送到要去的地方。")])]),e._v(" "),n("tr",[n("td",[e._v("TRACE")]),e._v(" "),n("td",[e._v("会在目的服务器端发起一个环回诊断，最后一站的服务器会弹回一个 TRACE 响应并在响应主体中携带它收到的原始请求报文。TRACE 方法主要用于诊断，用于验证请求是否如愿穿过了请求/响应链。")])]),e._v(" "),n("tr",[n("td",[e._v("OPTIONS")]),e._v(" "),n("td",[e._v("方法请求 web 服务器告知其支持的各种功能。可以查询服务器支持哪些方法或者对某些特殊资源支持哪些方法。")])]),e._v(" "),n("tr",[n("td",[e._v("DELETE")]),e._v(" "),n("td",[e._v("请求服务器删除请求 URL 指定的资源")])])])]),e._v(" "),n("h2",{attrs:{id:"浏览器访问页面工作流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器访问页面工作流程","aria-hidden":"true"}},[e._v("#")]),e._v(" 浏览器访问页面工作流程")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("在浏览器地址栏输入 URL")])]),e._v(" "),n("li",[n("p",[e._v("浏览器查看缓存，如果请求资源在缓存中并且新鲜，跳转到转码步骤")]),e._v(" "),n("pre",[n("code",[e._v("如果资源未缓存，发起新请求\n如果已缓存，检验是否足够新鲜，足够新鲜直接提供给客户端，否则与服务器进行验证。\n检验新鲜通常有两个 HTTP 头进行控制 Expires 和 Cache-Control：\nHTTP1.0 提供 Expires，值为一个绝对时间表示缓存新鲜日期\nHTTP1.1 增加了 Cache-Control: max-age=,值为以秒为单位的最大新鲜时间\n")])])]),e._v(" "),n("li",[n("p",[e._v("浏览器解析 URL 获取协议，主机，端口，path")])]),e._v(" "),n("li",[n("p",[e._v("浏览器组装一个 HTTP（GET）请求报文")])]),e._v(" "),n("li",[n("p",[e._v("浏览器获取主机 ip 地址，过程如下：")]),e._v(" "),n("pre",[n("code",[e._v("浏览器缓存\n本机缓存\nhosts文件\n路由器缓存\nISP DNS缓存\nDNS递归查询（可能存在负载均衡导致每次IP不一样）\n")])])]),e._v(" "),n("li",[n("p",[e._v("打开一个 socket 与目标 IP 地址，端口建立 TCP 链接，三次握手如下：")]),e._v(" "),n("pre",[n("code",[e._v("客户端发送一个TCP的SYN=1，Seq=X的包到服务器端口\n服务器发回SYN=1， ACK=X+1， Seq=Y的响应包\n客户端发送ACK=Y+1， Seq=Z\n")])])]),e._v(" "),n("li",[n("p",[e._v("TCP 链接建立后发送 HTTP 请求")])]),e._v(" "),n("li",[n("p",[e._v("服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使用 HTTP Host 头部判断请求的服务程序")])]),e._v(" "),n("li",[n("p",[e._v("服务器检查 HTTP 请求头是否包含缓存验证信息如果验证缓存新鲜，返回 304 等对应状态码")])]),e._v(" "),n("li",[n("p",[e._v("处理程序读取完整请求并准备 HTTP 响应，可能需要查询数据库等操作")])]),e._v(" "),n("li",[n("p",[e._v("服务器将响应报文通过 TCP 连接发送回浏览器")])]),e._v(" "),n("li",[n("p",[e._v("浏览器接收 HTTP 响应，然后根据情况选择关闭 TCP 连接或者保留重用，关闭 TCP 连接的四次握手如下：")]),e._v(" "),n("pre",[n("code",[e._v("主动方发送Fin=1， Ack=Z， Seq= X报文\n被动方发送ACK=X+1， Seq=Z报文\n被动方发送Fin=1， ACK=X， Seq=Y报文\n主动方发送ACK=Y， Seq=X报文\n")])])]),e._v(" "),n("li",[n("p",[e._v("浏览器检查响应状态吗：是否为 1XX，3XX， 4XX， 5XX，这些情况处理与 2XX 不同")])]),e._v(" "),n("li",[n("p",[e._v("如果资源可缓存，进行缓存")])]),e._v(" "),n("li",[n("p",[e._v("对响应进行解码（例如 gzip 压缩）")])]),e._v(" "),n("li",[n("p",[e._v("根据资源类型决定如何处理（假设资源为 HTML 文档）")])]),e._v(" "),n("li",[n("p",[e._v("解析 HTML 文档，构件 DOM 树，下载资源，构造 CSSOM 树，执行 js 脚本，这些操作没有严格的先后顺序，以下分别解释")])]),e._v(" "),n("li",[n("p",[e._v("构建 DOM 树：")]),e._v(" "),n("pre",[n("code",[e._v("Tokenizing：根据HTML规范将字符流解析为标记\nLexing：词法分析将标记转换为对象并定义属性和规则\nDOM construction：根据HTML标记关系将对象组成DOM树\n")])])]),e._v(" "),n("li",[n("p",[e._v("解析过程中遇到图片、样式表、js 文件，启动下载")])]),e._v(" "),n("li",[n("p",[e._v("构建 CSSOM 树：")]),e._v(" "),n("pre",[n("code",[e._v("Tokenizing：字符流转换为标记流\nNode：根据标记创建节点\nCSSOM：节点创建CSSOM树\n")])])]),e._v(" "),n("li",[n("p",[e._v("根据 DOM 树和 CSSOM 树构建渲染树:")]),e._v(" "),n("pre",[n("code",[e._v("从DOM树的根节点遍历所有可见节点，不可见节点包括：1）script,meta这样本身不可见的标签。2)被css隐藏的节点，如display: none\n对每一个可见节点，找到恰当的CSSOM规则并应用\n发布可视节点的内容和计算样式\n")])])]),e._v(" "),n("li",[n("p",[e._v("js 解析如下：")]),e._v(" "),n("pre",[n("code",[e._v("浏览器创建Document对象并解析HTML，将解析到的元素和文本节点添加到文档中，此时document.readystate为loading\nHTML解析器遇到没有async和defer的script时，将他们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用document.write()把文本插入到输入流中。同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作script和他们之前的文档内容\n当解析器遇到设置了async属性的script时，开始下载脚本并继续解析文档。脚本会在它下载完成后尽快执行，但是解析器不会停下来等它下载。异步脚本禁止使用document.write()，它们可以访问自己script和之前的文档元素\n当文档完成解析，document.readState变成interactive\n所有defer脚本会按照在文档出现的顺序执行，延迟脚本能访问完整文档树，禁止使用document.write()\n浏览器在Document对象上触发DOMContentLoaded事件\n此时文档完全解析完成，浏览器可能还在等待如图片等内容加载，等这些内容完成载入并且所有异步脚本完成载入和执行，document.readState变为complete,window触发load事件\n")])])]),e._v(" "),n("li",[n("p",[e._v("显示页面（HTML 解析过程中会逐步显示页面）")])])]),e._v(" "),n("h2",{attrs:{id:"请求报文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#请求报文","aria-hidden":"true"}},[e._v("#")]),e._v(" 请求报文")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("首行是 Request-Line 包括：请求方法，请求 URI，协议版本，CRLF")])]),e._v(" "),n("li",[n("p",[e._v("首行之后是若干行请求头，包括 general-header，request-header 或者 entity-header，每个一行以 CRLF 结束")])]),e._v(" "),n("li",[n("p",[e._v("请求头和消息实体之间有一个 CRLF 分隔")])]),e._v(" "),n("li",[n("p",[e._v("根据实际请求需要可能包含一个消息实体 一个请求报文例子如下：")]),e._v(" "),n("pre",[n("code",[e._v('  GET /Protocols/rfc2616/rfc2616-sec5.html HTTP/1.1\n  Host: www.w3.org\n  Connection: keep-alive\n  Cache-Control: max-age=0\n  Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8\n  User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36\n  Referer: https://www.google.com.hk/\n  Accept-Encoding: gzip,deflate,sdch\n  Accept-Language: zh-CN,zh;q=0.8,en;q=0.6\n  Cookie: authorstyle=yes\n  If-None-Match: "2cc8-3e3073913b100"\n  If-Modified-Since: Wed, 01 Sep 2004 13:24:52 GMT\n\n  name=qiu&age=25\n')])])])]),e._v(" "),n("h2",{attrs:{id:"响应报文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应报文","aria-hidden":"true"}},[e._v("#")]),e._v(" 响应报文")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("首行是状态行包括：HTTP 版本，状态码，状态描述，后面跟一个 CRLF")])]),e._v(" "),n("li",[n("p",[e._v("首行之后是若干行响应头，包括：通用头部，响应头部，实体头部")])]),e._v(" "),n("li",[n("p",[e._v("响应头部和响应实体之间用一个 CRLF 空行分隔")])]),e._v(" "),n("li",[n("p",[e._v("最后是一个可能的消息实体 响应报文例子如下：")]),e._v(" "),n("pre",[n("code",[e._v('  HTTP/1.1 200 OK\n  Date: Tue, 08 Jul 2014 05:28:43 GMT\n  Server: Apache/2\n  Last-Modified: Wed, 01 Sep 2004 13:24:52 GMT\n  ETag: "40d7-3e3073913b100"\n  Accept-Ranges: bytes\n  Content-Length: 16599\n  Cache-Control: max-age=21600\n  Expires: Tue, 08 Jul 2014 11:28:43 GMT\n  P3P: policyref="http://www.w3.org/2001/05/P3P/p3p.xml"\n  Content-Type: text/html; charset=iso-8859-1\n\n  {"name": "qiu", "age": 25}\n')])])])]),e._v(" "),n("h2",{attrs:{id:"状态码及其含义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#状态码及其含义","aria-hidden":"true"}},[e._v("#")]),e._v(" 状态码及其含义")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("1XX：信息状态码")]),e._v(" "),n("pre",[n("code",[e._v("  100 Continue：客户端应当继续发送请求。这个临时相应是用来通知客户端它的部分请求已经被服务器接收，且仍未被拒绝。客户端应当继续发送请求的剩余部分，或者如果请求已经完成，忽略这个响应。服务器必须在请求万仇向客户端发送一个最终响应\n  101 Switching Protocols：服务器已经理解力客户端的请求，并将通过Upgrade消息头通知客户端采用不同的协议来完成这个请求。在发送完这个响应最后的空行后，服务器将会切换到Upgrade消息头中定义的那些协议。\n")])])]),e._v(" "),n("li",[n("p",[e._v("2XX：成功状态码")]),e._v(" "),n("pre",[n("code",[e._v("  200 OK：请求成功，请求所希望的响应头或数据体将随此响应返回\n  201 Created：\n  202 Accepted：\n  203 Non-Authoritative Information：\n  204 No Content：\n  205 Reset Content：\n  206 Partial Content：\n")])])]),e._v(" "),n("li",[n("p",[e._v("3XX：重定向")]),e._v(" "),n("pre",[n("code",[e._v("  300 Multiple Choices：\n  301 Moved Permanently：\n  302 Found：\n  303 See Other：\n  304 Not Modified：\n  305 Use Proxy：\n  306 （unused）：\n  307 Temporary Redirect：\n")])])]),e._v(" "),n("li",[n("p",[e._v("4XX：客户端错误")]),e._v(" "),n("pre",[n("code",[e._v("  400 Bad Request:\n  401 Unauthorized:\n  402 Payment Required:\n  403 Forbidden:\n  404 Not Found:\n  405 Method Not Allowed:\n  406 Not Acceptable:\n  407 Proxy Authentication Required:\n  408 Request Timeout:\n  409 Conflict:\n  410 Gone:\n  411 Length Required:\n  412 Precondition Failed:\n  413 Request Entity Too Large:\n  414 Request-URI Too Long:\n  415 Unsupported Media Type:\n  416 Requested Range Not Satisfiable:\n  417 Expectation Failed:\n")])])]),e._v(" "),n("li",[n("p",[e._v("5XX: 服务器错误")]),e._v(" "),n("pre",[n("code",[e._v("  500 Internal Server Error:\n  501 Not Implemented:\n  502 Bad Gateway:\n  503 Service Unavailable:\n  504 Gateway Timeout:\n  505 HTTP Version Not Supported:\n")])])])])])}),[],!1,null,null,null);t.default=_.exports}}]);