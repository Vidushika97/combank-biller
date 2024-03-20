<template>
  <section class="section-container">
    <div class="section-wrapper">
      <div class="header-column">
        <div class="wrapper-column">
          <div class="flex-container">
            <div>
              <img :src="require(`../assets/${iconSrc}`)" />
            </div>
            <div class="header-one">
              <p>Transactions Overview</p>
              <h2>{{ type }}</h2>
            </div>
          </div>
          <div class="selection-box">
            <b-field>
              <b-select :placeholder="placeHolderValue" expanded>
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
          <h6>{{ transactionAmount }}</h6>
        </div>
        <div class="column column-two">
          <span>LKR</span>
          <h6>{{ transactionAmountValue }}</h6>
        </div>
      </div>
      <div class="horizontal-line"></div>
      <div class="columns">
        <div class="column column-one">
          <span>Successful</span>
          <h6>{{ successfulAmount }}</h6>
        </div>
        <div class="column column-two">
          <span>LKR</span>
          <h6>{{ successfulAmountValue }}</h6>
        </div>
      </div>
      <div class="horizontal-line"></div>
      <div class="columns">
        <div class="column column-one">
          <span>Pending</span>
          <h6>{{ pendingAmount }}</h6>
        </div>
        <div class="column column-two">
          <span>LKR</span>
          <h6>{{ pendingAmountValue }}</h6>
        </div>
      </div>
      <div class="horizontal-line"></div>
      <div class="columns">
        <div class="column column-one">
          <span>Failed</span>
          <h6>{{ failedAmount }}</h6>
        </div>
        <div class="column column-two">
          <span>LKR</span>
          <h6>{{ failedAmountValue }}</h6>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    successfulAmount: Number,
    transactionAmount: Number,
    transactionAmountValue: Number,
    successfulAmountValue: Number,
    pendingAmount: Number,
    pendingAmountValue: Number,
    failedAmount: Number,
    failedAmountValue: Number,
    type: String,
    iconSrc:String,
    placeHolderValue: String,
  },
  // data() {
  //   return {
  //     imageUrl: "",
  //   };
  // },
  // mounted() {
  //   this.imageUrl = this.iconSrc;
  // },
};
</script>

<style scoped>
.section-container {
  max-width: 700px;
  background-color: #f9fafb;
  border-radius: 19.46px;
}
.wrapper-column {
  display: flex;
}

.wrapper-column .flex-container {
  display: flex;
  gap: 6px;
  margin: 20px 5px 5px 30px;
}
.header-one p {
  font-family: poppins;
  font-weight: 500;
  font-size: 15px;
  color: #757575;
}
.header-one h2 {
  font-family: poppins;
  font-weight: 700;
  font-size: 20px;
  color: #1b2559;
}
.selection-box {
  margin-left: 220px;
  margin-top: 20px;
  width: 176px;
  height: 40px;
}

.columns {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
}
.column-two {
  text-align: right;
}
.column-one span {
  font-family: poppins;
  font-weight: 500;
  font-size: 16px;
  color: #757575;
}
.column-two span {
  font-family: poppins;
  font-weight: 500;
  font-size: 16px;
  color: #757575;
}
.column-one h6 {
  font-family: poppins;
  font-weight: 700;
  font-size: 24px;
  color: #1b2559;
}
.column-two h6 {
  font-family: poppins;
  font-weight: 700;
  font-size: 24px;
  color: #1b2559;
}
.horizontal-line {
  border-top: 1px solid #ccc;
  width: 92%;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 40px;
  text-justify: auto;
}
</style>
