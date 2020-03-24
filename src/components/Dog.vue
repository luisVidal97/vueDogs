<template>
  <v-card>
                  <!-- si se coloca los dos puntos se convierte en expresion-->
                  <v-img :src="dog.img" height="170px"></v-img>
                    <v-card-title>
                        <div>
                            <h3>
                                {{dog.name}}
                            </h3>
                            <!-- -->
                            <p>{{dog.breed}}</p>
                        </div>
                    </v-card-title>   
              </v-card>
</template>

<script>

export default {
    props: {
        dog: {
            type: Object
        }
    }
}
</script>

<style>

</style>