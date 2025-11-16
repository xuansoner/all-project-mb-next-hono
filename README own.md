## 模板情况

模板最终版 引入hono.js作为后端框架

新增1.引入hono.js与nextjs进行整合
(1)实现app/api中将auth与hono.js同时启用,不同路径的请求由不同服务接管
(2)新增hono app服务对象创建 封装到src/server/lib/create-app.ts中
(3)引入中间件
A. 使用pino作为 hono.js框架的日志组件
B. 引入notfound模板
C. 引入error模板
(4)启用openapi中接口doc功能并与scalar自动化web调试进行整合,封装到src/server/lib/openapi-doc中
(5)定义路由 src/server/routes
A.每个功能模块对应到src/server/route中的一个文件夹
B.模块文件夹中分别将route定义与handler定义设置到不同文件并在index文件中进行整合,挂载到路由对象上,并导出当前模块中所有路由
C.将每个功能模块中的index文件中的路由挂载到主hono对象的路由上 在src/server/index.ts文件中定义
(6)整合drizzle-orm
A.在handler处理逻辑中使用db进行数据库增删改查操作
B.并使用drizzle-zod进行schema导出用于对路由的request以及response内容结构进行限定
