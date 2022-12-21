## Apache Shiro Terminology

Apache Shiro is a powerful and flexible open-source security framework that cleanly handles **authentication**, **
authorization**, enterprise **session management** and **cryptography**.Shiro’s architecture has 3 primary concepts: the
Subject, SecurityManager and Realms

- Subject: anything that is currently interacting with the software. Subject instances are all bound to (and require) a
  SecurityManager. When you interact with a Subject, those interactions translate to subject-specific interactions with
  the SecurityManager.

- SecurityManager: The SecurityManager is the heart of Shiro’s architecture, it is important to realize that when you
  interact with a Subject, it is really the SecurityManager behind the scenes that does all the heavy lifting for any
  Subject security operation.

- Realms: Realms act as the ‘bridge’ or ‘connector’ between Shiro and your application’s security data. In this sense a
  Realm is essentially a security-specific DAO: it encapsulates connection details for data sources and makes the
  associated data available to Shiro as needed. When configuring Shiro, you must specify at least one Realm to use for
  authentication and/or authorization. The SecurityManager may be configured with multiple Realms, but at least one is
  required.

- Authentication: Authentication is the process of verifying a Subject’s identity

- Authorization: Authorization, also known as Access Control, is the process of determining if a user/Subject is allowed
  to do something or not

- Cipher: A cipher is an algorithm for performing encryption or decryption.

- Credential A Credential is a piece of information(such as a password or a PGP key) that verifies the identity of a
  user/Subject. One (or more) credentials are submitted along with Principal(s) during an authentication attempt to
  verify that the user/Subject submitting them is actually the associated user.

- Cryptography: Cryptography is the practice of protecting information from undesired access by hiding it or converting
  it into nonsense so no one else can read it. Shiro focuses on two core elements of Cryptography: ciphers that encrypt
  data like email using a public or private key, and hashes (aka message digests) that irreversibly encrypt data like
  passwords.

- Hash: A Hash function is a one-way, irreversible conversion of an input source, sometimes called the message, into an
  encoded hash value, sometimes called the message digest. It is often used for passwords, digital fingerprints, or data
  with an underlying byte array.

- Principal: A Principal is any identifying attribute of an application user (Subject) (a username, a surname, a given
  name, a social security number, a user ID)

- Session: A Session is a stateful data context associated with a single user/Subject who interacts with a software
  system over a period of time.Sessions are terminated when the user/Subject logs out of the application or when it
  times out due to inactivity.

## Shiro api

```text
Subject currentUser = SecurityUtils.getSubject(); // 获取当前用户
Session session = currentUser.getSession(); // 获取当前会话
currentUser.isAuthenticated() // 当前用户是否已经认证过
UsernamePasswordToken token = new UsernamePasswordToken("lee", "123456");
currentUser.login(token); // 登录
currentUser.getPrincipal(); // print their identifying principal (in this case, a username)
currentUser.hasRole("admin");
currentUser.isPermitted("sys:getUsers");
currentUser.logout(); //removes all identifying information and invalidates their session too 
```

## Authentication|Authorization Guide with Apache Shiro

- step1: Collect the subject’s principals and credentials
- step2: Submit the principals and credentials to an authentication system.
- step3: Allow access, retry authentication, or block access

```text
UsernamePasswordToken token = new UsernamePasswordToken(username, password); // step1
// step2: Authenticate the subject by passing the user name and password token into the login method
Subject currentUser = SecurityUtils.getSubject();
currentUser.login(token);
try {
    currentUser.login(token);
    // step3
    if (currentUser.hasRole("administrator")) {
        // show a special button
    } else {
        // don’t show the button
    }
} catch ( AuthenticationException ae ) {
    //unexpected error
}

```

## Realm Authentication

### Handling supported AuthenticationTokens

a Realm supports a submitted `AuthenticationToken`, the `Authenticator` will call the
Realm’s `getAuthenticationInfo(token)` method. This effectively represents an authentication attempt with the Realm’s
backing data source. The method, in order:

- Inspects the token for the identifying principal (account identifying information)

- Based on the principal, looks up corresponding account data in the data source

- Ensures that the token’s supplied credentials matches those stored in the data store

- If the credentials match, an `AuthenticationInfo` instance is returned that encapsulates the account data in a format
  Shiro understands

- If the credentials DO NOT match, an `AuthenticationException` is thrown

Implementing `Realm` interface directly might be time consuming and error prone. Most people choose to subclass the
`AuthorizingRealm` abstract class instead of starting from scratch. This class implements common authentication and
authorization workflow to save you time and effort.

### Credentials Matching


## integrate shiro with Spring boot

```xml

<dependency>
    <groupId>org.apache.shiro</groupId>
    <artifactId>shiro-spring-boot-web-starter</artifactId>
    <version>1.10.1</version>
</dependency>
```

- In a web application, all Shiro-accessible web requests must go through a main Shiro Filter.This filter itself is
  extremely powerful, allowing for ad-hoc custom filter chains to be executed based on any URL path expression.



