export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AdminProposalTypeScalar: any;
  DateType: any;
};

export type AdminCheckinList = {
  __typename?: 'AdminCheckinList';
  /** @deprecated Field no longer supported */
  checkinUrl?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  createdAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  deletedAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  eventId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  includeInMobile?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  includeInQrScan?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  mainEvent?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  sponsor?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  ticketIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** @deprecated Field no longer supported */
  updatedAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  uuid?: Maybe<Scalars['String']>;
};

export type AdminCollaborator = {
  __typename?: 'adminCollaborator';
  /** @deprecated Field no longer supported */
  createdAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  deletedAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  email?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  eventId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  firstName?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  github?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  lastName?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  public?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  role?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  twitter?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  updatedAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  url?: Maybe<Scalars['String']>;
};

export type AdminProposal = {
  __typename?: 'AdminProposal';
  /** @deprecated Field no longer supported */
  description?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  eventId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  length?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  startDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  tags?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  title?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  youtubeId?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  youtubeUrl?: Maybe<Scalars['String']>;
};

export type AdminSpeaker = {
  __typename?: 'AdminSpeaker';
  /** @deprecated Field no longer supported */
  acceptedProposals?: Maybe<Array<Maybe<AdminProposal>>>;
  /** @deprecated Field no longer supported */
  agreeToCoc?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  allProposals?: Maybe<Array<Maybe<AdminProposal>>>;
  /** @deprecated Field no longer supported */
  avatarUrl?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  bio?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  createdAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  deletedAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  displayOrder?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  email?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  eventId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  github?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  githubConnected?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  githubTempCode?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  inputProposal?: Maybe<Scalars['AdminProposalTypeScalar']>;
  /** @deprecated Field no longer supported */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  pastExperience?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  rejectedProposals?: Maybe<Array<Maybe<AdminProposal>>>;
  /** @deprecated Field no longer supported */
  shortBio?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  status?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  talks?: Maybe<Array<Maybe<Talk>>>;
  /** @deprecated Field no longer supported */
  travelCosts?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  twitter?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  unconfirmedProposals?: Maybe<Array<Maybe<AdminProposal>>>;
  /** @deprecated Field no longer supported */
  updatedAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  uuid?: Maybe<Scalars['String']>;
};

export type AdminTicket = {
  __typename?: 'AdminTicket';
  /** @deprecated Field no longer supported */
  allowPaypal?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  allowStudentDiscount?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  allowTwitterDiscount?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  availableTicketsWebhookTriggeredAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  busy?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  childrenIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** @deprecated Field no longer supported */
  createdAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  customEventEndDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  customEventStartDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  customEventVenueAddress?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  customEventVenueCity?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  customEventVenueCountry?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  customEventVenueLatitude?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  customEventVenueLongitude?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  customEventVenueName?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  customEventVenuePostalCode?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  deletedAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  description?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  displayOrder?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  emailText?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  endDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  eventId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  facebookText?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  geoRestriction?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  githubDiscountsEnabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  iconType?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  includeVat?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  isExclusive?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  isForCustomEvent?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  isSponsor?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  maxPerOrder?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  parents?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** @deprecated Field no longer supported */
  price?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  priceWithVat?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  priceWithoutVat?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  private?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  quantity?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  quantityLeft?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  quantitySold?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  repoUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated Field no longer supported */
  sendToFacebook?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  sendToSubscribersEmails?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  sendToTwitter?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  showDaysLeft?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  showTicketsBeforeStart?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  showTicketsLeft?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  showTicketsPriceBeforeStart?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  showVat?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  soldOut?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  sponsorType?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  startDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  studentDiscountPercentage?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  studentDiscountQuantity?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  thankYouText?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  tweetText?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  twitterDiscountPercentage?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  twitterDiscountQuantity?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  updatedAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  uuid?: Maybe<Scalars['String']>;
};

export type Answer = {
  __typename?: 'Answer';
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  question?: Maybe<Question>;
  /** @deprecated Field no longer supported */
  value?: Maybe<Scalars['String']>;
};

export type Attendee = {
  __typename?: 'Attendee';
  /** @deprecated Field no longer supported */
  answers?: Maybe<Array<Maybe<Answer>>>;
  /** @deprecated Field no longer supported */
  canCheckin?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  email?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  firstName?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  lastName?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  type?: Maybe<Scalars['Int']>;
};

