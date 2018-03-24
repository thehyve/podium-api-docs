var securityConfig =
{
  "apiKeyVehicle" : "header",
  "scopeSeparator" : ",",
  "apiKeyName" : "api_key"
}
;

var uiConfig =
{
  "docExpansion" : "none",
  "apisSorter" : "alpha",
  "defaultModelRendering" : "schema",
  "supportedSubmitMethods" : [ "get", "post", "put", "delete", "patch" ],
  "jsonEditor" : false,
  "showRequestHeaders" : true
}
;

var swaggerResources =
[ {
  "name" : "default",
  "swaggerVersion" : "2.0"
}, {
  "name" : "podiumuaa",
  "swaggerVersion" : "2.0"
}, {
  "name" : "podiumgateway",
  "swaggerVersion" : "2.0"
} ]
;

var resourcesMap =
{
  "default": defaultResources,
  "podiumuaa": uaaResources,
  "podiumgateway": gatewayResources
}
;

