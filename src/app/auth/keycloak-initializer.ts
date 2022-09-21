import { KeycloakOptions, KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<boolean> {

    const options: KeycloakOptions = {
      config : environment.keycloak,
      loadUserProfileAtStartUp: true,
      initOptions: {
          pkceMethod: 'S256',
          onLoad: 'check-sso',
          // onLoad: 'login-required',
          checkLoginIframe: false,
      },
      bearerExcludedUrls: []
      // enableBearerInterceptor: true
    };

    return () => keycloak.init(options);
}
