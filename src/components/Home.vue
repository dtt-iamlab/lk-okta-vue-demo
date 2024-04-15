/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

<template>
  <div id="home">
    <h1 class="ui header">Sample Okta Login Page</h1>
    <div v-if="!authState || !authState.isAuthenticated">
      <p>If you‘re viewing this page then you have successfully started this Vue application.</p>
      <p>This example shows you how to use the
        <a href="https://github.com/okta/okta-oidc-js/tree/master/packages/okta-vue">Okta Vue Library</a> to add the
        <a href="https://developer.okta.com/docs/guides/implement-auth-code-pkce">PKCE Flow</a> to your application.</p>
      <p>When you click the login button below, you will be redirected to the login page on your Okta org. After you authenticate,
        you will be returned to this application with an ID token and access token. These tokens will be stored in local storage
        and can be retrieved at a later time.</p>
      <button
        id="login-button"
        class="ui primary button"
        role="button"
        v-on:click="login()"
      >
      Login
      </button>
    </div>

    <div v-if="authState && authState.isAuthenticated">
      <p>Congratulations!</p>
      <p>
        You have successfully authenticated against your Okta org, and have been redirected back to this application.  You now have an ID token and access token in local storage.
        Visit the <a href="/profile">My Profile</a> page to take a look inside the ID token.
      </p>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';
import { useAuth } from '@okta/okta-vue';
const oktaAuth = useAuth();
const authState = inject('okta.authState');
const login = () => {
  oktaAuth.signInWithRedirect({ originalUri: '/' })
};
</script>
