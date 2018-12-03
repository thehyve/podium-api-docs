var gatewayResources =
{"swagger":"2.0","info":{"description":"API documentation for the gateway component of the Podium request portal.","version":"1.0.0","title":"Podium Gateway API","contact":{}},"host":"localhost:8082","basePath":"/podiumgateway","tags":[{"name":"request-revision-resource","description":"Request Revision Resource"},{"name":"profile-info-resource","description":"Profile Info Resource"},{"name":"delivery-resource","description":"Delivery Resource"},{"name":"request-detail-resource","description":"Request Detail Resource"},{"name":"request-review-resource","description":"Request Review Resource"},{"name":"request-resource","description":"Request Resource"},{"name":"request-template-resource","description":"Request Template Resource"},{"name":"gateway-resource","description":"Gateway Resource"},{"name":"request-file-resource","description":"Request File Resource"},{"name":"organisation-client","description":"Organisation Client"}],"paths":{"/api/_search/requestdetails":{"get":{"tags":["request-detail-resource"],"summary":"searchRequestdetails","operationId":"searchRequestdetailsUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"query","in":"query","description":"query","required":true,"type":"string"},{"name":"page","in":"query","description":"Page number of the requested page","required":false,"type":"integer","format":"int32"},{"name":"size","in":"query","description":"Size of a page","required":false,"type":"integer","format":"int32"},{"name":"sort","in":"query","description":"Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.","required":false,"type":"array","items":{"type":"string"},"collectionFormat":"multi"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/RequestDetail"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/_search/requests":{"get":{"tags":["request-resource"],"summary":"searchRequests","operationId":"searchRequestsUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"query","in":"query","description":"query","required":true,"type":"string"},{"name":"page","in":"query","description":"Page number of the requested page","required":false,"type":"integer","format":"int32"},{"name":"size","in":"query","description":"Size of a page","required":false,"type":"integer","format":"int32"},{"name":"sort","in":"query","description":"Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.","required":false,"type":"array","items":{"type":"string"},"collectionFormat":"multi"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/RequestRepresentation"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/gateway/routes":{"get":{"tags":["gateway-resource"],"summary":"activeRoutes","operationId":"activeRoutesUsingGET","consumes":["application/json"],"produces":["*/*"],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/RouteRepresentation"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/organisations/all":{"get":{"tags":["organisation-client"],"summary":"getAllOrganisations","operationId":"getAllOrganisationsUsingGET","consumes":["application/json"],"produces":["*/*"],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/OrganisationRepresentation"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/organisations/uuid/{uuid}":{"get":{"tags":["organisation-client"],"summary":"getOrganisation","operationId":"getOrganisationUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/OrganisationRepresentation"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/profile-info":{"get":{"tags":["profile-info-resource"],"summary":"getActiveProfiles","operationId":"getActiveProfilesUsingGET","consumes":["application/json"],"produces":["*/*"],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/ProfileInfoVM"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/public/requests/templates":{"post":{"tags":["request-template-resource"],"summary":"createRequestTemplate","operationId":"createRequestTemplateUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"in":"body","name":"requestTemplateRepresentation","description":"requestTemplateRepresentation","required":true,"schema":{"$ref":"#/definitions/RequestTemplateRepresentation"}},{"name":"Authorization","in":"header","description":"Authorization","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/URI"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests":{"put":{"tags":["request-revision-resource"],"summary":"updateRevisionRequest","operationId":"updateRevisionRequestUsingPUT","consumes":["application/json"],"produces":["*/*"],"parameters":[{"in":"body","name":"request","description":"request","required":true,"schema":{"$ref":"#/definitions/RequestRepresentation"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestRepresentation"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/counts/coordinator":{"get":{"tags":["request-resource"],"summary":"getCoordinatorRequestCounts","operationId":"getCoordinatorRequestCountsUsingGET","consumes":["application/json"],"produces":["*/*"],"responses":{"200":{"description":"OK","schema":{"type":"object","additionalProperties":{"type":"integer","format":"int64"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/counts/requester":{"get":{"tags":["request-resource"],"summary":"getRequesterRequestCounts","operationId":"getRequesterRequestCountsUsingGET","consumes":["application/json"],"produces":["*/*"],"responses":{"200":{"description":"OK","schema":{"type":"object","additionalProperties":{"type":"integer","format":"int64"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/counts/reviewer":{"get":{"tags":["request-resource"],"summary":"getReviewerRequestCounts","operationId":"getReviewerRequestCountsUsingGET","consumes":["application/json"],"produces":["*/*"],"responses":{"200":{"description":"OK","schema":{"type":"object","additionalProperties":{"type":"integer","format":"int64"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/drafts":{"get":{"tags":["request-resource"],"summary":"getAllDraftsForUser","operationId":"getAllDraftsForUserUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"page","in":"query","description":"Page number of the requested page","required":false,"type":"integer","format":"int32"},{"name":"size","in":"query","description":"Size of a page","required":false,"type":"integer","format":"int32"},{"name":"sort","in":"query","description":"Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.","required":false,"type":"array","items":{"type":"string"},"collectionFormat":"multi"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/RequestRepresentation"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}},"post":{"tags":["request-resource"],"summary":"createDraft","operationId":"createDraftUsingPOST","consumes":["application/json"],"produces":["*/*"],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestRepresentation"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}},"put":{"tags":["request-resource"],"summary":"updateDraft","operationId":"updateDraftUsingPUT","consumes":["application/json"],"produces":["*/*"],"parameters":[{"in":"body","name":"request","description":"request","required":true,"schema":{"$ref":"#/definitions/RequestRepresentation"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestRepresentation"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/drafts/validate":{"post":{"tags":["request-resource"],"summary":"validateDraft","operationId":"validateDraftUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"in":"body","name":"request","description":"request","required":true,"schema":{"$ref":"#/definitions/RequestRepresentation"}}],"responses":{"200":{"description":"OK"},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/drafts/{uuid}":{"get":{"tags":["request-resource"],"summary":"getDraft","operationId":"getDraftUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestRepresentation"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}},"delete":{"tags":["request-resource"],"summary":"deleteDraft","operationId":"deleteDraftUsingDELETE","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"}],"responses":{"200":{"description":"OK"},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}}}},"/api/requests/drafts/{uuid}/submit":{"get":{"tags":["request-resource"],"summary":"submitDraft","operationId":"submitDraftUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/RequestRepresentation"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/organisation/{uuid}/reviewer":{"get":{"tags":["request-resource"],"summary":"getReviewerRequestsForOrganisation","operationId":"getReviewerRequestsForOrganisationUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"},{"name":"page","in":"query","description":"Page number of the requested page","required":false,"type":"integer","format":"int32"},{"name":"size","in":"query","description":"Size of a page","required":false,"type":"integer","format":"int32"},{"name":"sort","in":"query","description":"Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.","required":false,"type":"array","items":{"type":"string"},"collectionFormat":"multi"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/RequestRepresentation"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/requester":{"get":{"tags":["request-resource"],"summary":"getRequesterRequests","operationId":"getRequesterRequestsUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"page","in":"query","description":"Page number of the requested page","required":false,"type":"integer","format":"int32"},{"name":"size","in":"query","description":"Size of a page","required":false,"type":"integer","format":"int32"},{"name":"sort","in":"query","description":"Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.","required":false,"type":"array","items":{"type":"string"},"collectionFormat":"multi"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/RequestRepresentation"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/reviewer":{"get":{"tags":["request-resource"],"summary":"getReviewerRequests","operationId":"getReviewerRequestsUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"page","in":"query","description":"Page number of the requested page","required":false,"type":"integer","format":"int32"},{"name":"size","in":"query","description":"Size of a page","required":false,"type":"integer","format":"int32"},{"name":"sort","in":"query","description":"Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.","required":false,"type":"array","items":{"type":"string"},"collectionFormat":"multi"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/RequestRepresentation"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/status/{status}/coordinator":{"get":{"tags":["request-resource"],"summary":"getCoordinatorRequests","operationId":"getCoordinatorRequestsUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"status","in":"path","description":"status","required":true,"type":"string","enum":["All","Draft","Validation","Review","Revision","Approved","Delivery","Delivered","Partially_Delivered","Cancelled","Rejected","Closed_Approved","None"]},{"name":"page","in":"query","description":"Page number of the requested page","required":false,"type":"integer","format":"int32"},{"name":"size","in":"query","description":"Size of a page","required":false,"type":"integer","format":"int32"},{"name":"sort","in":"query","description":"Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.","required":false,"type":"array","items":{"type":"string"},"collectionFormat":"multi"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/RequestRepresentation"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/status/{status}/organisation/{uuid}/coordinator":{"get":{"tags":["request-resource"],"summary":"getCoordinatorRequestsForOrganisation","operationId":"getCoordinatorRequestsForOrganisationUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"status","in":"path","description":"status","required":true,"type":"string","enum":["All","Draft","Validation","Review","Revision","Approved","Delivery","Delivered","Partially_Delivered","Cancelled","Rejected","Closed_Approved","None"]},{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"},{"name":"page","in":"query","description":"Page number of the requested page","required":false,"type":"integer","format":"int32"},{"name":"size","in":"query","description":"Size of a page","required":false,"type":"integer","format":"int32"},{"name":"sort","in":"query","description":"Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.","required":false,"type":"array","items":{"type":"string"},"collectionFormat":"multi"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/RequestRepresentation"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/status/{status}/requester":{"get":{"tags":["request-resource"],"summary":"getRequesterRequestsByStatus","operationId":"getRequesterRequestsByStatusUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"status","in":"path","description":"status","required":true,"type":"string","enum":["All","Draft","Validation","Review","Revision","Approved","Delivery","Delivered","Partially_Delivered","Cancelled","Rejected","Closed_Approved","None"]},{"name":"page","in":"query","description":"Page number of the requested page","required":false,"type":"integer","format":"int32"},{"name":"size","in":"query","description":"Size of a page","required":false,"type":"integer","format":"int32"},{"name":"sort","in":"query","description":"Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.","required":false,"type":"array","items":{"type":"string"},"collectionFormat":"multi"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/RequestRepresentation"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/templates/{uuid}":{"get":{"tags":["request-template-resource"],"summary":"getRequestTemplate","operationId":"getRequestTemplateUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestTemplateRepresentation"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{requestUuid}/deliveries":{"get":{"tags":["delivery-resource"],"summary":"getDeliveryProcesses","operationId":"getDeliveryProcessesUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"requestUuid","in":"path","description":"requestUuid","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/DeliveryProcessRepresentation"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{requestUuid}/deliveries/{deliveryProcessUuid}/cancel":{"post":{"tags":["delivery-resource"],"summary":"cancelDelivery","operationId":"cancelDeliveryUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"requestUuid","in":"path","description":"requestUuid","required":true,"type":"string"},{"name":"deliveryProcessUuid","in":"path","description":"deliveryProcessUuid","required":true,"type":"string"},{"in":"body","name":"message","description":"message","required":true,"schema":{"$ref":"#/definitions/MessageRepresentation"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/DeliveryProcessRepresentation"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{requestUuid}/deliveries/{deliveryProcessUuid}/received":{"get":{"tags":["delivery-resource"],"summary":"deliveryReceived","operationId":"deliveryReceivedUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"requestUuid","in":"path","description":"requestUuid","required":true,"type":"string"},{"name":"deliveryProcessUuid","in":"path","description":"deliveryProcessUuid","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/DeliveryProcessRepresentation"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{requestUuid}/deliveries/{deliveryProcessUuid}/release":{"post":{"tags":["delivery-resource"],"summary":"releaseDelivery","operationId":"releaseDeliveryUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"requestUuid","in":"path","description":"requestUuid","required":true,"type":"string"},{"name":"deliveryProcessUuid","in":"path","description":"deliveryProcessUuid","required":true,"type":"string"},{"in":"body","name":"reference","description":"reference","required":true,"schema":{"$ref":"#/definitions/DeliveryReferenceRepresentation"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/DeliveryProcessRepresentation"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{requestUuid}/startDelivery":{"get":{"tags":["delivery-resource"],"summary":"startDelivery","operationId":"startDeliveryUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"requestUuid","in":"path","description":"requestUuid","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestRepresentation"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{uuid}":{"get":{"tags":["request-resource"],"summary":"getRequest","operationId":"getRequestUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestRepresentation"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{uuid}/approve":{"get":{"tags":["request-review-resource"],"summary":"approveRequest","operationId":"approveRequestUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestRepresentation"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{uuid}/close":{"post":{"tags":["request-resource"],"summary":"closeRequest","operationId":"closeRequestUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"},{"in":"body","name":"message","description":"message","required":false,"schema":{"$ref":"#/definitions/MessageRepresentation"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestRepresentation"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{uuid}/files":{"get":{"tags":["request-file-resource"],"summary":"listFiles","operationId":"listFilesUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"array","items":{"$ref":"#/definitions/RequestFileRepresentation"}}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}},"post":{"tags":["request-file-resource"],"summary":"addFile","operationId":"addFileUsingPOST","consumes":["multipart/form-data"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"},{"name":"file","in":"formData","description":"file","required":true,"type":"file"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestFileRepresentation"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{uuid}/files/{fileuuid}":{"delete":{"tags":["request-file-resource"],"summary":"deleteFile","operationId":"deleteFileUsingDELETE","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"},{"name":"fileuuid","in":"path","description":"fileuuid","required":true,"type":"string"}],"responses":{"200":{"description":"OK"},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}}}},"/api/requests/{uuid}/files/{fileuuid}/download":{"get":{"tags":["request-file-resource"],"summary":"downloadFile","operationId":"downloadFileUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"},{"name":"fileuuid","in":"path","description":"fileuuid","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/InputStreamResource"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{uuid}/files/{fileuuid}/type":{"put":{"tags":["request-file-resource"],"summary":"setFileType","operationId":"setFileTypeUsingPUT","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"},{"name":"fileuuid","in":"path","description":"fileuuid","required":true,"type":"string"},{"in":"body","name":"requestFileRepresentation","description":"requestFileRepresentation","required":true,"schema":{"$ref":"#/definitions/RequestFileRepresentation"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestFileRepresentation"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{uuid}/reject":{"post":{"tags":["request-review-resource"],"summary":"rejectRequest","operationId":"rejectRequestUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"},{"in":"body","name":"message","description":"message","required":true,"schema":{"$ref":"#/definitions/MessageRepresentation"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestRepresentation"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{uuid}/requestRevision":{"post":{"tags":["request-review-resource"],"summary":"requestRevision","operationId":"requestRevisionUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"},{"in":"body","name":"message","description":"message","required":true,"schema":{"$ref":"#/definitions/MessageRepresentation"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestRepresentation"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{uuid}/review":{"put":{"tags":["request-review-resource"],"summary":"submitReviewFeedback","operationId":"submitReviewFeedbackUsingPUT","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"},{"in":"body","name":"feedback","description":"feedback","required":true,"schema":{"$ref":"#/definitions/ReviewFeedbackRepresentation"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestRepresentation"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{uuid}/submit":{"get":{"tags":["request-revision-resource"],"summary":"submitRevisedRequest","operationId":"submitRevisedRequestUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestRepresentation"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/api/requests/{uuid}/validate":{"get":{"tags":["request-review-resource"],"summary":"validateRequest","operationId":"validateRequestUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"uuid","in":"path","description":"uuid","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RequestRepresentation"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}}},"definitions":{"DeliveryProcessRepresentation":{"type":"object","properties":{"createdDate":{"type":"string","format":"date-time"},"historicEvents":{"type":"array","items":{"$ref":"#/definitions/PodiumEventRepresentation"}},"lastModifiedDate":{"type":"string","format":"date-time"},"outcome":{"type":"string","enum":["Cancelled","Received","Returned","None"]},"reference":{"type":"string","minLength":0,"maxLength":2000},"status":{"type":"string","enum":["Preparation","Released","Closed","None"]},"type":{"type":"string","enum":["Data","Images","Material"]},"uuid":{"type":"string"}}},"DeliveryReferenceRepresentation":{"type":"object","properties":{"reference":{"type":"string","minLength":0,"maxLength":2000}}},"File":{"type":"object","properties":{"absolute":{"type":"boolean"},"absoluteFile":{"$ref":"#/definitions/File"},"absolutePath":{"type":"string"},"canonicalFile":{"$ref":"#/definitions/File"},"canonicalPath":{"type":"string"},"directory":{"type":"boolean"},"file":{"type":"boolean"},"freeSpace":{"type":"integer","format":"int64"},"hidden":{"type":"boolean"},"name":{"type":"string"},"parent":{"type":"string"},"parentFile":{"$ref":"#/definitions/File"},"path":{"type":"string"},"totalSpace":{"type":"integer","format":"int64"},"usableSpace":{"type":"integer","format":"int64"}}},"InputStream":{"type":"object"},"InputStreamResource":{"type":"object","properties":{"description":{"type":"string"},"file":{"$ref":"#/definitions/File"},"filename":{"type":"string"},"inputStream":{"$ref":"#/definitions/InputStream"},"open":{"type":"boolean"},"readable":{"type":"boolean"},"uri":{"$ref":"#/definitions/URI"},"url":{"$ref":"#/definitions/URL"}}},"MapOfstringAndstring":{"type":"object","additionalProperties":{"type":"string"}},"MessageRepresentation":{"type":"object","properties":{"description":{"type":"string"},"summary":{"type":"string","minLength":0,"maxLength":255}}},"OrganisationRepresentation":{"type":"object","required":["name","shortName"],"properties":{"activated":{"type":"boolean"},"id":{"type":"integer","format":"int64"},"name":{"type":"string"},"requestTypes":{"type":"array","items":{"type":"string","enum":["Data","Images","Material"]}},"shortName":{"type":"string","minLength":0,"maxLength":50},"uuid":{"type":"string"}}},"PodiumEventRepresentation":{"type":"object","properties":{"data":{"type":"object","additionalProperties":{"type":"string"}},"eventDate":{"type":"string","format":"date-time"},"eventType":{"type":"string","enum":["Status_Change","Authentication","Authentication_Failure","Authentication_Success","Authentication_Switch","Authorization","Authorization_Failed","Authorization_Success"]},"id":{"type":"integer","format":"int64"},"principal":{"type":"string"}}},"PrincipalInvestigator":{"type":"object","properties":{"affiliation":{"type":"string"},"email":{"type":"string"},"id":{"type":"integer","format":"int64"},"jobTitle":{"type":"string"},"name":{"type":"string"}}},"PrincipalInvestigatorRepresentation":{"type":"object","properties":{"affiliation":{"type":"string","minLength":0,"maxLength":150},"email":{"type":"string","minLength":0,"maxLength":150},"id":{"type":"integer","format":"int64"},"jobTitle":{"type":"string","minLength":0,"maxLength":150},"name":{"type":"string","minLength":0,"maxLength":150}}},"ProfileInfoVM":{"type":"object","properties":{"activeProfiles":{"type":"array","items":{"type":"string"}},"ribbonEnv":{"type":"string"}}},"RequestDetail":{"type":"object","properties":{"background":{"type":"string"},"combinedRequest":{"type":"boolean"},"hypothesis":{"type":"string"},"id":{"type":"integer","format":"int64"},"methods":{"type":"string"},"principalInvestigator":{"$ref":"#/definitions/PrincipalInvestigator"},"relatedRequestNumber":{"type":"string"},"requestType":{"type":"array","items":{"type":"string","enum":["Data","Images","Material"]}},"researchQuestion":{"type":"string"},"searchQuery":{"type":"string"},"title":{"type":"string"}}},"RequestDetailRepresentation":{"type":"object","properties":{"background":{"type":"string","minLength":0,"maxLength":2000},"combinedRequest":{"type":"boolean"},"hypothesis":{"type":"string","minLength":0,"maxLength":5000},"id":{"type":"integer","format":"int64"},"methods":{"type":"string","minLength":0,"maxLength":10000},"principalInvestigator":{"$ref":"#/definitions/PrincipalInvestigatorRepresentation"},"relatedRequestNumber":{"type":"string","minLength":0,"maxLength":50},"requestType":{"type":"array","items":{"type":"string","enum":["Data","Images","Material"]}},"researchQuestion":{"type":"string","minLength":0,"maxLength":300},"searchQuery":{"type":"string"},"title":{"type":"string","minLength":0,"maxLength":50}}},"RequestFileRepresentation":{"type":"object","properties":{"createdDate":{"type":"string","format":"date-time"},"fileByteSize":{"type":"integer","format":"int64"},"fileName":{"type":"string"},"lastModifiedDate":{"type":"string","format":"date-time"},"owner":{"$ref":"#/definitions/UserRepresentation"},"request":{"$ref":"#/definitions/RequestRepresentation"},"requestFileType":{"type":"string","enum":["METC_LETTER","ORG_CONDITIONS","MTA","DTA","OTHER","NONE"]},"uploader":{"$ref":"#/definitions/UserRepresentation"},"uuid":{"type":"string"}}},"RequestRepresentation":{"type":"object","required":["requestDetail"],"properties":{"createdDate":{"type":"string","format":"date-time"},"id":{"type":"integer","format":"int64"},"lastModifiedDate":{"type":"string","format":"date-time"},"latestEvent":{"$ref":"#/definitions/PodiumEventRepresentation"},"organisations":{"type":"array","items":{"$ref":"#/definitions/OrganisationRepresentation"}},"relatedRequests":{"type":"array","items":{"$ref":"#/definitions/RequestRepresentation"}},"requestDetail":{"$ref":"#/definitions/RequestDetailRepresentation"},"requestReview":{"$ref":"#/definitions/RequestReviewRepresentation"},"requester":{"$ref":"#/definitions/UserRepresentation"},"reviewRound":{"$ref":"#/definitions/ReviewRoundRepresentation"},"revisionDetail":{"$ref":"#/definitions/RequestDetailRepresentation"},"status":{"type":"string","enum":["All","Draft","Validation","Review","Revision","Approved","Delivery","Delivered","Partially_Delivered","Cancelled","Rejected","Closed_Approved","None"]},"uuid":{"type":"string"}}},"RequestReviewRepresentation":{"type":"object","properties":{"decision":{"type":"string","enum":["Approved","Rejected","None"]},"id":{"type":"integer","format":"int64"},"processInstanceId":{"type":"string"},"status":{"type":"string","enum":["Revision","Validation","Review","Closed","None"]}}},"RequestTemplateRepresentation":{"type":"object","required":["URL","humanReadable"],"properties":{"URL":{"type":"string","minLength":1,"maxLength":2147483647},"collections":{"type":"array","items":{"$ref":"#/definitions/MapOfstringAndstring"}},"humanReadable":{"type":"string","minLength":1,"maxLength":2147483647},"id":{"type":"integer","format":"int64"},"ntoken":{"type":"string"},"organisations":{"type":"array","items":{"type":"string"}},"uuid":{"type":"string"}}},"ReviewFeedbackRepresentation":{"type":"object","properties":{"advice":{"type":"string","enum":["Approved","Rejected","None"]},"date":{"type":"string","format":"date-time"},"id":{"type":"integer","format":"int64"},"message":{"$ref":"#/definitions/MessageRepresentation"},"reviewer":{"$ref":"#/definitions/UserRepresentation"},"uuid":{"type":"string"}}},"ReviewRoundRepresentation":{"type":"object","properties":{"endDate":{"type":"string","format":"date-time"},"id":{"type":"integer","format":"int64"},"initiatedBy":{"type":"string"},"requestDetail":{"$ref":"#/definitions/RequestDetailRepresentation"},"reviewFeedback":{"type":"array","items":{"$ref":"#/definitions/ReviewFeedbackRepresentation"}},"startDate":{"type":"string","format":"date-time"},"uuid":{"type":"string"}}},"RouteRepresentation":{"type":"object","properties":{"path":{"type":"string"},"serviceId":{"type":"string"},"serviceInstances":{"type":"array","items":{"$ref":"#/definitions/ServiceInstance"}}}},"ServiceInstance":{"type":"object","properties":{"host":{"type":"string"},"metadata":{"type":"object","additionalProperties":{"type":"string"}},"port":{"type":"integer","format":"int32"},"secure":{"type":"boolean"},"serviceId":{"type":"string"},"uri":{"$ref":"#/definitions/URI"}}},"URI":{"type":"object","properties":{"absolute":{"type":"boolean"},"authority":{"type":"string"},"fragment":{"type":"string"},"host":{"type":"string"},"opaque":{"type":"boolean"},"path":{"type":"string"},"port":{"type":"integer","format":"int32"},"query":{"type":"string"},"rawAuthority":{"type":"string"},"rawFragment":{"type":"string"},"rawPath":{"type":"string"},"rawQuery":{"type":"string"},"rawSchemeSpecificPart":{"type":"string"},"rawUserInfo":{"type":"string"},"scheme":{"type":"string"},"schemeSpecificPart":{"type":"string"},"userInfo":{"type":"string"}}},"URL":{"type":"object","properties":{"authority":{"type":"string"},"content":{"type":"object"},"defaultPort":{"type":"integer","format":"int32"},"file":{"type":"string"},"host":{"type":"string"},"path":{"type":"string"},"port":{"type":"integer","format":"int32"},"protocol":{"type":"string"},"query":{"type":"string"},"ref":{"type":"string"},"userInfo":{"type":"string"}}},"UserRepresentation":{"type":"object","properties":{"accountLocked":{"type":"boolean"},"adminVerified":{"type":"boolean"},"authorities":{"type":"array","items":{"type":"string"}},"department":{"type":"string"},"email":{"type":"string","minLength":0,"maxLength":100},"emailVerified":{"type":"boolean"},"firstName":{"type":"string","minLength":0,"maxLength":50},"institute":{"type":"string"},"jobTitle":{"type":"string"},"langKey":{"type":"string","minLength":2,"maxLength":5},"lastName":{"type":"string","minLength":0,"maxLength":50},"login":{"type":"string","minLength":0,"maxLength":50,"pattern":"^[_'.@A-Za-z0-9-]*$"},"organisationAuthorities":{"type":"object","additionalProperties":{"type":"array","items":{"type":"string"}}},"specialism":{"type":"string"},"telephone":{"type":"string"},"uuid":{"type":"string"}}}}}
;
