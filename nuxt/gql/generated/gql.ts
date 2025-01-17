/* eslint-disable */
import * as types from './graphql'
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  fragment ContactItem on Contact {\n    nodeId\n    id\n    accountUsername\n    address\n    authorAccountUsername\n    emailAddress\n    emailAddressHash\n    firstName\n    lastName\n    phoneNumber\n    url\n  }\n':
    types.ContactItemFragmentDoc,
  '\n  fragment EventItem on Event {\n    id\n    nodeId\n    authorUsername\n    description\n    end\n    inviteeCountMaximum\n    isArchived\n    isInPerson\n    isRemote\n    location\n    name\n    slug\n    start\n    url\n    visibility\n  }\n':
    types.EventItemFragmentDoc,
  '\n  fragment InvitationItem on Invitation {\n    id\n    nodeId\n    contactId\n    eventId\n    feedback\n    feedbackPaper\n    uuid\n    contactByContactId {\n      ...ContactItem\n    }\n  }\n':
    types.InvitationItemFragmentDoc,
  '\n  fragment ProfilePictureItem on ProfilePicture {\n    id\n    nodeId\n    uploadStorageKey\n    username\n  }\n':
    types.ProfilePictureItemFragmentDoc,
  '\n  fragment UploadItem on Upload {\n    id\n    nodeId\n    sizeByte\n    storageKey\n    username\n    uuid\n  }\n':
    types.UploadItemFragmentDoc,
  '\n  mutation authenticate($password: String!, $username: String!) {\n    authenticate(input: { password: $password, username: $username }) {\n      clientMutationId\n      jwt\n    }\n  }\n':
    types.AuthenticateDocument,
  '\n      mutation accountDelete($password: String!) {\n        accountDelete(input: { password: $password }) {\n          clientMutationId\n        }\n      }\n    ':
    types.AccountDeleteDocument,
  '\n      mutation accountEmailAddressVerification($code: UUID!) {\n        accountEmailAddressVerification(input: { code: $code }) {\n          clientMutationId\n        }\n      }\n    ':
    types.AccountEmailAddressVerificationDocument,
  '\n  mutation jwtRefresh($id: UUID!) {\n    jwtRefresh(input: { jwtId: $id }) {\n      clientMutationId\n      jwt\n    }\n  }\n':
    types.JwtRefreshDocument,
  '\n      mutation accountPasswordChange(\n        $passwordCurrent: String!\n        $passwordNew: String!\n      ) {\n        accountPasswordChange(\n          input: {\n            passwordCurrent: $passwordCurrent\n            passwordNew: $passwordNew\n          }\n        ) {\n          clientMutationId\n        }\n      }\n    ':
    types.AccountPasswordChangeDocument,
  '\n      mutation accountPasswordReset($code: UUID!, $password: String!) {\n        accountPasswordReset(input: { code: $code, password: $password }) {\n          clientMutationId\n        }\n      }\n    ':
    types.AccountPasswordResetDocument,
  '\n      mutation accountPasswordResetRequest(\n        $emailAddress: String!\n        $language: String!\n      ) {\n        accountPasswordResetRequest(\n          input: { emailAddress: $emailAddress, language: $language }\n        ) {\n          clientMutationId\n        }\n      }\n    ':
    types.AccountPasswordResetRequestDocument,
  '\n      mutation accountRegistration(\n        $emailAddress: String!\n        $password: String!\n        $username: String!\n        $language: String!\n      ) {\n        accountRegistration(\n          input: {\n            emailAddress: $emailAddress\n            password: $password\n            username: $username\n            language: $language\n          }\n        ) {\n          clientMutationId\n        }\n      }\n    ':
    types.AccountRegistrationDocument,
  '\n      mutation accountRegistrationRefresh(\n        $username: String!\n        $language: String!\n      ) {\n        accountRegistrationRefresh(\n          input: { language: $language, username: $username }\n        ) {\n          clientMutationId\n        }\n      }\n    ':
    types.AccountRegistrationRefreshDocument,
  '\n      mutation createContact($contactInput: ContactInput!) {\n        createContact(input: { contact: $contactInput }) {\n          contact {\n            ...ContactItem\n          }\n        }\n      }\n    ':
    types.CreateContactDocument,
  '\n      mutation deleteContactById($id: BigInt!) {\n        deleteContactById(input: { id: $id }) {\n          clientMutationId\n          contact {\n            ...ContactItem\n          }\n        }\n      }\n    ':
    types.DeleteContactByIdDocument,
  '\n      mutation updateContactById($id: BigInt!, $contactPatch: ContactPatch!) {\n        updateContactById(input: { id: $id, contactPatch: $contactPatch }) {\n          contact {\n            ...ContactItem\n          }\n        }\n      }\n    ':
    types.UpdateContactByIdDocument,
  '\n      mutation createEvent($createEventInput: CreateEventInput!) {\n        createEvent(input: $createEventInput) {\n          event {\n            ...EventItem\n          }\n        }\n      }\n    ':
    types.CreateEventDocument,
  '\n      mutation eventDelete($id: BigInt!, $password: String!) {\n        eventDelete(input: { id: $id, password: $password }) {\n          clientMutationId\n          event {\n            ...EventItem\n          }\n        }\n      }\n    ':
    types.EventDeleteDocument,
  '\n  mutation eventUnlock($invitationCode: UUID!) {\n    eventUnlock(input: { invitationCode: $invitationCode }) {\n      eventUnlockResponse {\n        eventSlug\n        jwt\n        authorUsername\n      }\n    }\n  }\n':
    types.EventUnlockDocument,
  '\n      mutation updateEventById($id: BigInt!, $eventPatch: EventPatch!) {\n        updateEventById(input: { id: $id, eventPatch: $eventPatch }) {\n          event {\n            ...EventItem\n          }\n        }\n      }\n    ':
    types.UpdateEventByIdDocument,
  '\n      mutation createInvitation($invitationInput: InvitationInput!) {\n        createInvitation(input: { invitation: $invitationInput }) {\n          invitation {\n            contactByContactId {\n              ...ContactItem\n            }\n            uuid\n          }\n        }\n      }\n    ':
    types.CreateInvitationDocument,
  '\n      mutation deleteInvitationById($id: BigInt!) {\n        deleteInvitationById(input: { id: $id }) {\n          clientMutationId\n        }\n      }\n    ':
    types.DeleteInvitationByIdDocument,
  '\n      mutation updateInvitationById(\n        $id: BigInt!\n        $invitationPatch: InvitationPatch!\n      ) {\n        updateInvitationById(\n          input: { id: $id, invitationPatch: $invitationPatch }\n        ) {\n          invitation {\n            ...InvitationItem\n            contactByContactId {\n              ...ContactItem\n            }\n          }\n        }\n      }\n    ':
    types.UpdateInvitationByIdDocument,
  '\n      mutation invite($invitationId: BigInt!, $language: String!) {\n        invite(input: { invitationId: $invitationId, language: $language }) {\n          clientMutationId\n        }\n      }\n    ':
    types.InviteDocument,
  '\n      mutation profilePictureSet($storageKey: String!) {\n        profilePictureSet(input: { storageKey: $storageKey }) {\n          clientMutationId\n        }\n      }\n    ':
    types.ProfilePictureSetDocument,
  '\n      mutation uploadCreate($uploadCreateInput: UploadCreateInput!) {\n        uploadCreate(input: $uploadCreateInput) {\n          clientMutationId\n          uuid\n        }\n      }\n    ':
    types.UploadCreateDocument,
  '\n  query accountIsExisting($username: String!) {\n    accountIsExisting(username: $username)\n  }\n':
    types.AccountIsExistingDocument,
  '\n      query accountUploadQuotaBytes {\n        accountUploadQuotaBytes\n      }\n    ':
    types.AccountUploadQuotaBytesDocument,
  '\n      query allContacts(\n        $after: Cursor\n        $authorAccountUsername: String\n        $first: Int!\n      ) {\n        allContacts(\n          after: $after\n          condition: { authorAccountUsername: $authorAccountUsername }\n          first: $first\n          orderBy: [FIRST_NAME_ASC, LAST_NAME_ASC]\n        ) {\n          nodes {\n            ...ContactItem\n          }\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          totalCount\n        }\n      }\n    ':
    types.AllContactsDocument,
  '\n      query eventByAuthorUsernameAndSlug(\n        $authorUsername: String!\n        $slug: String!\n        $invitationUuid: UUID\n      ) {\n        eventByAuthorUsernameAndSlug(\n          authorUsername: $authorUsername\n          slug: $slug\n        ) {\n          ...EventItem\n          invitationsByEventId(condition: { uuid: $invitationUuid }) {\n            nodes {\n              ...InvitationItem\n              contactByContactId {\n                ...ContactItem\n              }\n            }\n          }\n        }\n      }\n    ':
    types.EventByAuthorUsernameAndSlugDocument,
  '\n  query eventIsExisting($authorUsername: String!, $slug: String!) {\n    eventIsExisting(authorUsername: $authorUsername, slug: $slug)\n  }\n':
    types.EventIsExistingDocument,
  '\n      query allEvents($after: Cursor, $authorUsername: String, $first: Int!) {\n        allEvents(\n          after: $after\n          condition: { authorUsername: $authorUsername }\n          first: $first\n          orderBy: START_DESC\n        ) {\n          nodes {\n            ...EventItem\n          }\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          totalCount\n        }\n      }\n    ':
    types.AllEventsDocument,
  '\n      query allInvitations($after: Cursor, $eventId: BigInt!, $first: Int!) {\n        allInvitations(\n          after: $after\n          condition: { eventId: $eventId }\n          first: $first\n        ) {\n          nodes {\n            ...InvitationItem\n          }\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          totalCount\n        }\n      }\n    ':
    types.AllInvitationsDocument,
  '\n      query profilePictureByUsername($username: String!) {\n        profilePictureByUsername(username: $username) {\n          ...ProfilePictureItem\n        }\n      }\n    ':
    types.ProfilePictureByUsernameDocument,
  '\n      query allUploads($after: Cursor, $first: Int!, $username: String) {\n        allUploads(\n          after: $after\n          condition: { username: $username }\n          first: $first\n        ) {\n          nodes {\n            ...UploadItem\n          }\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          totalCount\n        }\n      }\n    ':
    types.AllUploadsDocument,
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ContactItem on Contact {\n    nodeId\n    id\n    accountUsername\n    address\n    authorAccountUsername\n    emailAddress\n    emailAddressHash\n    firstName\n    lastName\n    phoneNumber\n    url\n  }\n'
): (typeof documents)['\n  fragment ContactItem on Contact {\n    nodeId\n    id\n    accountUsername\n    address\n    authorAccountUsername\n    emailAddress\n    emailAddressHash\n    firstName\n    lastName\n    phoneNumber\n    url\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment EventItem on Event {\n    id\n    nodeId\n    authorUsername\n    description\n    end\n    inviteeCountMaximum\n    isArchived\n    isInPerson\n    isRemote\n    location\n    name\n    slug\n    start\n    url\n    visibility\n  }\n'
): (typeof documents)['\n  fragment EventItem on Event {\n    id\n    nodeId\n    authorUsername\n    description\n    end\n    inviteeCountMaximum\n    isArchived\n    isInPerson\n    isRemote\n    location\n    name\n    slug\n    start\n    url\n    visibility\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment InvitationItem on Invitation {\n    id\n    nodeId\n    contactId\n    eventId\n    feedback\n    feedbackPaper\n    uuid\n    contactByContactId {\n      ...ContactItem\n    }\n  }\n'
): (typeof documents)['\n  fragment InvitationItem on Invitation {\n    id\n    nodeId\n    contactId\n    eventId\n    feedback\n    feedbackPaper\n    uuid\n    contactByContactId {\n      ...ContactItem\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment ProfilePictureItem on ProfilePicture {\n    id\n    nodeId\n    uploadStorageKey\n    username\n  }\n'
): (typeof documents)['\n  fragment ProfilePictureItem on ProfilePicture {\n    id\n    nodeId\n    uploadStorageKey\n    username\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment UploadItem on Upload {\n    id\n    nodeId\n    sizeByte\n    storageKey\n    username\n    uuid\n  }\n'
): (typeof documents)['\n  fragment UploadItem on Upload {\n    id\n    nodeId\n    sizeByte\n    storageKey\n    username\n    uuid\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation authenticate($password: String!, $username: String!) {\n    authenticate(input: { password: $password, username: $username }) {\n      clientMutationId\n      jwt\n    }\n  }\n'
): (typeof documents)['\n  mutation authenticate($password: String!, $username: String!) {\n    authenticate(input: { password: $password, username: $username }) {\n      clientMutationId\n      jwt\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation accountDelete($password: String!) {\n        accountDelete(input: { password: $password }) {\n          clientMutationId\n        }\n      }\n    '
): (typeof documents)['\n      mutation accountDelete($password: String!) {\n        accountDelete(input: { password: $password }) {\n          clientMutationId\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation accountEmailAddressVerification($code: UUID!) {\n        accountEmailAddressVerification(input: { code: $code }) {\n          clientMutationId\n        }\n      }\n    '
): (typeof documents)['\n      mutation accountEmailAddressVerification($code: UUID!) {\n        accountEmailAddressVerification(input: { code: $code }) {\n          clientMutationId\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation jwtRefresh($id: UUID!) {\n    jwtRefresh(input: { jwtId: $id }) {\n      clientMutationId\n      jwt\n    }\n  }\n'
): (typeof documents)['\n  mutation jwtRefresh($id: UUID!) {\n    jwtRefresh(input: { jwtId: $id }) {\n      clientMutationId\n      jwt\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation accountPasswordChange(\n        $passwordCurrent: String!\n        $passwordNew: String!\n      ) {\n        accountPasswordChange(\n          input: {\n            passwordCurrent: $passwordCurrent\n            passwordNew: $passwordNew\n          }\n        ) {\n          clientMutationId\n        }\n      }\n    '
): (typeof documents)['\n      mutation accountPasswordChange(\n        $passwordCurrent: String!\n        $passwordNew: String!\n      ) {\n        accountPasswordChange(\n          input: {\n            passwordCurrent: $passwordCurrent\n            passwordNew: $passwordNew\n          }\n        ) {\n          clientMutationId\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation accountPasswordReset($code: UUID!, $password: String!) {\n        accountPasswordReset(input: { code: $code, password: $password }) {\n          clientMutationId\n        }\n      }\n    '
): (typeof documents)['\n      mutation accountPasswordReset($code: UUID!, $password: String!) {\n        accountPasswordReset(input: { code: $code, password: $password }) {\n          clientMutationId\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation accountPasswordResetRequest(\n        $emailAddress: String!\n        $language: String!\n      ) {\n        accountPasswordResetRequest(\n          input: { emailAddress: $emailAddress, language: $language }\n        ) {\n          clientMutationId\n        }\n      }\n    '
): (typeof documents)['\n      mutation accountPasswordResetRequest(\n        $emailAddress: String!\n        $language: String!\n      ) {\n        accountPasswordResetRequest(\n          input: { emailAddress: $emailAddress, language: $language }\n        ) {\n          clientMutationId\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation accountRegistration(\n        $emailAddress: String!\n        $password: String!\n        $username: String!\n        $language: String!\n      ) {\n        accountRegistration(\n          input: {\n            emailAddress: $emailAddress\n            password: $password\n            username: $username\n            language: $language\n          }\n        ) {\n          clientMutationId\n        }\n      }\n    '
): (typeof documents)['\n      mutation accountRegistration(\n        $emailAddress: String!\n        $password: String!\n        $username: String!\n        $language: String!\n      ) {\n        accountRegistration(\n          input: {\n            emailAddress: $emailAddress\n            password: $password\n            username: $username\n            language: $language\n          }\n        ) {\n          clientMutationId\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation accountRegistrationRefresh(\n        $username: String!\n        $language: String!\n      ) {\n        accountRegistrationRefresh(\n          input: { language: $language, username: $username }\n        ) {\n          clientMutationId\n        }\n      }\n    '
): (typeof documents)['\n      mutation accountRegistrationRefresh(\n        $username: String!\n        $language: String!\n      ) {\n        accountRegistrationRefresh(\n          input: { language: $language, username: $username }\n        ) {\n          clientMutationId\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation createContact($contactInput: ContactInput!) {\n        createContact(input: { contact: $contactInput }) {\n          contact {\n            ...ContactItem\n          }\n        }\n      }\n    '
): (typeof documents)['\n      mutation createContact($contactInput: ContactInput!) {\n        createContact(input: { contact: $contactInput }) {\n          contact {\n            ...ContactItem\n          }\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation deleteContactById($id: BigInt!) {\n        deleteContactById(input: { id: $id }) {\n          clientMutationId\n          contact {\n            ...ContactItem\n          }\n        }\n      }\n    '
): (typeof documents)['\n      mutation deleteContactById($id: BigInt!) {\n        deleteContactById(input: { id: $id }) {\n          clientMutationId\n          contact {\n            ...ContactItem\n          }\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation updateContactById($id: BigInt!, $contactPatch: ContactPatch!) {\n        updateContactById(input: { id: $id, contactPatch: $contactPatch }) {\n          contact {\n            ...ContactItem\n          }\n        }\n      }\n    '
): (typeof documents)['\n      mutation updateContactById($id: BigInt!, $contactPatch: ContactPatch!) {\n        updateContactById(input: { id: $id, contactPatch: $contactPatch }) {\n          contact {\n            ...ContactItem\n          }\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation createEvent($createEventInput: CreateEventInput!) {\n        createEvent(input: $createEventInput) {\n          event {\n            ...EventItem\n          }\n        }\n      }\n    '
): (typeof documents)['\n      mutation createEvent($createEventInput: CreateEventInput!) {\n        createEvent(input: $createEventInput) {\n          event {\n            ...EventItem\n          }\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation eventDelete($id: BigInt!, $password: String!) {\n        eventDelete(input: { id: $id, password: $password }) {\n          clientMutationId\n          event {\n            ...EventItem\n          }\n        }\n      }\n    '
): (typeof documents)['\n      mutation eventDelete($id: BigInt!, $password: String!) {\n        eventDelete(input: { id: $id, password: $password }) {\n          clientMutationId\n          event {\n            ...EventItem\n          }\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation eventUnlock($invitationCode: UUID!) {\n    eventUnlock(input: { invitationCode: $invitationCode }) {\n      eventUnlockResponse {\n        eventSlug\n        jwt\n        authorUsername\n      }\n    }\n  }\n'
): (typeof documents)['\n  mutation eventUnlock($invitationCode: UUID!) {\n    eventUnlock(input: { invitationCode: $invitationCode }) {\n      eventUnlockResponse {\n        eventSlug\n        jwt\n        authorUsername\n      }\n    }\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation updateEventById($id: BigInt!, $eventPatch: EventPatch!) {\n        updateEventById(input: { id: $id, eventPatch: $eventPatch }) {\n          event {\n            ...EventItem\n          }\n        }\n      }\n    '
): (typeof documents)['\n      mutation updateEventById($id: BigInt!, $eventPatch: EventPatch!) {\n        updateEventById(input: { id: $id, eventPatch: $eventPatch }) {\n          event {\n            ...EventItem\n          }\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation createInvitation($invitationInput: InvitationInput!) {\n        createInvitation(input: { invitation: $invitationInput }) {\n          invitation {\n            contactByContactId {\n              ...ContactItem\n            }\n            uuid\n          }\n        }\n      }\n    '
): (typeof documents)['\n      mutation createInvitation($invitationInput: InvitationInput!) {\n        createInvitation(input: { invitation: $invitationInput }) {\n          invitation {\n            contactByContactId {\n              ...ContactItem\n            }\n            uuid\n          }\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation deleteInvitationById($id: BigInt!) {\n        deleteInvitationById(input: { id: $id }) {\n          clientMutationId\n        }\n      }\n    '
): (typeof documents)['\n      mutation deleteInvitationById($id: BigInt!) {\n        deleteInvitationById(input: { id: $id }) {\n          clientMutationId\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation updateInvitationById(\n        $id: BigInt!\n        $invitationPatch: InvitationPatch!\n      ) {\n        updateInvitationById(\n          input: { id: $id, invitationPatch: $invitationPatch }\n        ) {\n          invitation {\n            ...InvitationItem\n            contactByContactId {\n              ...ContactItem\n            }\n          }\n        }\n      }\n    '
): (typeof documents)['\n      mutation updateInvitationById(\n        $id: BigInt!\n        $invitationPatch: InvitationPatch!\n      ) {\n        updateInvitationById(\n          input: { id: $id, invitationPatch: $invitationPatch }\n        ) {\n          invitation {\n            ...InvitationItem\n            contactByContactId {\n              ...ContactItem\n            }\n          }\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation invite($invitationId: BigInt!, $language: String!) {\n        invite(input: { invitationId: $invitationId, language: $language }) {\n          clientMutationId\n        }\n      }\n    '
): (typeof documents)['\n      mutation invite($invitationId: BigInt!, $language: String!) {\n        invite(input: { invitationId: $invitationId, language: $language }) {\n          clientMutationId\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation profilePictureSet($storageKey: String!) {\n        profilePictureSet(input: { storageKey: $storageKey }) {\n          clientMutationId\n        }\n      }\n    '
): (typeof documents)['\n      mutation profilePictureSet($storageKey: String!) {\n        profilePictureSet(input: { storageKey: $storageKey }) {\n          clientMutationId\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      mutation uploadCreate($uploadCreateInput: UploadCreateInput!) {\n        uploadCreate(input: $uploadCreateInput) {\n          clientMutationId\n          uuid\n        }\n      }\n    '
): (typeof documents)['\n      mutation uploadCreate($uploadCreateInput: UploadCreateInput!) {\n        uploadCreate(input: $uploadCreateInput) {\n          clientMutationId\n          uuid\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query accountIsExisting($username: String!) {\n    accountIsExisting(username: $username)\n  }\n'
): (typeof documents)['\n  query accountIsExisting($username: String!) {\n    accountIsExisting(username: $username)\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      query accountUploadQuotaBytes {\n        accountUploadQuotaBytes\n      }\n    '
): (typeof documents)['\n      query accountUploadQuotaBytes {\n        accountUploadQuotaBytes\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      query allContacts(\n        $after: Cursor\n        $authorAccountUsername: String\n        $first: Int!\n      ) {\n        allContacts(\n          after: $after\n          condition: { authorAccountUsername: $authorAccountUsername }\n          first: $first\n          orderBy: [FIRST_NAME_ASC, LAST_NAME_ASC]\n        ) {\n          nodes {\n            ...ContactItem\n          }\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          totalCount\n        }\n      }\n    '
): (typeof documents)['\n      query allContacts(\n        $after: Cursor\n        $authorAccountUsername: String\n        $first: Int!\n      ) {\n        allContacts(\n          after: $after\n          condition: { authorAccountUsername: $authorAccountUsername }\n          first: $first\n          orderBy: [FIRST_NAME_ASC, LAST_NAME_ASC]\n        ) {\n          nodes {\n            ...ContactItem\n          }\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          totalCount\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      query eventByAuthorUsernameAndSlug(\n        $authorUsername: String!\n        $slug: String!\n        $invitationUuid: UUID\n      ) {\n        eventByAuthorUsernameAndSlug(\n          authorUsername: $authorUsername\n          slug: $slug\n        ) {\n          ...EventItem\n          invitationsByEventId(condition: { uuid: $invitationUuid }) {\n            nodes {\n              ...InvitationItem\n              contactByContactId {\n                ...ContactItem\n              }\n            }\n          }\n        }\n      }\n    '
): (typeof documents)['\n      query eventByAuthorUsernameAndSlug(\n        $authorUsername: String!\n        $slug: String!\n        $invitationUuid: UUID\n      ) {\n        eventByAuthorUsernameAndSlug(\n          authorUsername: $authorUsername\n          slug: $slug\n        ) {\n          ...EventItem\n          invitationsByEventId(condition: { uuid: $invitationUuid }) {\n            nodes {\n              ...InvitationItem\n              contactByContactId {\n                ...ContactItem\n              }\n            }\n          }\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query eventIsExisting($authorUsername: String!, $slug: String!) {\n    eventIsExisting(authorUsername: $authorUsername, slug: $slug)\n  }\n'
): (typeof documents)['\n  query eventIsExisting($authorUsername: String!, $slug: String!) {\n    eventIsExisting(authorUsername: $authorUsername, slug: $slug)\n  }\n']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      query allEvents($after: Cursor, $authorUsername: String, $first: Int!) {\n        allEvents(\n          after: $after\n          condition: { authorUsername: $authorUsername }\n          first: $first\n          orderBy: START_DESC\n        ) {\n          nodes {\n            ...EventItem\n          }\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          totalCount\n        }\n      }\n    '
): (typeof documents)['\n      query allEvents($after: Cursor, $authorUsername: String, $first: Int!) {\n        allEvents(\n          after: $after\n          condition: { authorUsername: $authorUsername }\n          first: $first\n          orderBy: START_DESC\n        ) {\n          nodes {\n            ...EventItem\n          }\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          totalCount\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      query allInvitations($after: Cursor, $eventId: BigInt!, $first: Int!) {\n        allInvitations(\n          after: $after\n          condition: { eventId: $eventId }\n          first: $first\n        ) {\n          nodes {\n            ...InvitationItem\n          }\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          totalCount\n        }\n      }\n    '
): (typeof documents)['\n      query allInvitations($after: Cursor, $eventId: BigInt!, $first: Int!) {\n        allInvitations(\n          after: $after\n          condition: { eventId: $eventId }\n          first: $first\n        ) {\n          nodes {\n            ...InvitationItem\n          }\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          totalCount\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      query profilePictureByUsername($username: String!) {\n        profilePictureByUsername(username: $username) {\n          ...ProfilePictureItem\n        }\n      }\n    '
): (typeof documents)['\n      query profilePictureByUsername($username: String!) {\n        profilePictureByUsername(username: $username) {\n          ...ProfilePictureItem\n        }\n      }\n    ']
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      query allUploads($after: Cursor, $first: Int!, $username: String) {\n        allUploads(\n          after: $after\n          condition: { username: $username }\n          first: $first\n        ) {\n          nodes {\n            ...UploadItem\n          }\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          totalCount\n        }\n      }\n    '
): (typeof documents)['\n      query allUploads($after: Cursor, $first: Int!, $username: String) {\n        allUploads(\n          after: $after\n          condition: { username: $username }\n          first: $first\n        ) {\n          nodes {\n            ...UploadItem\n          }\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          totalCount\n        }\n      }\n    ']

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
