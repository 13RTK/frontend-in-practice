const app = {
    data() {
        return {
            username: "",
            password: "",
            fileList: [],
            imageURL: "",
        };
    },

    methods: {
        onFileChange(event) {
            this.fileList.push(event.target.files[0]);
        },

        getImageURL(file) {
            return URL.createObjectURL(file);
        },

        deleteImage(idx) {
            this.fileList.splice(idx, 1);
        },
    },
};

Vue.createApp(app).mount("#app");
