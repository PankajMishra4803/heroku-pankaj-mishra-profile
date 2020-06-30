<template>
  <div class="project">
    <v-expansion-panels v-model="panel" multiple focusable>
      <v-expansion-panel v-for="(project, i) in projects" :key="i">
        <v-expansion-panel-header><span style="float-left;width:300px">{{project.projectName}}</span><span style="float-right">{{project.durationOfProject}}</span></v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-timeline dense="dense">
            <v-timeline-item color="teal" small right>
              <v-card>
                <v-card-title class="header-title" >
                  <h4 class="white--text font-weight-light">
                    Project Description:
                  </h4>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="10">
                      {{ project.projectDescription }}
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
            <v-timeline-item color="teal" small right>
              <v-card>
                <v-card-title class="header-title lighten-2">
                  <h4 class="white--text font-weight-light">
                    Project Responsibility:
                  </h4>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="10">
                      {{ project.Responsibility }}
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
            <v-timeline-item color="teal" small right>
              <v-card>
                <v-card-title class="header-title lighten-2">
                  <h4 class="white--text font-weight-light">
                    Domain:
                  </h4>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="10">
                      {{ project.Domain }}
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
            <v-timeline-item color="teal" small right>
              <v-card>
                <v-card-title class="header-title lighten-2">
                  <h4 class="white--text" >
                    Skill Used:
                  </h4>
                </v-card-title>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="10" v-for="(projectSkill, i) in project.skill" :key='i'>
                      <v-badge
                        :content="projectSkill"
                        :value="projectSkill"
                        color="green"
                        style="float:left"
                      >
                      </v-badge>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="teal"
      @click="toTop"
    >
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "Project",
  data() {
    return {
      fab: false,
      icon: "mdi-apple-keyboard-control",
      panel: [0],
      projects: [
        {
          projectName: "Test data management(TDM)",
          durationOfProject:'02/09/2019-20/11/2019',
          projectDescription: `Capital One is a U.S based reputed bank specializing in
                      credit cards, banking and savings product.So, TDM team
                      provis some data to all of the testers and developers in
                      the entire organization and to support our client 's data
                      governance program.TDM(Test data management) one source
                      tool takes that data and does automation work.`,
          Responsibility: "creating module , components in vuejs framework",
          Domain: "BANKING AND FINANCE",
          skill: ["Vuejs",'DotNet WebAPI','C#','Jquery','Postgresql','AWS']
        },
        {
          projectName: "Loan syndication",
          durationOfProject:'01/12/2018-18/07/2019 ',
          projectDescription: "Loan syndication is the process of involving a group of lenders in funding various portions of a loan for a single borrower. Loan syndication most often occurs when a borrower requires an amount too large for a single lender to provide or when the loan is outside the scope of a lender's risk-exposure levels.In this Application will have following functionality:  Capital Market User:- Can perform all functions except adding/editing/delete deals or counter-parties and deleting deal ReadOnly user: Can view all elements, but can not add/edit/delete deal or counter-parties.Can                    download documents Document History: If someone upload a new Commitment Letter or admin details, can they see the history of documents uploaded against that item in the past. Commitment letter: When adding a counter-parties to a deal, need to ability to toggle off the commitment latter as required. Counter parties Record: There are APIs where we can auto-populate counter parties legal name based on the EIN entered",
          Responsibility: "Creating module, component, and service in angular framework. Doing Unit test of angular app using Jasmine framework Doing E2E testing of the application using Protractor and Jasmine framework ",
          Domain: "BANKING AND FINANCE",
          skill: ["Angular 8",'Jasmine framework','Protractor'],
        },
        {
          projectName: "New Market Tax Credit (NMTC)",
          durationOfProject:'01/04/2018-05/03/2019',
          projectDescription: "New Market Tax Credit (NMTC) is an application that handles transaction related to the NMTC. Every transaction consists of legal entities like Borrower, Lender and CDE. Lenders are organization that invest money for the development of a new market where the investment is locked for a period of 7 years. CDE are bank or organizations that handle the money and paperwork related to tracking every transaction that occurs in NMTC. Borrowers are individuals or companies that request for loans in order to begin a new venture in the New Market. Borrowers approach CDE for a loan.Lenders will provide CDE with the money to be invested in new Market .",
          Responsibility: "Addinganewdealandnewlegalentity. Addingcontactsforlegalentities. Providing searchfunctionality fordealsandlegalentities. Tracking ofeveryinformation aboutthetransaction likeLender,BorrowerandtheCDE. Providing aschedule forallthedocumentation thatisrequired foreverydealandprovidingnotifications forwheneachdocumentshouldbesubmitted.",
          Domain: "BANKING AND FINANCE",
          skill: ["Angular 8",'Jasmine framework'],
        },
        {
          projectName: "Client Communication Tool(CCT)",
          durationOfProject:'27/01/2018-16/04/2018 ',
          projectDescription: "Client Communication Tool(CCT) , is a platform to automate the process of communication between Capital-one associates and its customer to get the documents needed for a business process. Client Communication Tool constitutes two independent application and respective integration services which bind data from other system to the application.The initiatives is to provides: --An intranet Portal Platform (CCT UX Intranet) for the wealth manager within the capital one environment to initiate and process a request for document from the HNW customer of Capital-one .The portal provides functionality to send communication with attachment to specific set of customers. --An Internet Portal(CCT UX internet) for the Customer of capital-one one to upload and submit the request document by the capital-one one employee. This will also be used to embed the E-signing document within the user interface. ",
          Responsibility: "I worked in client side using JavaScript and angular js. Somewhat worked in the backed using java  as well.  ",
          Domain: "BANKING AND FINANCE",
         skill: ["AngularJs",'Javascript','Jquery', 'Bootstrap 4'],
        },
        {
          projectName: "Visa Card Eligibility Services(VCES)",
          durationOfProject:"10/08/2017 -17/12/2017",
          projectDescription: 'The Visa Card Eligibility Services(VCES) Phoenix Was developed to validate Cardholders by identifying Visa Card Product type based on full account number. The rules engine of VCES determines eligibility and access rights to merchant promotions. The overall VCES/Phoenix system is shown below.  The development of the Admin UI adding programs, editing was done by an outsourced team directly on database using SQL scripts. The goal of the Admin UI is to allow Visa personnel to Create, edit, duplicate, copy programs and the corresponding rules. The Admin UI also has a user management screen to add, removeandchangetherolesofusers.',
          Responsibility: "development, Support ,Analysis ",
          Domain: "BANKING AND FINANCE",
          skill: ["Jquery",'Javascript','C#', 'Bootstrap 4', 'Dot net MVC 5', 'Dot Net WebAPI', 'Sql Server'],
        },
        {
          projectName: " Clinical Research Board(CRB)",
          durationOfProject:"15/09/2015-15/02/2016 ",
          projectDescription: "Clinical Research Board(CRB) sites are made up from a group of high-profile, academic institutions from around the world that collaborate with clinical scientists from Philips Research and the Business Innovation Unit groups to drive scientificand technological innovation as well as establish clinical relevance for Philips Healthcares products, services and solutions.",
          Responsibility: "creating module , components in vuejs framework",
          Domain: "MANUFACTURING & HIGH TECH",
         skill: ["Jquery",'Javascript','C#', 'Bootstrap 3', 'Dot net MVC 3', 'Sql Server'],
        },
        {
          projectName: "My brand Revitalization ",
          durationOfProject:"31/07/2016-29/03/2017 ",
          projectDescription:"My brand Revitalization is part of Oncology where have many brands (26) and diseases (30).The application is a Sing Page application and has been developed using ASP.NET Web API, Angularjs, and O356 SharePoint etc. This application has two types of users, one is admin and other normal user. Admin user can upload document, creating news, Creating calendar and creating link with respect of brand and exiting diseases and also has permission to update and deleting for same. Normal user can see document, search document, news, Link and calendar for brand and exiting diseases.The application architecture is designed to work across a different range of devices and browsers (IE 11, Chrome v46+), iPad and iPhone Safari Browsers. ",
          Responsibility: "Responsible for development, support, maintenance and implementatio",
          Domain: "HEALTHCARE SERVICES ",
          skill: ["Jquery",'Javascript','C#', 'Bootstrap 3', 'Dot net WEAPI', 'Sql Server', 'Sharepoint', 'Angularjs'],
        },
        {
          projectName: "NVS-GLADSTONE-Project",
          durationOfProject:"28/02/2014-03/03/2015",
          projectDescription: "Digital Marketing Platform of Novartis UK is a SharePoint based platform on which various internet facing brand sites are hosted. All the sites are mobile optimised which have different content and strcture. More than 5 Novartis Designated vendor manage the contenet of all the brand sites from the back end CMS system which has been customised for conetent management of Mobile and Desktop version. The project work involves new site development. existing application enhancement and the ongoingsupportand sustenance. There is a ticketing tool to capture all the issues and it manitain and automate the entire support process with strict SLA.",
          Responsibility: "Responsible for development, support, maintenance and implementation of small to medium non-complex components of a project module.Works on problems of limited scope, through usage of standard programming concepts and principles. Works underhigh supervision/ guidance with frequent review of accomplished objectives.",
          Domain: "HEALTHCARE SERVICES ",
          skill: ["Jquery",'Javascript','C#', 'Dot net', 'Sql Server', 'Sharepoint 2010'],
        },
      ],
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
<style scoped>
.header-title{
 background-color: #A4EBDC;
 padding: 6px !important;
}
</style>