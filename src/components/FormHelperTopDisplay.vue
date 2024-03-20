<template>
  <div>
    <div class="form-header">
      <h6>{{ headerText }}</h6>
    </div>
    <div
      class="form-container"
      :style="containerStyle"
      @click="toggleHeaderStyle"
    >
      <div class="award-image">
        <img src="../assets/award_icon.png" />
      </div>
      <form>
        <div class="columns form-fields">
          <div class="column channel-icon">
            <img src="../assets/youtube_icon.png" class="youtube-icon" />
            <p class="tran-type">{{ tranType }}</p>
          </div>
          <div class="column transaction-field">
            <p class="tran-name">Transactions</p>
            <div class="vertical-line"></div>
            <p class="tran-amount">{{ tranAmount }}</p>
          </div>
          <div class="column is-two-fifths sum-field">
            <p class="amount-name">Total sum(LKR)</p>
            <p class="total-amount">{{ totalAmount }}</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormHelperTopDisplay",
  props: {
    color: String,
    headerText: String,
    tranType: String,
    tranAmount: Number,
    totalAmount: Number,
  },
  data() {
    return {
      isHeaderHighlighted: false,
    };
  },
  computed: {
    containerStyle() {
      return {
        backgroundColor: this.isHeaderHighlighted ? this.color : "#E8EAEF",
        position: "relative",
        boxShadow: "0.2px 0.2px 3px 3px rgba(204, 204, 204, 0.25)",
        borderRadius: "19.46px",
        height: "145px",
        width: "531px",
        marginTop: "15px",
        marginLeft: "26px",
        justifyItems: "center",
      };
    },
  },
  methods: {
    toggleHeaderStyle() {
      this.isHeaderHighlighted = !this.isHeaderHighlighted;
    },
  },
};
</script>

<style scoped>
.form-container {
  background-color: white;
}

.award-image {
  position: absolute;
  top: -20px;
  left: -5px;
  z-index: 1;
  height: 52px;
  width: 52px;
  box-shadow: 1px;
}

.form-fields {
  margin-left: 88px;
  gap: 37px;
  width: 355px;
  height: 87px;
}

.channel-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 70px;
  margin-top: 26px;
}

.transaction-field {
  margin-top: 26px;
  position: relative;
}

.tran-type {
  font-family: poppins;
  font-weight: 700;
  font-size: 20px;
  color: #07205d;
  line-height: 32px;
  letter-spacing: -2%;
}

.vertical-line {
  border-left: 1px solid #bac1d2;
  height: 36px;
  margin-left: 130px;
  margin-bottom: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.tran-name {
  font-family: poppins;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2%;
  color: #757575;
}

.amount-name {
  font-family: poppins;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2%;
  color: #757575;
}

.sum-field {
  margin-top: 26px;
  width: 42%;
}

.tran-amount {
  font-family: poppins;
  font-weight: 700;
  font-size: 24px;
  color: #07205d;
  text-align: center;
}

.total-amount {
  font-family: poppins;
  font-weight: 700;
  font-size: 24px;
  color: #07205d;
  text-align: center;
}

.form-header {
  font-family: poppins;
  color: #000000;
  margin-left: 70px;
}

h6 {
  font-family: poppins;
  font-size: 15px;
  font-weight: 700;
}
</style>
