<template>
  <base-card dark>
    <v-img
      :src="require('@/assets/Lobby/IMG_2561.png')"
      class="grey lighten-2"
      height="800"
      width="100%"
    >
      <v-row
        class="fill-height pa-3"
        align="center"
      >
        <v-col
          cols="12"
          md="7"
          offset-md="5"
        >
          <h1 class="display-3 font-weight-light">
            主標?
          </h1>

          <div class="subheading text-uppercase pl-2 mb-4">
            副標?
          </div>

          <v-btn
            color="primary"
            depressed
          >
            有無需要描述主題按鈕?
          </v-btn>
        </v-col>
      </v-row>
    </v-img>
  </base-card>
</template>

<script>
  export default {
    name: 'HomeBanner',
  }
</script>
