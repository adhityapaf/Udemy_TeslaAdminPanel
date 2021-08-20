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

            <v-text-field
                label="Price"
                required
                dark
                v-model="price"
            ></v-text-field>

            <v-select
                v-model="category"
                return-object
                :items="categories"
                label="Category"
                item-text="name"
                dark
                outlined
            ></v-select>

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
  data: function () {
    return {
      name: "",
      price: "",
      image: null,
      description: "",
      categories: [],
      category: "",
    };
  },
  methods: {
    submitForm() {
      const FormData = require("form-data");
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("price", this.price);
      formData.append("description", this.description);
      formData.append("image", this.image);
      formData.append("category_id", this.category.id);
      axios.post("api/add/product", formData).then((response) => {
        console.log(response.data);
        if (response.status >= 200 && response.status < 300) {
          this.$router.push("products");
        }
      });
    },
    getCategories() {
      axios.get("api/categories").then((response) => {
        if (response.status >= 200 && response.status < 300) {
          var categoryArray = [];
          response.data.categories.map((category) => {
            categoryArray.push({ name: category.name, id: category.id });
          });
          this.categories = categoryArray;
        }
      });
    },
  },

  mounted() {
    this.getCategories();
  },
};
</script>


<style></style>
