/* eslint-disable import/first */
// tslint:disable
import gql from 'graphql-tag'
import * as ReactApollo from 'react-apollo'
import * as ReactApolloHooks from 'react-apollo-hooks'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any
}

export type Address = {
  __typename?: 'Address'
  lineOne: Scalars['String']
  lineTwo?: Maybe<Scalars['String']>
  city: Scalars['String']
  state: Scalars['String']
  postalCode: Scalars['String']
  country: Country
  coordinates: Coordinates
  type: AddressTypeEnum
}

export type AddressInput = {
  lineOne: Scalars['String']
  lineTwo?: Maybe<Scalars['String']>
  city: Scalars['String']
  state: Scalars['String']
  postalCode: Scalars['String']
  country: CountryInput
  coordinates: CoordinatesInput
  type: AddressTypeEnum
}

/** Type of Address */
export enum AddressTypeEnum {
  Mailing = 'Mailing',
  Business = 'Business',
  Home = 'Home',
  Other = 'Other',
}

export type Ancestry = {
  __typename?: 'Ancestry'
  depth: Scalars['Int']
  breadcrumb: Scalars['String']
  ancestors?: Maybe<Scalars['String']>
}

export type AncestryInput = {
  depth: Scalars['Int']
  breadcrumb: Scalars['String']
  ancestors?: Maybe<Scalars['String']>
}

export type Appointment = {
  __typename?: 'Appointment'
  id: Scalars['ID']
  client: ClientReference
  when: Scalars['DateTime']
  where: Address
  duration: Scalars['Int']
  department: Scalars['String']
  contact: Contact
  phones: Array<Phone>
  offer: Scalars['Float']
  skills: Array<Skill>
  bodyCountNeeded: Scalars['Int']
  candidates: Array<Candidate>
  usersAccepted?: Maybe<Array<UserReference>>
  payRate: Scalars['Float']
  arrivalStatus?: Maybe<ArrivalStatusEnum>
}

export type AppointmentInput = {
  id?: Maybe<Scalars['ID']>
  client: ClientReferenceInput
  when: Scalars['DateTime']
  where: AddressInput
  duration: Scalars['Int']
  department: Scalars['String']
  phones: Array<PhoneInput>
  offer: Scalars['Float']
  skills: Array<SkillInput>
  bodyCountNeeded: Scalars['Int']
  candidates?: Maybe<Array<CandidateInput>>
  usersAccepted?: Maybe<Array<UserReferenceInput>>
  payRate: Scalars['Float']
  arrivalStatus?: Maybe<ArrivalStatusEnum>
}

export type AppointmentTableList = {
  __typename?: 'AppointmentTableList'
  appointments: Array<Appointment>
  totalRows: Scalars['Int']
}

export type AppSettings = {
  __typename?: 'AppSettings'
  id?: Maybe<Scalars['ID']>
  createdOn?: Maybe<Scalars['DateTime']>
  updatedOn?: Maybe<Scalars['DateTime']>
}

/** Status of Contractor Arrival */
export enum ArrivalStatusEnum {
  Upcoming = 'Upcoming',
  Early = 'Early',
  OnTime = 'OnTime',
  Late = 'Late',
}

export type AvailablePermission = {
  __typename?: 'AvailablePermission'
  name: Scalars['String']
  type: Scalars['String']
  privileges: Array<PrivilegeEnum>
  id?: Maybe<Scalars['String']>
}

export type BasicUser = {
  __typename?: 'BasicUser'
  id: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  roles: UserRoleReference
  clients: UserClientRoleReference
}

/** Frequency of Billing Period */
export enum BillingPeriodEnum {
  Monthly = 'Monthly',
  Annual = 'Annual',
}

export type Candidate = {
  __typename?: 'Candidate'
  id?: Maybe<Scalars['String']>
  user: UserReference
  bonus: Scalars['Float']
  estimateTravelTime: Scalars['Int']
}

export type CandidateInput = {
  id?: Maybe<Scalars['String']>
  user: UserReferenceInput
  bonus: Scalars['Float']
  estimateTravelTime: Scalars['Int']
}

