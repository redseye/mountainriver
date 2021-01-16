<template>
  <v-container id="subscribe" tag="section">
    <base-card color="rgba(203, 170, 92, 0.51)" class="pa-3">
      <v-container>
        <v-row>
          <v-col cols="12" md="5">
            <base-subheading class="mb-3"> 聯絡我們 </base-subheading>

            <p>看有沒有想要講什麼東西</p>

            <v-row class="pa-2">
              <v-col cols="9">
                <base-btn
                  v-for="(item, i) in items"
                  :key="i"
                  :href="item.href"
                  class="ml-0 mr-3"
                  color="primary"
                  square
                  target="_blank"
                >
                  <v-icon v-text="item.icon" />
                </base-btn>
              </v-col>

              <v-spacer />
            </v-row>
          </v-col>

          <v-col cols="12" md="6" offset-md="1">
            <base-subheading>Contact</base-subheading>

            <v-list class="transparent">
              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon class="elevation-4" dark> mdi-email-outline </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>EMAIL</v-list-item-title>

                <v-list-item-subtitle>
                  THEARTOFTRAVEL@GMAIL.COM
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon class="elevation-4" dark> mdi-map-marker </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>ADDRESS</v-list-item-title>

                <v-list-item-subtitle>
                  1234 WORLD DR. HERE, TX 76123
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar color="primary">
                  <v-icon class="elevation-4" dark> mdi-phone </v-icon>
                </v-list-item-avatar>

                <v-list-item-title>PHONE</v-list-item-title>

                <v-list-item-subtitle> 555-789-1234 </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </base-card>
  </v-container>
</template>

<script>
export default {
  name: "HomeSubscribe",
      data: () => ({
      items: [
        {
          href: '#!',
          icon: 'mdi-instagram',
        },
        {
          href: '#!',
          icon: 'mdi-facebook',
        },
      ],
    }),

};
</script>