export type CheckedinAttendee = {
  __typename?: 'CheckedinAttendee';
  /** @deprecated Field no longer supported */
  answers?: Maybe<Array<Maybe<Answer>>>;
  /** @deprecated Field no longer supported */
  canCheckin?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  checkinMessage?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  checkins?: Maybe<Array<Maybe<Checkin>>>;
  /** @deprecated Field no longer supported */
  email?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  firstName?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  lastName?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  ref?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  ticket?: Maybe<Ticket>;
  /** @deprecated Field no longer supported */
  type?: Maybe<Scalars['Int']>;
};

export type Checkin = {
  __typename?: 'Checkin';
  /** @deprecated Field no longer supported */
  checkinListId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  createdAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  ticket?: Maybe<Ticket>;
};

export type CheckinList = {
  __typename?: 'CheckinList';
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  mainEvent?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  name?: Maybe<Scalars['String']>;
};

export type Collaborator = {
  __typename?: 'Collaborator';
  /** @deprecated Field no longer supported */
  avatarUrl?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  eventId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  firstName?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  github?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  lastName?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  role?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  twitter?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  url?: Maybe<Scalars['String']>;
};

export type CommentPost = {
  __typename?: 'CommentPost';
  /** @deprecated Field no longer supported */
  createdAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  postId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  proposalId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  text?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  userId?: Maybe<Scalars['Int']>;
};

export type Discount = {
  __typename?: 'Discount';
  /** @deprecated Field no longer supported */
  code?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  contributionId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  contributorTicketId?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  createdAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  deletedAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  description?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  emailDomain?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  endDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  eventId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  maxPerOrder?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  minPerOrder?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  percentage?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  quantity?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  quantityUsed?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  startDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  studentEmail?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  ticketIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** @deprecated Field no longer supported */
  type?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  updatedAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  uuid?: Maybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  /** @deprecated Field no longer supported */
  attendees?: Maybe<Array<Maybe<Attendee>>>;
  /** @deprecated Field no longer supported */
  bgColor?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  cfpEndDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  cfpForceGithub?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  cfpLengthLegend?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  cfpRules?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  cfpStartDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  checkinLists?: Maybe<Array<Maybe<CheckinList>>>;
  /** @deprecated Field no longer supported */
  cocUrl?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  collaborators?: Maybe<Array<Maybe<Collaborator>>>;
  /** @deprecated Field no longer supported */
  copyrightsLegend?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  currencyCode?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  customDomain?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  description?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  endDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  facebookUrl?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  fontColor?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  gettingThereLegend?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  googlePlusUrl?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  groupedSchedule?: Maybe<Array<Maybe<ScheduleDay>>>;
  /** @deprecated Field no longer supported */
  homepageGaId?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  hotelsList?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  invoiceAddress?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  invoiceCompanyName?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  invoiceVatNumber?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  lanyrdUrl?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  me?: Maybe<User>;
  /** @deprecated Field no longer supported */
  mediumUrl?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  offset?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  organizerEmail?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  organizers?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  proposalFixedLength?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  proposalLength?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  questions?: Maybe<Array<Maybe<Question>>>;
  /** @deprecated Field no longer supported */
  schedule?: Maybe<Array<Maybe<Schedule>>>;
  /** @deprecated Field no longer supported */
  scheduleLegend?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  showCompanyVatNumber?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  slug?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  speakers?: Maybe<Array<Maybe<Speaker>>>;
  /** @deprecated Field no longer supported */
  speakersLegend?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  sponsorPdfUrl?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  sponsors?: Maybe<Sponsors>;
  /** @deprecated Field no longer supported */
  startDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  status?: Maybe<Status>;
  /** @deprecated Field no longer supported */
  stripePublishableKey?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  tagLine?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  themeId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  tickets?: Maybe<Array<Maybe<Ticket>>>;
  /** @deprecated Field no longer supported */
  ticketsLegend?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  timezoneId?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  twitterHandle?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  venueAddress?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  venueCity?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  venueCountry?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  venueLatitude?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  venueLongitude?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  venueName?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  venuePostalCode?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  vodBundles?: Maybe<Array<Maybe<VodBundleType>>>;
  /** @deprecated Field no longer supported */
  vodPlaylists?: Maybe<Array<Maybe<VodPlaylistType>>>;
  /** @deprecated Field no longer supported */
  websiteUrl?: Maybe<Scalars['String']>;
};

export type EventAttendeesArgs = {
  q: Scalars['String'];
  uuid: Scalars['String'];
  newContact?: Maybe<Scalars['Boolean']>;
};

