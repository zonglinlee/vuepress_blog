<template>
  <div
      ref="containerRef"
      class="mermaid-container"
      :style="{ transform: `scale(${scale})`, transformOrigin: 'center' }"
  >
    <div class="btns">
      <button @click="zoomIn">放大</button>
      <button @click="copyMd">复制</button>
      <button @click="zoomOut">缩小</button>
      <button @click="toggle">全屏</button>
      <button @click="resetZoom">原始比例</button>
    </div>
    <pre id="my-mermaid">
classDiagram
direction BT
class AbstractAuthenticationToken {
  - Object details
  - Collection~GrantedAuthority~ authorities
  - boolean authenticated
  + getAuthorities() Collection~GrantedAuthority~
  + isAuthenticated() boolean
  + equals(Object) boolean
  + setAuthenticated(boolean) void
  + setDetails(Object) void
  + getDetails() Object
  + eraseCredentials() void
  - eraseSecret(Object?) void
  + getName() String
  + hashCode() int
  + toString() String
}
class Authentication {
&lt;&lt;Interface&gt;&gt;
  + setAuthenticated(boolean) void
  + getCredentials() Object
  + getAuthorities() Collection~GrantedAuthority~
  + isAuthenticated() boolean
  + getPrincipal() Object
  + getDetails() Object
}
class AuthenticationProvider {
&lt;&lt;Interface&gt;&gt;
  + supports(Class~?~) boolean
  + authenticate(Authentication) Authentication
}
class DaoAuthenticationProvider {
  - String USER_NOT_FOUND_PASSWORD
  - PasswordEncoder passwordEncoder
  - UserDetailsService userDetailsService
  - String userNotFoundEncodedPassword
  - UserDetailsPasswordService userDetailsPasswordService
  - CompromisedPasswordChecker compromisedPasswordChecker
  # additionalAuthenticationChecks(UserDetails, UsernamePasswordAuthenticationToken) void
  - prepareTimingAttackProtection() void
  + setPasswordEncoder(PasswordEncoder) void
  + setUserDetailsPasswordService(UserDetailsPasswordService) void
  + setCompromisedPasswordChecker(CompromisedPasswordChecker) void
  # doAfterPropertiesSet() void
  - mitigateAgainstTimingAttack(UsernamePasswordAuthenticationToken) void
  + setUserDetailsService(UserDetailsService) void
  # getPasswordEncoder() PasswordEncoder
  # retrieveUser(String, UsernamePasswordAuthenticationToken) UserDetails
  # createSuccessAuthentication(Object, Authentication, UserDetails) Authentication
  # getUserDetailsService() UserDetailsService
}
class ProviderManager {
  # MessageSourceAccessor messages
  - AuthenticationManager parent
  - List~AuthenticationProvider~ providers
  - Log logger
  - AuthenticationEventPublisher eventPublisher
  - boolean eraseCredentialsAfterAuthentication
  + authenticate(Authentication) Authentication
  + isEraseCredentialsAfterAuthentication() boolean
  + setEraseCredentialsAfterAuthentication(boolean) void
  - copyDetails(Authentication, Authentication?) void
  - checkState() void
  + setAuthenticationEventPublisher(AuthenticationEventPublisher) void
  - prepareException(AuthenticationException, Authentication) void
  + afterPropertiesSet() void
  + setMessageSource(MessageSource) void
  + getProviders() List~AuthenticationProvider~
}
class UsernamePasswordAuthenticationToken {
  - Object credentials
  - long serialVersionUID
  - Object principal
  + unauthenticated(Object, Object) UsernamePasswordAuthenticationToken
  + getCredentials() Object
  + setAuthenticated(boolean) void
  + eraseCredentials() void
  + getPrincipal() Object
  + authenticated(Object, Object, Collection~GrantedAuthority~?) UsernamePasswordAuthenticationToken
}

AbstractAuthenticationToken  ..>  Authentication
DaoAuthenticationProvider  ..>  AuthenticationProvider
ProviderManager "1" *--> "providers *" AuthenticationProvider
UsernamePasswordAuthenticationToken  -->  AbstractAuthenticationToken

</pre>
  </div>

</template>

<script setup>
import mermaid from 'mermaid'
import {onMounted, ref} from 'vue'
const source = ref('')
import {useClipboard, useFullscreen} from '@vueuse/core'
const {text, copy, copied, isSupported} = useClipboard({source})


defineOptions({
  name: "AuthenticationProvider"
})
// 缩放控制函数
const zoomIn = () => {
  if (scale.value < MAX_SCALE) {
    scale.value += SCALE_STEP
  }
}

const zoomOut = () => {
  if (scale.value > MIN_SCALE) {
    scale.value -= SCALE_STEP
  }
}

const resetZoom = () => {
  scale.value = 1
}
const fullScreen = () => {
  scale.value = 1
}

const copyMd = () => {
  const element = document.querySelector('#my-mermaid');
  source.value = element.textContent
  debugger
  copy(source)
}
const containerRef = ref(null)
const scale = ref(1)
const MIN_SCALE = 0.5
const MAX_SCALE = 2
const SCALE_STEP = 0.2
const {isFullscreen, enter, exit, toggle} = useFullscreen(containerRef)
onMounted(async () => {
  mermaid.initialize({startOnLoad: false});
  // Example of using the render function
  const drawDiagram = async function () {
    const element = document.querySelector('#my-mermaid');
    const graphDefinition = 'graph TB\na-->b';
    debugger
    const {svg} = await mermaid.render('graphDiv', element.textContent);
    element.innerHTML = svg;
  };

  await drawDiagram();
})
</script>

<style scoped lang="scss">
.mermaid-container {
  border: solid 1px #ccc;
  background: #ffffff;
  z-index: 999999;
  border-radius: 4px;
  overflow: auto;
  position: relative;
  .btns {
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    margin-left: auto;
    width: fit-content;
    button{
      cursor:pointer;
    }
    button:not(:last-child){
      margin-right: 5px;
    }
  }

}

::backdrop {
  z-index: 0;
  background-color: white !important;
}

html, *:fullscreen, *:-webkit-full-screen, *:-moz-full-screen {
  background-color: white !important;
  z-index: 1;
}
</style>
