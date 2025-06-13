---
title: oAuth2  && SSO
---

## Open Authorization 
OAuth2的认证和授权流程涉及客户端、资源所有者、授权服务器和资源服务器四个角色。以下是其一般流程：

1. **客户端请求授权**：客户端向资源所有者请求授权，通常表现为在客户端应用中弹出授权页面，告知用户需要获取哪些权限。
2. **资源所有者授权**：资源所有者（用户）决定是否给予客户端授权。如果用户同意授权，客户端将获得授权许可。
3. **客户端申请令牌**：客户端使用上一步获得的授权，向授权服务器申请令牌。请求中通常包含客户端的标识（client_id）、客户端密钥（client_secret）、授权码（如果是授权码模式）等信息。
4. **授权服务器发放令牌**：授权服务器对客户端进行认证和授权验证，确认无误后，向客户端发放访问令牌（access token），可能还会发放刷新令牌（refresh token）。
5. **客户端使用令牌访问资源**：客户端使用获取到的令牌，向资源服务器请求访问受保护的资源。请求中会在请求头或请求参数中携带令牌。
6. **资源服务器验证令牌并返回资源**：资源服务器接收到请求后，验证令牌的有效性。如果令牌有效，资源服务器将向客户端返回请求的资源；如果令牌无效，资源服务器将返回相应的错误信息。

OAuth2 定义了四种授权方式，分别是**授权码模式**、**简化模式**、**密码模式**和**客户端模式**。其中，授权码模式是功能最完整、流程最严密的授权模式，以下是其具体流程：

1. **用户访问客户端，客户端导向授权服务器**
   ：客户端将用户导向授权服务器，请求中包含客户端标识符（client_id）、授权类型（response_type=code）、重定向URI（redirect_uri）、申请的权限范围（scope）和本地状态（state）等参数。
2. **授权服务器对用户进行身份验证并询问授权**：授权服务器对资源所有者进行身份验证，并询问用户是否授予客户端访问请求。
3. **用户授权后，授权服务器重定向到客户端**：如果用户同意授权，授权服务器使用事先指定的重定向URI，重定向到客户端，并附上一个授权码（code）和之前提供的本地状态（state）。
4. **客户端使用授权码向授权服务器申请令牌**：客户端收到授权码后，附上早先的重定向URI，向授权服务器申请令牌。请求参数包含授权代码、重定向URI、客户端标识（client_id）和客户端密钥（client_secret）。
5. **授权服务器验证并发放令牌**：授权服务器对客户端进行身份验证，验证授权代码，并确保重定向URI匹配。如果有效，授权服务器将发送访问令牌（access token）和刷新令牌（refresh token）给客户端。

以下是一个OAuth2授权码模式的具体例子：

假设你有一个名为“Example App”的客户端应用，想要访问“Resource Server”上的用户资源，而“Authorization Server”用于处理授权相关事宜。

1. **用户访问客户端，客户端导向授权服务器**：
    - 用户打开“Example App”，应用中有一个功能需要访问用户在“Resource Server”上的某些数据。此时，“Example
      App”会生成一个授权请求URL，例如：`https://authorization-server.com/oauth/authorize?client_id=example_app_client_id&response_type=code&state=random_state_value&redirect_uri=https%3A%2F%2Fexample-app.com%2Fauth&scope=read_user_data`。
    - 这里的`client_id`是“Example App”在“Authorization Server”上注册的客户端标识；`response_type=code`表示期望得到授权码；`state`
      是一个随机值，用于防止CSRF攻击以及在授权完成后让客户端知道用户的操作状态；`redirect_uri`是授权完成后“Authorization Server”重定向回“Example App”的地址；`scope`
      指定了请求的权限范围，这里是读取用户数据。
    - “Example App”将用户的浏览器重定向到这个授权请求URL，用户被带到“Authorization Server”的登录页面。

2. **用户授权**：
    - 用户在“Authorization Server”的登录页面输入用户名和密码进行登录。
    - 登录后，“Authorization Server”会显示一个页面，告知用户“Example App”请求的权限范围（如读取用户数据），询问用户是否授权。
    - 如果用户点击“授权”按钮，“Authorization Server”会将用户的浏览器重定向到“Example App”指定的`redirect_uri`
      ，同时在URL中携带授权码，例如：`https://example - app.com/auth?code=authorization_code_value&state=random_state_value`。

3. **客户端使用授权码申请令牌**：
    - “Example App”的后端服务器收到重定向请求后，从URL中提取授权码`authorization_code_value`。
    - 然后，“Example App”的后端服务器向“Authorization Server”发送一个POST请求，以申请访问令牌。请求的URL通常是“Authorization
      Server”的令牌端点，例如`https://authorization-server.com/oauth/token`，请求参数如下：
        - `grant_type=authorization_code`：表示使用授权码模式申请令牌。
        - `code=authorization_code_value`：上一步获取到的授权码。
        - `redirect_uri=https%3A%2F%2Fexample - app.com%2Fauth`：与之前请求授权时的`redirect_uri`一致。
        - `client_id=example_app_client_id`和`client_secret=example_app_client_secret`：用于“Authorization Server”验证“Example
          App”的身份，`client_secret`是保密的，只能在后端发送请求时使用。

4. **授权服务器发放令牌**：
    - “Authorization Server”收到请求后，验证`client_id`、`client_secret`、授权码`code`以及`redirect_uri`的有效性。
    - 如果验证通过，“Authorization Server”会生成访问令牌`access_token`和可能的刷新令牌`refresh_token`，并将它们以JSON格式发送给“Example
      App”的后端服务器，例如：`{"access_token":"access_token_value","refresh_token":"refresh_token_value","token_type":"Bearer","expires_in":3600}`
      。
    - “Example App”的后端服务器收到令牌后，将其存储起来，用于后续访问“Resource Server”上的受保护资源。

5. **客户端使用令牌访问资源**：
    - 当“Example App”需要访问“Resource Server”上的用户数据时，它会在请求头中携带访问令牌，例如：`Authorization: Bearer access_token_value`。
    - “Resource Server”收到请求后，验证访问令牌的有效性。如果有效，它将返回请求的用户数据给“Example App”；如果无效，“Resource Server”将返回错误信息。



## Single Sign-On(单点登录)
