<template>
  <div id="app">
    <md-table  v-if="foundData" v-model="searched" md-sort="name" md-card>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Schools in Nyc</h1>
        </div>
        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchTable" />
        </md-field>
      </md-table-toolbar>
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

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => item.school_name.toString().toLowerCase().includes(term.toLowerCase()))
    }
    return items
  }
export default {
  name: 'app',
  data() {
    return {
      search: null,
      searched: [],
      collegeData: [],
      foundData: false,
    }
  },
  mounted(){
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
          this.searched = this.collegeData
        })
    },
    searchTable() {
      this.searched = searchByName(this.collegeData, this.search)
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
.md-field {
  max-width: 300px;
  float: right;
}
</style>
