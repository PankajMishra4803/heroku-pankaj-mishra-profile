<template>
  <div class="qualification">
    <v-toolbar color="teal" max-width="250" dark>
      <v-toolbar-title>Qualification</v-toolbar-title>
    </v-toolbar>
    <v-timeline align-top dense="dense">
      <v-timeline-item
        v-for="(qualification, i) in qualifications"
        :key="i"
        color="teal"
        small
      >
        <v-card class="elevation-2">
          <v-card-title class="headline">{{
            qualification.classname
          }}</v-card-title>
          <v-card-text>
            <p>
              <span>CollageName:</span
              ><span>{{ qualification.schoolName }}</span>
            </p>
            <p>
              <span>CGPPercentage:</span
              ><span style="float:;left">{{ qualification.CGP }}</span>
            </p>
            <p>
              <span>YearOfPassing:</span
              ><span style="float:;left">{{
                qualification.yearOfPassing
              }}</span>
            </p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
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
  name: "Qualification",
  data() {
    return {
      fab: false,
      icon: "mdi-apple-keyboard-control",
      qualifications: [
        {
          classname: "M.Tech",
          schoolName: "Birla",
          CGP: "5.5",
          yearOfPassing: "2018",
        },
        {
          classname: "BCA",
          schoolName: "NSHM",
          CGP: "7.0",
          yearOfPassing: "2012",
        },
        {
          classname: "High Seconday",
          schoolName: "Birla",
          CGP: "56%",
          yearOfPassing: "2008",
        },
        {
          classname: "Secondary",
          schoolName: "Birla",
          CGP: "71%",
          yearOfPassing: "2006",
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
