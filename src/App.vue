<template>
  <div class="scroll-wrap">
    <div class="page-container">
      <router-view class="content"/>
    </div>
  </div>
</template>

<script>
export default{
  name: 'App',
};
</script>

<style lang="scss">
.scroll-wrap {
  height: 100%;
  overflow-y: auto;

  .page-container {
    min-width: 750px;
    width: 60%;
    margin: 0 auto;
    
    .content {
      padding-top: 50px;

      > {
        h3 {
          margin: 55px 0 20px;
        }

        table {
          border-collapse: collapse;
          width: 100%;
          background-color: #fff;
          font-size: 14px;
          margin-bottom: 45px;
          line-height: 1.5em;

          strong {
            font-weight: normal;
          }

          td, th {
            border-bottom: 1px solid #dcdfe6;
            padding: 15px;
            max-width: 250px;
          }

          th {
            text-align: left;
            white-space: nowrap;
            color: #909399;
            font-weight: normal;
          }

          td {
            color: #606266;
          }

          th:first-child, td:first-child {
            padding-left: 10px;
          }
        }

        ul:not(.timeline) {
          margin: 10px 0;
          padding: 0 0 0 20px;
          font-size: 14px;
          color: #5e6d82;
          line-height: 2em;
        }
      }
    }
  }
}


</style>