export type Client = {
  __typename?: 'Client'
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  loginDomain: Scalars['String']
  addresses: Array<Address>
  phones: Array<Phone>
  uuid?: Maybe<Scalars['String']>
  paymentPlan?: Maybe<PaymentPlanReference>
  website?: Maybe<Scalars['String']>
  roles?: Maybe<ClientRoles>
  createdOn?: Maybe<Scalars['DateTime']>
  updatedOn?: Maybe<Scalars['DateTime']>
}

export type ClientInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  loginDomain: Scalars['String']
  addresses: Array<AddressInput>
  phones: Array<PhoneInput>
  uuid?: Maybe<Scalars['String']>
  paymentPlan?: Maybe<PaymentPlanReferenceInput>
  website?: Maybe<Scalars['String']>
  roles?: Maybe<ClientRolesInput>
}

export type ClientReference = {
  __typename?: 'ClientReference'
  id: Scalars['String']
  name: Scalars['String']
}

export type ClientReferenceInput = {
  id: Scalars['String']
  name: Scalars['String']
}

export type ClientRole = {
  __typename?: 'ClientRole'
  id: Scalars['String']
  role: RoleReference
}

export type ClientRoleInput = {
  id: Scalars['String']
  role: RoleReferenceInput
}

export type ClientRoles = {
  __typename?: 'ClientRoles'
  parentId: Scalars['String']
  roles: Array<ClientRole>
}

export type ClientRolesInput = {
  parentId: Scalars['String']
  roles: Array<ClientRoleInput>
}

export type ClientTableList = {
  __typename?: 'ClientTableList'
  clients: Array<Client>
  totalRows: Scalars['Int']
}

export type Contact = {
  __typename?: 'Contact'
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  phones: Array<Phone>
}

export type ContactInput = {
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  phone: Array<PhoneInput>
}

