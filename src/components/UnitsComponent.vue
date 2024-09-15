<template>
  <div class="container mt-4">
    <h1 class="mb-3 text-center">Units</h1>
    <div class="table-responsive">
      <table class="table table-striped table-bordered mx-auto">
        <thead>
         <tr>
            <th>Code</th>
             <th>Description</th>

              <th>Credit Points</th>
            <th>Type</th>

          </tr>
        </thead>

        <tbody>
          <tr v-for="unit in units" :key="unit.code">
           <td>{{ unit.code }}</td>

            <td>{{ unit.desc }}</td>
             <td>{{ unit.cp }}</td>
            <td>{{ unit.type }}</td>
          </tr>
          
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
import Units from "../assets/units.json"; 

export default {
  name: "UnitsComponent",

  data() {
    return {

      units: Units 
    };
  }
};
</script>

<style scoped> 

.table-responsive {

  display: flex;

  justify-content: center;
}
</style>
