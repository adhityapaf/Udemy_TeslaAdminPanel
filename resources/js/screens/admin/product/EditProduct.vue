<template>
  <v-container>
    <v-form ref="form">
      <v-text-field
        :counter="35"
        label="Name"
        required
        dark
        v-model="name"
      ></v-text-field>

      <v-textarea
        dark
        name="Description"
        label="Enter Description..."
        v-model="description"
      ></v-textarea>

      <v-text-field label="Price" required dark v-model="price"></v-text-field>

      <v-row class="mb-2">
        <font-awesome-icon
          icon="camera"
          class="white--text mt-4 ml-2"
          style="font-size: 30px; margin-right: -20px"
        />
        <v-file-input
          label="Image"
          show-size
          dark
          v-model="image"
        ></v-file-input>
      </v-row>

      <v-btn color="success" class="mr-4" v-on:click="submitForm()">
        Submit
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
    props: ["product"],
  data: function () {
    return {
      name: this.product.name,
      price: this.product.price,
      image: null,
      description: this.product.description,
    };
  },
  methods: {
    submitForm() {
      const FormData = require("form-data");
      const formData = new FormData();
      this.name && formData.append("name", this.name);
      this.price && formData.append("price", this.price);
      this.description && formData.append("description", this.description);
      this.image && formData.append("image", this.image);
      axios
        .post("http://127.0.0.1:8000/api/update/product/"+this.product.id, formData)
        .then((response) => {
          console.log(response.data);
          if (response.status >= 200 && response.status < 300) {
            this.$router.push("products");
          }
        });
    },
  },
};
</script>

<style>
</style>