export type Coordinates = {
  __typename?: 'Coordinates'
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

export type CoordinatesInput = {
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

export type Country = {
  __typename?: 'Country'
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  code: Scalars['String']
  phoneCode: Scalars['String']
}

export type CountryInput = {
  id?: Maybe<Scalars['ID']>
  name: Scalars['String']
  code: Scalars['String']
  phoneCode: Scalars['String']
}

/** Type of Discount */
export enum DiscountTypeEnum {
  Percentage = 'Percentage',
  Fixed = 'Fixed',
}

export type ImageInfoInput = {
  fileName: Scalars['String']
  fileType: Scalars['String']
}

export type LoggedInUser = {
  __typename?: 'LoggedInUser'
  id: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  roles: Array<UserRoleReference>
}

export type LoginResponse = {
  __typename?: 'LoginResponse'
  user: LoggedInUser
  token: Scalars['String']
}

export type Me = {
  __typename?: 'Me'
  id: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  phone: Array<Phone>
  roles: Array<UserRoleReference>
}

export type MeResponse = {
  __typename?: 'MeResponse'
  user: LoggedInUser
}

export type MobileDevice = {
  __typename?: 'MobileDevice'
  deviceId: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  saveAppointment: Appointment
  saveClient: Client
  saveSkill: Skill
  savePaymentPlan: PaymentPlan
  saveRole: Role
  delete: Scalars['Boolean']
  login: LoginResponse
  loginWithBiometrics: LoginResponse
  saveUser: User
  getSignedImageUrls: Array<SignedImageUrl>
}

export type MutationSaveAppointmentArgs = {
  data: AppointmentInput
}

export type MutationSaveClientArgs = {
  data: ClientInput
}

export type MutationSaveSkillArgs = {
  data: SkillInput
}

export type MutationSavePaymentPlanArgs = {
  data: PaymentPlanInput
}

export type MutationSaveRoleArgs = {
  data: RoleInput
}

export type MutationDeleteArgs = {
  id: Scalars['String']
}

export type MutationLoginArgs = {
  email: Scalars['String']
  password: Scalars['String']
  uuid?: Maybe<Scalars['String']>
}

export type MutationLoginWithBiometricsArgs = {
  uuid: Scalars['String']
}

export type MutationSaveUserArgs = {
  data: UserInput
}

export type MutationGetSignedImageUrlsArgs = {
  inspectionId: Scalars['String']
  checklistId?: Maybe<Scalars['String']>
  images: Array<ImageInfoInput>
}

export type PaymentPlan = {
  __typename?: 'PaymentPlan'
  name: Scalars['String']
  minimumUsers: Scalars['Int']
  maximumUsers: Scalars['Int']
  pricePerUser: Scalars['Float']
  onboardingFeePerUser: Scalars['Float']
  billingPeriod: BillingPeriodEnum
  maintenanceFee: Scalars['Float']
  discountAmount: Scalars['Int']
  discountType: DiscountTypeEnum
  id?: Maybe<Scalars['ID']>
  createdOn?: Maybe<Scalars['DateTime']>
  updatedOn?: Maybe<Scalars['DateTime']>
}

export type PaymentPlanInput = {
  name: Scalars['String']
  minimumUsers: Scalars['Int']
  maximumUsers: Scalars['Int']
  pricePerUser: Scalars['Float']
  onboardingFeePerUser: Scalars['Float']
  billingPeriod: BillingPeriodEnum
  maintenanceFee: Scalars['Float']
  discountAmount: Scalars['Int']
  discountType: DiscountTypeEnum
  id?: Maybe<Scalars['ID']>
}

export type PaymentPlanReference = {
  __typename?: 'PaymentPlanReference'
  id: Scalars['String']
  name: Scalars['String']
}

export type PaymentPlanReferenceInput = {
  id: Scalars['String']
  name: Scalars['String']
}

export type PayTableList = {
  __typename?: 'PayTableList'
  paymentPlans: Array<PaymentPlan>
  totalRows: Scalars['Int']
}

export type Permission = {
  __typename?: 'Permission'
  name: Scalars['String']
  type: RoleTypeEnum
  privileges: Array<PrivilegeEnum>
  id?: Maybe<Scalars['ID']>
}

export type PermissionInput = {
  name: Scalars['String']
  type: RoleTypeEnum
  privileges: Array<PrivilegeEnum>
  id?: Maybe<Scalars['ID']>
}

export type Phone = {
  __typename?: 'Phone'
  type: PhoneTypeEnum
  digits: Scalars['String']
  extension?: Maybe<Scalars['String']>
}

export type PhoneInput = {
  type: PhoneTypeEnum
  digits: Scalars['String']
  extension?: Maybe<Scalars['String']>
}

/** Type of Phone Number */
export enum PhoneTypeEnum {
  Home = 'Home',
  Business = 'Business',
  Fax = 'Fax',
  Mobile = 'Mobile',
  Department = 'Department',
  Other = 'Other',
}

/** Different Type of Privileges */
export enum PrivilegeEnum {
  View = 'View',
  Add = 'Add',
  Edit = 'Edit',
  Delete = 'Delete',
  Export = 'Export',
}

export type Query = {
  __typename?: 'Query'
  appointments: AppointmentTableList
  appointmentById: Appointment
  clients: ClientTableList
  clientById: Client
  skills: SkillTableList
  skillById: Skill
  paymentPlans: PayTableList
  paymentPlanById: PaymentPlan
  roles: RoleTableList
  roleById: Role
  rolesByType: Array<Role>
  rolePermissions: Array<AvailablePermission>
  me: MeResponse
  users: UserTableList
  userById: User
  userByRoleType: Array<User>
}

export type QueryAppointmentsArgs = {
  skip: Scalars['Int']
  pageSize: Scalars['Int']
  searchText?: Maybe<Scalars['String']>
}

export type QueryAppointmentByIdArgs = {
  id: Scalars['String']
}

export type QueryClientsArgs = {
  skip: Scalars['Int']
  pageSize: Scalars['Int']
  searchText?: Maybe<Scalars['String']>
}

export type QueryClientByIdArgs = {
  id: Scalars['String']
}

export type QuerySkillsArgs = {
  skip: Scalars['Int']
  pageSize: Scalars['Int']
  searchText?: Maybe<Scalars['String']>
}

export type QuerySkillByIdArgs = {
  id: Scalars['String']
}

export type QueryPaymentPlansArgs = {
  skip: Scalars['Int']
  pageSize: Scalars['Int']
  searchText?: Maybe<Scalars['String']>
}

export type QueryPaymentPlanByIdArgs = {
  id: Scalars['String']
}

export type QueryRolesArgs = {
  skip: Scalars['Int']
  pageSize: Scalars['Int']
  searchText?: Maybe<Scalars['String']>
}

export type QueryRoleByIdArgs = {
  id: Scalars['String']
}

export type QueryRolesByTypeArgs = {
  type: Scalars['String']
}

export type QueryUsersArgs = {
  skip: Scalars['Int']
  pageSize: Scalars['Int']
  searchText?: Maybe<Scalars['String']>
}

export type QueryUserByIdArgs = {
  id: Scalars['String']
}

export type QueryUserByRoleTypeArgs = {
  roleType: Scalars['String']
}

export type Role = {
  __typename?: 'Role'
  name: Scalars['String']
  type: RoleTypeEnum
  scope: RoleScopeEnum
  permissions: Array<Permission>
  id?: Maybe<Scalars['ID']>
  createdOn?: Maybe<Scalars['DateTime']>
  updatedOn?: Maybe<Scalars['DateTime']>
}

export type RoleInput = {
  name: Scalars['String']
  type: RoleTypeEnum
  scope: RoleScopeEnum
  permissions: Array<PermissionInput>
  id?: Maybe<Scalars['ID']>
}

export type RoleReference = {
  __typename?: 'RoleReference'
  id: Scalars['String']
  name: Scalars['String']
  permissions: Array<Scalars['String']>
}

export type RoleReferenceInput = {
  id: Scalars['String']
  name: Scalars['String']
  permissions: Array<Scalars['String']>
}

/** Determines if a Role is Global or Client Specific */
export enum RoleScopeEnum {
  Global = 'Global',
  Client = 'Client',
}

export type RoleTableList = {
  __typename?: 'RoleTableList'
  payload: Array<Role>
  totalRows: Scalars['Int']
}

/** The Basic Types of Roles */
export enum RoleTypeEnum {
  Client = 'Client',
  Corporate = 'Corporate',
  Developer = 'Developer',
}

export type Schedule = {
  __typename?: 'Schedule'
  sunday: Array<TimeRange>
  monday: Array<TimeRange>
  tuesday: Array<TimeRange>
  wednesday: Array<TimeRange>
  thursday: Array<TimeRange>
  friday: Array<TimeRange>
  saturday: Array<TimeRange>
}

export type ScheduleInput = {
  sunday: Array<TimeRangeInput>
  monday: Array<TimeRangeInput>
  tuesday: Array<TimeRangeInput>
  wednesday: Array<TimeRangeInput>
  thursday: Array<TimeRangeInput>
  friday: Array<TimeRangeInput>
  saturday: Array<TimeRangeInput>
}

export type SignedImageUrl = {
  __typename?: 'SignedImageUrl'
  fileName: Scalars['String']
  awsWebUrl: Scalars['String']
  signedUrl: Scalars['String']
  checklistId: Scalars['String']
}

export type Skill = {
  __typename?: 'Skill'
  id?: Maybe<Scalars['ID']>
  skill: Scalars['String']
  description: Scalars['String']
  client?: Maybe<ClientReference>
  global?: Maybe<Scalars['Boolean']>
}

export type SkillInput = {
  id?: Maybe<Scalars['ID']>
  clientId?: Maybe<Scalars['String']>
  global: Scalars['Boolean']
  skill: Scalars['String']
  description: Scalars['String']
}

export type SkillTableList = {
  __typename?: 'SkillTableList'
  skills: Array<Skill>
  totalRows: Scalars['Int']
}

export type TimeRange = {
  __typename?: 'TimeRange'
  start: Scalars['Float']
  startMeridian: Scalars['String']
  end: Scalars['Float']
  endMeridian: Scalars['String']
}

export type TimeRangeInput = {
  start: Scalars['Float']
  startMeridian: Scalars['String']
  end: Scalars['Float']
  endMeridian: Scalars['String']
}

export type User = {
  __typename?: 'User'
  publicId: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  active: Scalars['Boolean']
  roles: Array<UserRoleReference>
  id?: Maybe<Scalars['ID']>
  middleName?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  clients?: Maybe<Array<ClientReference>>
  addresses?: Maybe<Array<Address>>
  phones?: Maybe<Array<Phone>>
  supervisor?: Maybe<UserReference>
  mobileDevices?: Maybe<Array<MobileDevice>>
  schedule: Schedule
  createdOn?: Maybe<Scalars['DateTime']>
  updatedOn?: Maybe<Scalars['DateTime']>
  name: Scalars['String']
}

export type UserClientRoleReference = {
  __typename?: 'UserClientRoleReference'
  id: Scalars['String']
  name: Scalars['String']
  classification: Scalars['String']
  roles: Array<UserRoleReference>
}

export type UserClientRoleReferenceInput = {
  id: Scalars['String']
  name: Scalars['String']
  classification: Scalars['String']
  roles: Array<UserRoleReferenceInput>
}

export type UserInput = {
  publicId: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
  active: Scalars['Boolean']
  roles: Array<UserRoleReferenceInput>
  id?: Maybe<Scalars['ID']>
  middleName?: Maybe<Scalars['String']>
  avatarUrl?: Maybe<Scalars['String']>
  clients?: Maybe<Array<ClientReferenceInput>>
  addresses?: Maybe<Array<AddressInput>>
  phones?: Maybe<Array<PhoneInput>>
  schedule?: Maybe<ScheduleInput>
  createdOn?: Maybe<Scalars['DateTime']>
  updatedOn?: Maybe<Scalars['DateTime']>
}

export type UserReference = {
  __typename?: 'UserReference'
  id: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
}

export type UserReferenceInput = {
  id: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
}

export type UserRoleReference = {
  __typename?: 'UserRoleReference'
  id: Scalars['String']
  name: Scalars['String']
  type: Scalars['String']
  permissions: Array<Permission>
}

export type UserRoleReferenceInput = {
  id: Scalars['String']
  name: Scalars['String']
  type: Scalars['String']
  permissions: Array<PermissionInput>
}

export type UserTableList = {
  __typename?: 'UserTableList'
  users: Array<User>
  totalRows: Scalars['Int']
}
export type LoginMutationVariables = {
  email: Scalars['String']
  password: Scalars['String']
  uuid?: Maybe<Scalars['String']>
}

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'LoginResponse' } & Pick<LoginResponse, 'token'> & {
      user: { __typename?: 'LoggedInUser' } & Pick<
        LoggedInUser,
        'id' | 'firstName' | 'lastName' | 'email'
      > & {
          roles: Array<
            { __typename?: 'UserRoleReference' } & Pick<
              UserRoleReference,
              'name'
            > & {
                permissions: Array<
                  { __typename?: 'Permission' } & Pick<
                    Permission,
                    'name' | 'privileges'
                  >
                >
              }
          >
        }
    }
}

