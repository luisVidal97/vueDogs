<template>
  <v-container grid-list-md fluid>
      <v-row>
          <v-col xs="12" md="3" sm="4" v-for=" pet in dogs" :key="pet.breed">
              <app-dog :dog="pet"></app-dog>
          </v-col>
      </v-row>

  </v-container>
</template>

<script>
import { Dogs }  from '../config/dog';
import  Dog  from '../components/Dog';

export default {
    components:{
        appDog: Dog
    },
    data(){
        return{
            dogs: Dogs
        }
    }
}
</script>

<style>

</style>