export type EventCheckinListsArgs = {
  uuid: Scalars['String'];
};

export type EventGroupedScheduleArgs = {
  tags?: Maybe<Scalars['String']>;
};

export type EventMeArgs = {
  uuid: Scalars['String'];
};

export type EventQuestionsArgs = {
  uuid: Scalars['String'];
};

export type EventScheduleArgs = {
  tags?: Maybe<Scalars['String']>;
};

export type EventStatusArgs = {
  tags?: Maybe<Scalars['String']>;
};

export type Feed = {
  __typename?: 'Feed';
  /** @deprecated Field no longer supported */
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type LikePost = {
  __typename?: 'LikePost';
  /** @deprecated Field no longer supported */
  createdAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  postId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  userId?: Maybe<Scalars['Int']>;
};

export type Message = {
  __typename?: 'Message';
  /** @deprecated Field no longer supported */
  authorId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  createdAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  eventId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  message?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  receiverId?: Maybe<Scalars['Int']>;
};

export type Post = {
  __typename?: 'Post';
  /** @deprecated Field no longer supported */
  comments?: Maybe<Array<Maybe<CommentPost>>>;
  /** @deprecated Field no longer supported */
  createdAt?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  likes?: Maybe<Array<Maybe<LikePost>>>;
  /** @deprecated Field no longer supported */
  text?: Maybe<Scalars['String']>;
};

export type Proposal = {
  __typename?: 'Proposal';
  /** @deprecated Field no longer supported */
  description?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  eventId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  length?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  speakers?: Maybe<Array<Maybe<Speaker>>>;
  /** @deprecated Field no longer supported */
  startDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  tags?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  title?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  youtubeId?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  youtubeUrl?: Maybe<Scalars['String']>;
};

export type Question = {
  __typename?: 'Question';
  /** @deprecated Field no longer supported */
  description?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  options?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  public?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  required?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  ticketIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** @deprecated Field no longer supported */
  tickets?: Maybe<Array<Maybe<AdminTicket>>>;
  /** @deprecated Field no longer supported */
  title?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  type?: Maybe<Scalars['Int']>;
};

export type RootMutation = {
  __typename?: 'RootMutation';
  /** @deprecated Field no longer supported */
  commentPost?: Maybe<Post>;
  /** @deprecated Field no longer supported */
  commentProposal?: Maybe<Proposal>;
  /** @deprecated Field no longer supported */
  createCheckin?: Maybe<CheckedinAttendee>;
  /** @deprecated Field no longer supported */
  createCheckinlist?: Maybe<AdminCheckinList>;
  /** @deprecated Field no longer supported */
  createCollaborator?: Maybe<AdminCollaborator>;
  /** @deprecated Field no longer supported */
  createDiscount?: Maybe<Discount>;
  /** @deprecated Field no longer supported */
  createEvent?: Maybe<Event>;
  /** @deprecated Field no longer supported */
  createPost?: Maybe<Post>;
  /** @deprecated Field no longer supported */
  createQuestion?: Maybe<Question>;
  /** @deprecated Field no longer supported */
  createSpeaker?: Maybe<AdminSpeaker>;
  /** @deprecated Field no longer supported */
  createTicket?: Maybe<AdminTicket>;
  /** @deprecated Field no longer supported */
  deleteCollaborator?: Maybe<AdminCollaborator>;
  /** @deprecated Field no longer supported */
  likePost?: Maybe<CommentPost>;
  /** @deprecated Field no longer supported */
  sendMessage?: Maybe<Message>;
  /** @deprecated Field no longer supported */
  signin?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  updateAttendee?: Maybe<User>;
  /** @deprecated Field no longer supported */
  updateCollaborator?: Maybe<AdminCollaborator>;
  /** @deprecated Field no longer supported */
  updateDiscount?: Maybe<Discount>;
  /** @deprecated Field no longer supported */
  updateEvent?: Maybe<Event>;
  /** @deprecated Field no longer supported */
  updateQuestion?: Maybe<Question>;
  /** @deprecated Field no longer supported */
  updateSpeaker?: Maybe<AdminSpeaker>;
  /** @deprecated Field no longer supported */
  updateTicket?: Maybe<AdminTicket>;
  /** @deprecated Field no longer supported */
  voteProposal?: Maybe<Proposal>;
};

export type RootMutationCommentPostArgs = {
  text: Scalars['String'];
  uuid: Scalars['String'];
  postId?: Maybe<Scalars['Int']>;
};

export type RootMutationCommentProposalArgs = {
  uuid: Scalars['String'];
  comment: Scalars['String'];
  proposalId: Scalars['Int'];
};

export type RootMutationCreateCheckinArgs = {
  uuid: Scalars['String'];
  ref?: Maybe<Scalars['String']>;
  checkinListId?: Maybe<Scalars['Int']>;
};

export type RootMutationCreateCheckinlistArgs = {
  name: Scalars['String'];
  mainEvent?: Maybe<Scalars['Boolean']>;
  ticketIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  eventId: Scalars['Int'];
  sponsor?: Maybe<Scalars['Boolean']>;
  includeInMobile?: Maybe<Scalars['Boolean']>;
  includeInQrScan?: Maybe<Scalars['Boolean']>;
  token: Scalars['String'];
};

export type RootMutationCreateCollaboratorArgs = {
  public?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateType']>;
  token: Scalars['String'];
  eventId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateType']>;
  updatedAt?: Maybe<Scalars['DateType']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type RootMutationCreateDiscountArgs = {
  minPerOrder?: Maybe<Scalars['Int']>;
  studentEmail?: Maybe<Scalars['String']>;
  eventId: Scalars['Int'];
  name: Scalars['String'];
  endDate: Scalars['DateType'];
  description?: Maybe<Scalars['String']>;
  percentage: Scalars['Int'];
  emailDomain?: Maybe<Scalars['String']>;
  contributionId?: Maybe<Scalars['Int']>;
  startDate: Scalars['DateType'];
  quantity: Scalars['Int'];
  maxPerOrder: Scalars['Int'];
  ticketIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  token: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  contributorTicketId?: Maybe<Scalars['String']>;
};

export type RootMutationCreateEventArgs = {
  currencyCode?: Maybe<Scalars['String']>;
  venueAddress?: Maybe<Scalars['String']>;
  venueCountry?: Maybe<Scalars['String']>;
  venueLatitude?: Maybe<Scalars['String']>;
  venuePostalCode?: Maybe<Scalars['String']>;
  venueLongitude?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateType']>;
  endDate?: Maybe<Scalars['DateType']>;
  venueName?: Maybe<Scalars['String']>;
  venueCity?: Maybe<Scalars['String']>;
};

export type RootMutationCreatePostArgs = {
  text: Scalars['String'];
  proposalId?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
};

export type RootMutationCreateQuestionArgs = {
  required?: Maybe<Scalars['Boolean']>;
  options?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  eventId: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  public?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['Int']>;
  ticketIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type RootMutationCreateSpeakerArgs = {
  name: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  agreeToCoc?: Maybe<Scalars['Boolean']>;
  eventId: Scalars['Int'];
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  githubTempCode?: Maybe<Scalars['String']>;
  travelCosts?: Maybe<Scalars['Boolean']>;
  token: Scalars['String'];
  public?: Maybe<Scalars['Boolean']>;
  inputProposal?: Maybe<Scalars['AdminProposalTypeScalar']>;
  displayOrder?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  pastExperience?: Maybe<Scalars['String']>;
  githubConnected?: Maybe<Scalars['Boolean']>;
};

export type RootMutationCreateTicketArgs = {
  allowTwitterDiscount?: Maybe<Scalars['Boolean']>;
  customEventStartDate?: Maybe<Scalars['DateType']>;
  customEventEndDate?: Maybe<Scalars['DateType']>;
  sendToTwitter?: Maybe<Scalars['Boolean']>;
  isSponsor?: Maybe<Scalars['Boolean']>;
  tweetText?: Maybe<Scalars['String']>;
  geoRestriction?: Maybe<Scalars['String']>;
  showTicketsLeft?: Maybe<Scalars['Boolean']>;
  facebookText?: Maybe<Scalars['String']>;
  customEventVenueName?: Maybe<Scalars['String']>;
  parents?: Maybe<Array<Maybe<Scalars['Int']>>>;
  busy?: Maybe<Scalars['Boolean']>;
  includeVat?: Maybe<Scalars['Boolean']>;
  isExclusive?: Maybe<Scalars['Boolean']>;
  quantityLeft?: Maybe<Scalars['Int']>;
  sendToFacebook?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Int']>;
  priceWithVat?: Maybe<Scalars['Int']>;
  sponsorType?: Maybe<Scalars['Int']>;
  twitterDiscountPercentage?: Maybe<Scalars['Int']>;
  eventId: Scalars['Int'];
  name: Scalars['String'];
  allowStudentDiscount?: Maybe<Scalars['Boolean']>;
  customEventVenueAddress?: Maybe<Scalars['String']>;
  customEventVenueLongitude?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  maxPerOrder?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateType']>;
  customEventVenueCity?: Maybe<Scalars['String']>;
  childrenIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  studentDiscountQuantity?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['String']>;
  soldOut?: Maybe<Scalars['Boolean']>;
  sendToSubscribersEmails?: Maybe<Scalars['Boolean']>;
  repoUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
  studentDiscountPercentage?: Maybe<Scalars['Int']>;
  twitterDiscountQuantity?: Maybe<Scalars['Int']>;
  githubDiscountsEnabled?: Maybe<Scalars['Boolean']>;
  customEventVenueCountry?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateType']>;
  quantity?: Maybe<Scalars['Int']>;
  showTicketsBeforeStart?: Maybe<Scalars['Boolean']>;
  showTicketsPriceBeforeStart?: Maybe<Scalars['Boolean']>;
  displayOrder?: Maybe<Scalars['Int']>;
  customEventVenueLatitude?: Maybe<Scalars['String']>;
  availableTicketsWebhookTriggeredAt?: Maybe<Scalars['DateType']>;
  priceWithoutVat?: Maybe<Scalars['Int']>;
  private?: Maybe<Scalars['Boolean']>;
  iconType?: Maybe<Scalars['Int']>;
  showVat?: Maybe<Scalars['Boolean']>;
  thankYouText?: Maybe<Scalars['String']>;
  showDaysLeft?: Maybe<Scalars['Boolean']>;
  emailText?: Maybe<Scalars['String']>;
  isForCustomEvent?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['DateType']>;
  endDate?: Maybe<Scalars['DateType']>;
  description?: Maybe<Scalars['String']>;
  customEventVenuePostalCode?: Maybe<Scalars['String']>;
  allowPaypal?: Maybe<Scalars['Boolean']>;
  quantitySold?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateType']>;
};

export type RootMutationDeleteCollaboratorArgs = {
  token: Scalars['String'];
  id: Scalars['Int'];
};

export type RootMutationLikePostArgs = {
  postId?: Maybe<Scalars['Int']>;
  uuid: Scalars['String'];
};

export type RootMutationSendMessageArgs = {
  message: Scalars['String'];
  receiverId: Scalars['Int'];
  uuid: Scalars['String'];
};

export type RootMutationSigninArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RootMutationUpdateAttendeeArgs = {
  shareInfo?: Maybe<Scalars['Boolean']>;
  uuid: Scalars['String'];
  FCMToken?: Maybe<Scalars['String']>;
  expoPushToken?: Maybe<Scalars['String']>;
};

export type RootMutationUpdateCollaboratorArgs = {
  email?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateType']>;
  updatedAt?: Maybe<Scalars['DateType']>;
  lastName?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['DateType']>;
  firstName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  id: Scalars['Int'];
};

export type RootMutationUpdateDiscountArgs = {
  contributorTicketId?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  emailDomain?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  minPerOrder?: Maybe<Scalars['Int']>;
  studentEmail?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateType']>;
  endDate?: Maybe<Scalars['DateType']>;
  maxPerOrder?: Maybe<Scalars['Int']>;
  contributionId?: Maybe<Scalars['Int']>;
  ticketIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  eventId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  percentage?: Maybe<Scalars['Int']>;
};

export type RootMutationUpdateEventArgs = {
  venueCity?: Maybe<Scalars['String']>;
  venuePostalCode?: Maybe<Scalars['String']>;
  venueLatitude?: Maybe<Scalars['String']>;
  facebookUrl?: Maybe<Scalars['String']>;
  cfpRules?: Maybe<Scalars['String']>;
  cfpStartDate?: Maybe<Scalars['DateType']>;
  tagLine?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  showCompanyVatNumber?: Maybe<Scalars['Boolean']>;
  twitterHandle?: Maybe<Scalars['String']>;
  fontColor?: Maybe<Scalars['String']>;
  customDomain?: Maybe<Scalars['String']>;
  cfpLengthLegend?: Maybe<Scalars['String']>;
  themeId?: Maybe<Scalars['Int']>;
  venueAddress?: Maybe<Scalars['String']>;
  cocUrl?: Maybe<Scalars['String']>;
  googlePlusUrl?: Maybe<Scalars['String']>;
  organizers?: Maybe<Scalars['String']>;
  organizerEmail?: Maybe<Scalars['String']>;
  gettingThereLegend?: Maybe<Scalars['String']>;
  hotelsList?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
  copyrightsLegend?: Maybe<Scalars['String']>;
  invoiceCompanyName?: Maybe<Scalars['String']>;
  cfpEndDate?: Maybe<Scalars['DateType']>;
  id: Scalars['Int'];
  venueCountry?: Maybe<Scalars['String']>;
  lanyrdUrl?: Maybe<Scalars['String']>;
  speakersLegend?: Maybe<Scalars['String']>;
  cfpForceGithub?: Maybe<Scalars['Boolean']>;
  endDate?: Maybe<Scalars['DateType']>;
  timezoneId?: Maybe<Scalars['String']>;
  homepageGaId?: Maybe<Scalars['String']>;
  invoiceVatNumber?: Maybe<Scalars['String']>;
  proposalLength?: Maybe<Scalars['Int']>;
  sponsorPdfUrl?: Maybe<Scalars['String']>;
  mediumUrl?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  scheduleLegend?: Maybe<Scalars['String']>;
  venueLongitude?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  ticketsLegend?: Maybe<Scalars['String']>;
  invoiceAddress?: Maybe<Scalars['String']>;
  proposalFixedLength?: Maybe<Scalars['Boolean']>;
  venueName?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateType']>;
};

export type RootMutationUpdateQuestionArgs = {
  description?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['String']>;
  ticketIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  token: Scalars['String'];
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['Boolean']>;
  public?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['Int']>;
};

export type RootMutationUpdateSpeakerArgs = {
  name: Scalars['String'];
  travelCosts?: Maybe<Scalars['Boolean']>;
  agreeToCoc?: Maybe<Scalars['Boolean']>;
  githubConnected?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Int']>;
  token: Scalars['String'];
  twitter?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  githubTempCode?: Maybe<Scalars['String']>;
  displayOrder?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  url?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  inputProposal?: Maybe<Scalars['AdminProposalTypeScalar']>;
  public?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  pastExperience?: Maybe<Scalars['String']>;
};

export type RootMutationUpdateTicketArgs = {
  allowTwitterDiscount?: Maybe<Scalars['Boolean']>;
  customEventEndDate?: Maybe<Scalars['DateType']>;
  iconType?: Maybe<Scalars['Int']>;
  twitterDiscountQuantity?: Maybe<Scalars['Int']>;
  emailText?: Maybe<Scalars['String']>;
  isForCustomEvent?: Maybe<Scalars['Boolean']>;
  twitterDiscountPercentage?: Maybe<Scalars['Int']>;
  sendToSubscribersEmails?: Maybe<Scalars['Boolean']>;
  quantityLeft?: Maybe<Scalars['Int']>;
  showDaysLeft?: Maybe<Scalars['Boolean']>;
  sendToFacebook?: Maybe<Scalars['Boolean']>;
  customEventVenueAddress?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  priceWithoutVat?: Maybe<Scalars['Int']>;
  soldOut?: Maybe<Scalars['Boolean']>;
  customEventVenueLatitude?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  studentDiscountQuantity?: Maybe<Scalars['Int']>;
  childrenIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id: Scalars['Int'];
  deletedAt?: Maybe<Scalars['DateType']>;
  startDate?: Maybe<Scalars['DateType']>;
  includeVat?: Maybe<Scalars['Boolean']>;
  tweetText?: Maybe<Scalars['String']>;
  isSponsor?: Maybe<Scalars['Boolean']>;
  isExclusive?: Maybe<Scalars['Boolean']>;
  uuid?: Maybe<Scalars['String']>;
  customEventVenueCity?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  showVat?: Maybe<Scalars['Boolean']>;
  customEventStartDate?: Maybe<Scalars['DateType']>;
  customEventVenueLongitude?: Maybe<Scalars['String']>;
  availableTicketsWebhookTriggeredAt?: Maybe<Scalars['DateType']>;
  token: Scalars['String'];
  sponsorType?: Maybe<Scalars['Int']>;
  displayOrder?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateType']>;
  customEventVenuePostalCode?: Maybe<Scalars['String']>;
  sendToTwitter?: Maybe<Scalars['Boolean']>;
  showTicketsLeft?: Maybe<Scalars['Boolean']>;
  thankYouText?: Maybe<Scalars['String']>;
  allowStudentDiscount?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateType']>;
  endDate?: Maybe<Scalars['DateType']>;
  customEventVenueCountry?: Maybe<Scalars['String']>;
  busy?: Maybe<Scalars['Boolean']>;
  private?: Maybe<Scalars['Boolean']>;
  showTicketsPriceBeforeStart?: Maybe<Scalars['Boolean']>;
  studentDiscountPercentage?: Maybe<Scalars['Int']>;
  parents?: Maybe<Array<Maybe<Scalars['Int']>>>;
  allowPaypal?: Maybe<Scalars['Boolean']>;
  priceWithVat?: Maybe<Scalars['Int']>;
  maxPerOrder?: Maybe<Scalars['Int']>;
  showTicketsBeforeStart?: Maybe<Scalars['Boolean']>;
  repoUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
  quantitySold?: Maybe<Scalars['Int']>;
  githubDiscountsEnabled?: Maybe<Scalars['Boolean']>;
  facebookText?: Maybe<Scalars['String']>;
  geoRestriction?: Maybe<Scalars['String']>;
  customEventVenueName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type RootMutationVoteProposalArgs = {
  uuid: Scalars['String'];
  vote: Scalars['Int'];
  proposalId: Scalars['Int'];
};

export type RootQuery = {
  __typename?: 'RootQuery';
  /** @deprecated Field no longer supported */
  adminEvents?: Maybe<Event>;
  /** @deprecated Field no longer supported */
  events?: Maybe<Array<Maybe<Event>>>;
  /** @deprecated Field no longer supported */
  vod?: Maybe<VodType>;
};

export type RootQueryAdminEventsArgs = {
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
};

export type RootQueryEventsArgs = {
  slug?: Maybe<Scalars['String']>;
};

export type RootSubscription = {
  __typename?: 'RootSubscription';
  /** @deprecated Field no longer supported */
  feed?: Maybe<Feed>;
};

export type Schedule = {
  __typename?: 'Schedule';
  /** @deprecated Field no longer supported */
  description?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  eventId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  imageUrl?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  keynote?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  length?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  likes?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  room?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  speakers?: Maybe<Array<Maybe<Speaker>>>;
  /** @deprecated Field no longer supported */
  startDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  tags?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  talk?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  time?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  title?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  type?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  youtubeId?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  youtubeUrl?: Maybe<Scalars['String']>;
};

export type ScheduleDay = {
  __typename?: 'ScheduleDay';
  /** @deprecated Field no longer supported */
  date?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  slots?: Maybe<Array<Maybe<Schedule>>>;
  /** @deprecated Field no longer supported */
  title?: Maybe<Scalars['String']>;
};

export type Speaker = {
  __typename?: 'Speaker';
  /** @deprecated Field no longer supported */
  avatarUrl?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  bio?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  eventId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  github?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  shortBio?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  talks?: Maybe<Array<Maybe<Talk>>>;
  /** @deprecated Field no longer supported */
  twitter?: Maybe<Scalars['String']>;
};

export type Sponsor = {
  __typename?: 'Sponsor';
  /** @deprecated Field no longer supported */
  description?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  jobUrl?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  logoUrl?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  url?: Maybe<Scalars['String']>;
};

export type Sponsors = {
  __typename?: 'Sponsors';
  /** @deprecated Field no longer supported */
  basic?: Maybe<Array<Maybe<Sponsor>>>;
  /** @deprecated Field no longer supported */
  bronze?: Maybe<Array<Maybe<Sponsor>>>;
  /** @deprecated Field no longer supported */
  diamond?: Maybe<Array<Maybe<Sponsor>>>;
  /** @deprecated Field no longer supported */
  gold?: Maybe<Array<Maybe<Sponsor>>>;
  /** @deprecated Field no longer supported */
  partner?: Maybe<Array<Maybe<Sponsor>>>;
  /** @deprecated Field no longer supported */
  platinum?: Maybe<Array<Maybe<Sponsor>>>;
  /** @deprecated Field no longer supported */
  silver?: Maybe<Array<Maybe<Sponsor>>>;
};

export type Status = {
  __typename?: 'Status';
  /** @deprecated Field no longer supported */
  hasEnded?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  hasStarted?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  nextFiveScheduledItems?: Maybe<Array<Maybe<Proposal>>>;
  /** @deprecated Field no longer supported */
  onGoing?: Maybe<Scalars['Boolean']>;
};

export type Talk = {
  __typename?: 'Talk';
  /** @deprecated Field no longer supported */
  description?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  eventId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  length?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  startDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  title?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  type?: Maybe<Scalars['Int']>;
};

export type Ticket = {
  __typename?: 'Ticket';
  /** @deprecated Field no longer supported */
  allowStudentDiscount?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  allowTwitterDiscount?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  busy?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  childrenIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** @deprecated Field no longer supported */
  customEventEndDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  customEventStartDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  customEventVenueAddress?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  customEventVenueCity?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  customEventVenueCountry?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  customEventVenueLatitude?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  customEventVenueLongitude?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  customEventVenueName?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  customEventVenuePostalCode?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  description?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  displayOrder?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  endDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  eventId?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  geoRestriction?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  githubDiscountsEnabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  iconType?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  includeVat?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  isExclusive?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  isForCustomEvent?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  isSponsor?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  maxPerOrder?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  name?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  parents?: Maybe<Array<Maybe<Scalars['Int']>>>;
  /** @deprecated Field no longer supported */
  price?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  priceWithVat?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  priceWithoutVat?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  private?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  quantity?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  quantityLeft?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  quantitySold?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  repoUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated Field no longer supported */
  showDaysLeft?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  showTicketsBeforeStart?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  showTicketsLeft?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  showTicketsPriceBeforeStart?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  showVat?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  soldOut?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  sponsorType?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  startDate?: Maybe<Scalars['DateType']>;
  /** @deprecated Field no longer supported */
  studentDiscountPercentage?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  studentDiscountQuantity?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  twitterDiscountPercentage?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  twitterDiscountQuantity?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  /** @deprecated Field no longer supported */
  answers?: Maybe<Array<Maybe<Answer>>>;
  /** @deprecated Field no longer supported */
  canCheckin?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  checkinLists?: Maybe<Array<Maybe<CheckinList>>>;
  /** @deprecated Field no longer supported */
  conversation?: Maybe<Array<Maybe<Message>>>;
  /** @deprecated Field no longer supported */
  conversations?: Maybe<Array<Maybe<Message>>>;
  /** @deprecated Field no longer supported */
  email?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  firstName?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  lastName?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  mobileMessage?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  ref?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  shareInfo?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  staffCheckinLists?: Maybe<Array<Maybe<CheckinList>>>;
  /** @deprecated Field no longer supported */
  type?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  uuid?: Maybe<Scalars['String']>;
};

export type UserConversationArgs = {
  contactId?: Maybe<Scalars['Int']>;
};

export type VideoType = {
  __typename?: 'VideoType';
  /** @deprecated Field no longer supported */
  description?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  displayOrder?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  length?: Maybe<Scalars['Float']>;
  /** @deprecated Field no longer supported */
  slug?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  thumbnailURL?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  title?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  url?: Maybe<Scalars['String']>;
};

export type VodBundleType = {
  __typename?: 'VODBundleType';
  /** @deprecated Field no longer supported */
  coverURL?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  description?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  displayPrice?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  playlists?: Maybe<Array<Maybe<VodPlaylistType>>>;
  /** @deprecated Field no longer supported */
  slug?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  title?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  vodItemType?: Maybe<Scalars['String']>;
};

export type VodMeType = {
  __typename?: 'VODMeType';
  /** @deprecated Field no longer supported */
  bundles?: Maybe<Array<Maybe<VodBundleType>>>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  playlists?: Maybe<Array<Maybe<VodPlaylistType>>>;
};

export type VodPlaylistType = {
  __typename?: 'VODPlaylistType';
  /** @deprecated Field no longer supported */
  allVideos?: Maybe<Array<Maybe<VideoType>>>;
  /** @deprecated Field no longer supported */
  coverURL?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  description?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  displayPrice?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  id?: Maybe<Scalars['Int']>;
  /** @deprecated Field no longer supported */
  onSale?: Maybe<Scalars['Boolean']>;
  /** @deprecated Field no longer supported */
  slug?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  title?: Maybe<Scalars['String']>;
  /** @deprecated Field no longer supported */
  videos?: Maybe<Array<Maybe<VideoType>>>;
  /** @deprecated Field no longer supported */
  vodItemType?: Maybe<Scalars['String']>;
};

export type VodType = {
  __typename?: 'VODType';
  /** @deprecated Field no longer supported */
  me?: Maybe<VodMeType>;
};
