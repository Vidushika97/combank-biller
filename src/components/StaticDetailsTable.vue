<template>
  <section class="section-container">
    <div class="section-wrapper">
      <div class="header-column">
        <div class="wrapper-column">
          <div class="flex-container">
            <div>
              <img src="../assets/youtube_round.png" />
            </div>
            <div class="header-one">
              <p>Transactions Overview</p>
              <h2>channels</h2>
            </div>
          </div>
          <div class="selection-box">
           <b-field>
            <b-select placeholder="All Channels" expanded>
                <option value="flint">Flint</option>
                <option value="silver">Silver</option>
            </b-select>
        </b-field>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column column-one">
          <span>All Transactions</span>
          <h6>28</h6>
        </div>
        <div class="column column-two">
          <span>LKR</span>
          <h6>280,000,000,000</h6>
        </div>
      </div>
      <div class="legend-seperator"></div>
      <div class="columns">
        <div class="column column-one">
          <span>Successful</span>
          <h6>643</h6>
        </div>
        <div class="column column-two">
          <span>LKR</span>
          <h6>280,000,000</h6>
        </div>
      </div>
      <div class="columns">
        <div class="column column-one">
          <span>Pending</span>
          <h6>28</h6>
        </div>
        <div class="column column-two">
          <span>LKR</span>
          <h6>280,000,000</h6>
        </div>
      </div>
      <div class="columns">
        <div class="column column-one">
          <span>Failed</span>
          <h6>28</h6>
        </div>
        <div class="column column-two">
          <span>LKR</span>
          <h6>280,000,000</h6>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>

<style scoped>
.section-container {
  max-width: 700px;
  background-color: #F9FAFB;
  border-radius: 19.46px;
}
.wrapper-column {
  display: flex;
  
}

.wrapper-column .flex-container {
  display: flex;
  gap: 6px;
  margin:20px 5px 5px 30px;
}
.header-one p{
    font-family: poppins;
    font-weight: 500;
    font-size: 15px;
    color:#757575
}
.header-one h2{
    font-family: poppins;
    font-weight: 700;
    font-size: 20px;
    color:#1B2559 
}
.selection-box{
  margin-left: 220px;
  margin-top: 20px;
  width:176px;
  height:40px
    

}

.columns {
  display: flex;
  justify-content: space-between;
  margin-left:20px;
  padding: 10px;
}
.column-two{
  text-align: right;
}
.column-one span{
font-family: poppins;
font-weight: 500;
font-size: 16px;
color:#757575
}
.column-two span{
font-family: poppins;
font-weight: 500;
font-size: 16px;
color:#757575
}
.column-one h6{
font-family: poppins;
font-weight: 700;
font-size: 24px;
color:#1B2559
}
.column-two h6{
font-family: poppins;
font-weight: 700;
font-size: 24px;
color:#1B2559   
}
.legend-separator {
  margin-top: 20px;
  margin-bottom: 20px;
  border-top: 1px solid #ccc;
  width: 100%;
}

</style>
