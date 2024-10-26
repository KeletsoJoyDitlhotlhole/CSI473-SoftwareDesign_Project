import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () => {
    const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

    if (!isBrowser) {
      // Skip Keycloak initialization if not in the browser (e.g., SSR)
      return Promise.resolve();
    }

    return keycloak.init({
      config: {
        url: 'http://localhost:8080', // Keycloak server URL
        realm: 'master', 
        clientId: 'angularapp', 
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
      bearerExcludedUrls: ['/'],
      initOptions: {
        onLoad: 'login-required', 
        silentCheckSsoRedirectUri: window.location.origin,
        checkLoginIframe: false
      }
    });
  };
}
