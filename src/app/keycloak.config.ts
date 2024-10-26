import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080', // Keycloak server URL
        realm: 'master', 
        clientId: 'angularapp', 
      },
      initOptions: {
        onLoad: 'login-required', // Redirect to login if not authenticated
        silentCheckSsoRedirectUri: window.location.origin,
        checkLoginIframe: false
      },
      loadUserProfileAtStartUp: true
    });
}
