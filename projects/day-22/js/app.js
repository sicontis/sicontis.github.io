new Vue ({

    el: '#app',

    data: {
        tips: []
    },

    methods: {
        fetchTips() {
            return axios.get('data.json')
                .then(resp => {
                    //console.log(response.data[0]);
                    this.tips = resp.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
                
        }
    },

    created() {
        this.fetchTips();   
    }

});