<template>
  <div id="app">
    <md-table  v-if="foundData" v-model="collegeData" md-sort="name" md-card>
      <md-table-toolbar>Schools in NYC</md-table-toolbar>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="School Name" md-sort-by="school_name">{{ item["school_name"] }}</md-table-cell>
        <md-table-cell md-label="School State" >{{ item["school_state"] }}</md-table-cell>
        <md-table-cell md-label="Id" >{{ item["id"] }}</md-table-cell>
        <md-table-cell md-label="Class Size" md-sort-by="latest_student_size">{{ item["latest_student_size"] }}</md-table-cell>
        <md-table-cell md-label="Admissions Rate" md-sort-by="latest_admissions_admission_rate_overall">{{ item["latest_admissions_admission_rate_overall"] }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      collegeData: {},
      foundData: false,
    }
  },
  mounted() {
    this.getCollegeData();
  },
  methods: {
    getCollegeData() {
        axios
        .create({ baseURL: `http://localhost:8081` })
        .get('collegeData')
        .then((res) => {
          this.collegeData = res.data[0].results
          this.foundData = true;
        })
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
