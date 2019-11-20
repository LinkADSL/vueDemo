<template>
  <div class="MedicalExaminations">
    <a-row style="margin: 0 -12px">

      <a-card title="按编号查找体检表" style="margin-bottom: 24px" :bordered="false" :body-style="{padding: 0}">
        <div >
          <a-col  :xl="8" :lg="8" :md="8" :sm="8" :xs="8"/>
          <a-col  :xl="8" :lg="8" :md="8" :sm="8" :xs="8">
            <a-input-search placeholder="example:00000000" @search="onSearch" size="large">
              <a-button slot="enterButton">
                search!
              </a-button>
            </a-input-search>
          </a-col>
          <a-col  :xl="8" :lg="8" :md="8" :sm="8" :xs="8"/>
        </div>
      </a-card>
    </a-row>

    <a-row style="margin: 0 -12px">
      <a-card title="表单" style="margin-bottom: 24px" :bordered="true" :body-style="{padding: 0}">
        <div style="min-height: 400px;">
          <MedicalTable/>
        </div>
      </a-card>
    </a-row>
  </div>
</template>

<script>
import MedicalTable from './MedicalTable'

export default {
  name: 'MedicalExaminations',
  components: {MedicalTable},
  data () {
    return {
      name: '', // 姓名
      number: ''// 编号
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
