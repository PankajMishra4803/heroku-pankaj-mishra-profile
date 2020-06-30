<template>
  <div class="home">
    <v-toolbar color="teal" max-width="250" dark>
      <v-toolbar-title>EXPERIENCE SUMMARY</v-toolbar-title>
    </v-toolbar>
    <v-card flat>
      <v-card-text>
        <p class="experience-summary">
          Having 7.7 years of experience in IT/Software development. Good
          exposure to work on Agile Development Methodology. Experience in all
          phases of software development life cycle. Good Experience in C#,
          ASP.Net, MVC3/MVC5, TFS (Team foundation Server) tool, LINQ, SQL
          Server 2008/2014, Java Script, jQuery, HTML 4/5, CSS 2/3, Ajax,
          AngularJs, Angular 7, jasmine framework, Protractor framework,Vuejs
          Framework, Bootstrap UI Framework, SharePoint 2010/2013/ O365, good
          experience with Entity framework technology. I am quick learner and
          dedicated and highly ambitious to achieve organization as well as
          personal goal.
        </p>
      </v-card-text>
    </v-card>
    <v-toolbar color="teal" max-width="250" dark>
      <v-toolbar-title>SKILL EXPERIENCE</v-toolbar-title>
    </v-toolbar>
    <v-card flat>
      <div class="text-center" style="float:left">
        <p class="font-weight-black webSkill">Web technology</p>
        <v-list-item
          v-for="skill in webSkillBrs"
          :key="skill.title"
          class="white--text"
          style="float:left"
        >
          <v-list-item-content>
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="skill.value"
              :color="skill.color"
            >
              {{ skill.value }}
            </v-progress-circular>
            <v-list-item-title>{{ skill.skillName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
      <div class="text-center" style="float:left">
        <p class="font-weight-black webSkill">Web Framework</p>
        <v-list-item
          v-for="framework in WebFramework"
          :key="framework.frameworkName"
          class="white--text"
          style="float:left"
        >
          <v-list-item-content>
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="framework.value"
              :color="framework.color"
            >
              {{ framework.value }}
            </v-progress-circular>
            <v-list-item-title>{{ framework.frameworkName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
      <div class="text-center" style="float:left">
        <p class="font-weight-black webSkill">Backend Framework</p>
        <v-list-item
          v-for="framework in backendFramework"
          :key="framework.frameworkName"
          class="white--text"
          style="float:left"
        >
          <v-list-item-content>
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="framework.value"
              :color="framework.color"
            >
              {{ framework.value }}
            </v-progress-circular>
            <v-list-item-title>{{ framework.frameworkName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
      <div class="text-center" style="float:left">
        <v-toolbar color="teal" max-width="250" dark>
          <v-toolbar-title>DOMAIN SUMMARY</v-toolbar-title>
        </v-toolbar>
        <v-card flat>
          <v-card-text>
            <div>
              <p class="domain-summary" style="float:left;width:400px">
                HEALTHCARE SERVICES
              </p>
              <span style="float:right">3Year(s) 5Month(s) </span>
            </div>
            <div>
              <p class="domain-summary" style="float:left;width:400px">
                MANUFACTURING
              </p>
              <span style="float:right">1Year 6Month(s)</span>
            </div>
            <div>
              <p class="domain-summary" style="float:left;width:400px">
                BANKING AND FINANCE
              </p>
              <span style="float:right">2Year(s) 6Month(s)</span>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </v-card>
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
  name: "Home",
  data() {
    return {
      fab: false,
      icon: "mdi-apple-keyboard-control",
      webSkillBrs: [
        { skillName: "Html4/5", value: 75, color: "success" },
        { skillName: "CSS", value: 70, color: "success" },
        { skillName: "JavaScript", value: 80, color: "success" },
        { skillName: "Jquery", value: 80, color: "success" },
      ],
      WebFramework: [
        { frameworkName: "Angular8", value: 70, color: "success" },
        { frameworkName: "ReactJs", value: 45, color: "red" },
        { frameworkName: "VueJs", value: 70, color: "success" },
        { frameworkName: "Vuetify", value: 65, color: "warning" },
      ],
      backendFramework: [
        { frameworkName: "DotNet", value: 60, color: "success" },
        { frameworkName: "NodeJs", value: 55, color: "warning" },
        { frameworkName: "C#", value: 50, color: "warning" },
        { frameworkName: "SQL", value: 55, color: "warning" },
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
.experience-summary {
  font-family: cursive !important;
  font-size: 17px !important;
  margin-left: 51px;
}
.domain-summary {
  font-family: cursive !important;
  font-size: 17px !important;
  margin-left: 61px;
}
.v-progress-circular {
  margin: 1rem;
}
.webSkill {
  float: left;
  margin-left: 76px;
  margin-top: 13px;
}
</style>