export type LoginWithBiometricsMutationVariables = {
  uuid: Scalars['String']
}

export type LoginWithBiometricsMutation = { __typename?: 'Mutation' } & {
  loginWithBiometrics: { __typename?: 'LoginResponse' } & Pick<
    LoginResponse,
    'token'
  > & {
      user: { __typename?: 'LoggedInUser' } & Pick<
        LoggedInUser,
        'id' | 'firstName' | 'lastName' | 'email'
      > & {
          roles: Array<
            { __typename?: 'UserRoleReference' } & Pick<
              UserRoleReference,
              'name' | 'type'
            > & {
                permissions: Array<
                  { __typename?: 'Permission' } & Pick<
                    Permission,
                    'name' | 'privileges'
                  >
                >
              }
          >
        }
    }
}

export const LoginDocument = gql`
  mutation login($email: String!, $password: String!, $uuid: String) {
    login(email: $email, password: $password, uuid: $uuid) {
      user {
        id
        firstName
        lastName
        email
        roles {
          name
          permissions {
            name
            privileges
          }
        }
      }
      token
    }
  }
`
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginMutationVariables
>

export function useLoginMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  )
}
export const LoginWithBiometricsDocument = gql`
  mutation loginWithBiometrics($uuid: String!) {
    loginWithBiometrics(uuid: $uuid) {
      user {
        id
        firstName
        lastName
        email
        roles {
          name
          type
          permissions {
            name
            privileges
          }
        }
      }
      token
    }
  }
`
export type LoginWithBiometricsMutationFn = ReactApollo.MutationFn<
  LoginWithBiometricsMutation,
  LoginWithBiometricsMutationVariables
>

export function useLoginWithBiometricsMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    LoginWithBiometricsMutation,
    LoginWithBiometricsMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    LoginWithBiometricsMutation,
    LoginWithBiometricsMutationVariables
  >(LoginWithBiometricsDocument, baseOptions)
}
