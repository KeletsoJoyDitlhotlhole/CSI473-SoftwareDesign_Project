import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080', // Keycloak server URL
        realm: 'master', // Replace with your Keycloak realm
        clientId: 'angularapp', // Replace with your Keycloak client
      },
      initOptions: {
        onLoad: 'check-sso', // Redirect to login if not authenticated
        checkLoginIframe: false
      },
      loadUserProfileAtStartUp: true
    });
}
