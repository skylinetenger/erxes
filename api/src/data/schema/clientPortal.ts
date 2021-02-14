export const types = `
  type ClientPortal {
    _id: String!
    name: String!
    description: String
    url: String
    logo: String
    icon: String
    domain: String
    dnsStatus: String
    knowledgeBaseLabel: String
    knowledgeBaseTopicId: String
    ticketLabel: String
    taskPublicBoardId: String
    taskPublicPipelineId: String
    taskLabel: String
    taskStageId: String
    taskPipelineId: String
    taskBoardId: String
    ticketStageId: String
    ticketPipelineId: String
    ticketBoardId: String
    styles: Styles
    advanced: Advanced
    css: String
    mobileResponsive: Boolean
  }

  type Styles {
    bodyColor: String
    headerColor: String
    footerColor: String
    helpColor: String
    backgroundColor: String
    activeTabColor: String
    baseColor: String
    headingColor: String
    linkColor: String
    linkHoverColor: String
    baseFont: String
    headingFont: String
    dividerColor: String
    primaryBtnColor: String
    secondaryBtnColor: String
  }

  type Advanced {
    authAllow: String
    permission: String
    viewTicket: String
  }

  input AdvancedParams {
    authAllow: String
    permission: String
    viewTicket: String
  }

  input StylesParams {
    bodyColor: String
    headerColor: String
    footerColor: String
    helpColor: String
    backgroundColor: String
    activeTabColor: String
    baseColor: String
    headingColor: String
    linkColor: String
    linkHoverColor: String
    dividerColor: String
    primaryBtnColor: String
    secondaryBtnColor: String
    baseFont: String
    headingFont: String
  }
`;

export const queries = `
  getConfigs(page: Int, perPage: Int): [ClientPortal]
  getConfig(_id: String!): ClientPortal
  getClientPortalTotalCount: Int
  getTaskStages(taskPublicPipelineId: String!): JSON
  getTasks(stageId: String!): JSON
  customerTickets(email: String!): JSON
`;

export const mutations = `
  createCustomerTicket(
    stageId: String!
    subject: String!
    description: String
    email: String!
    priority: String
  ): JSON
  createCustomer(
    configId: String!
    firstName: String!
    lastName: String
    email: String!
  ): String
  configUpdateClientPortal(
    _id: String
    name: String
    description: String
    logo: String
    icon: String
    url: String
    domain: String
    knowledgeBaseLabel: String
    knowledgeBaseTopicId: String
    ticketLabel: String
    taskLabel: String
    taskPublicBoardId: String
    taskPublicPipelineId: String
    taskStageId: String
    taskPipelineId: String
    taskBoardId: String
    ticketStageId: String
    ticketPipelineId: String
    ticketBoardId: String
    styles: StylesParams
    advanced: AdvancedParams
    css: String
    mobileResponsive: Boolean
  ): ClientPortal
`;
