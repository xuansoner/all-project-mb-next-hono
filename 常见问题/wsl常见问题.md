<!--
 Copyright 2025 root

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

```
1.若使用代理后突然pnpm 无法使用则
(1)依次执行
unset http_proxy
unset https_proxy
unset HTTP_PROXY
unset HTTPS_PROXY
unset ALL_PROXY


# 清除 npm 的代理配置
npm config delete proxy
npm config delete https-proxy

# 清除 pnpm 的代理配置
pnpm config delete proxy
pnpm config delete https-proxy

(2) 关闭cursor

(3) powershell 管理员
wsl --shutdown

(4) 重启cursor
```
