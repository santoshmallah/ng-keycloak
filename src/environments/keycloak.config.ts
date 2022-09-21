/**
 * Here you can add the configuration related to keycloak
 * So we can use this common config for diffrent environment
 */
import { KeycloakConfig } from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
  url: 'https://localhost:8883/auth',
  realm: 'klay',
  clientId: 'klayWebApp',
};

// {
//   "realm": "klay",
//   "auth-server-url": "https://localhost:8543/auth/",
//   "ssl-required": "external",
//   "resource": "klayWebApp",
//   "public-client": true,
//   "verify-token-audience": true,
//   "use-resource-role-mappings": true,
//   "confidential-port": 0
// }
export default keycloakConfig;
