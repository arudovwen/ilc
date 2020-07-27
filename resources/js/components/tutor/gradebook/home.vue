<template>
    <div>
        
        <b-container>
            <b-row>
                <b-col>
                    <b-table>
                        
                    </b-table>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items:[]
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
      let tutor = JSON.parse(localStorage.getItem("typeTutor"));
      axios
        .get(`/api/assessment-result`, {
          headers: { Authorization: `Bearer ${tutor.access_token}` },
        })
        .then((res) => {
            if (res.status == 200) {
                this.items = res.data.data
            }
        });
    },
    },
}
</script>
<style scoped>

</style>