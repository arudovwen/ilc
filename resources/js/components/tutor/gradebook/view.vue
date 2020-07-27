<template>
    <div>
        
        <b-container>
            <b-row class="mb-4">
                Subject > Grades
            </b-row>
            <b-row>
                <b-col>
                    <b-table :fields="fields" responsive>
                        
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
            fields:[
                {key:'student_name',sortable:true},
                  {key:'overall_grade',sortable:true},
                 {key:'test_1',sortable:true},
                  {key:'test_2',sortable:true},
                 
                  
                  {key:'quiz_1',sortable:true},
                   {key:'quiz_2',sortable:true},
                   
                   {key:'assignment_1',sortable:true},
                    {key:'assignment_2',sortable:true},
                   
                    {key:'Examination',sortable:true},
            ]
        }
    },
}
</script>
<style scoped>

</style>