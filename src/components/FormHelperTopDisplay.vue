<template>
  <div>
    <div class="form-header">
      <h6>Top channel</h6>
    </div>
    <div class="form-container">
      <div class="award-image">
        <img src="../assets/award_icon.png"/>
      </div>
      <form>
        <div class="columns form-fields">
          <div class="column channel-icon">
             <img src="../assets/youtube_icon.png" class="youtube-icon"/>
             <p class="tran-type">CDM</p>
          </div>
          <div class="column transaction-field">
           <p class="tran-name">Transactions</p>
           <div class="vertical-line"></div>
           <p class="tran-amount">28</p> 
          </div>
          <div class="column is-two-fifths sum-field">
            <p class="amount-name">Total sum(LKR)</p>
            <p class="total-amount">643</p>
          </div>
           <div class="vertical-line"></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form-container {
    position: relative; /* Needed for positioning the award image */
    background-color: #E8EAEF;
    border-radius: 19.46px;
    height: 145px;
    width: 531px;
    margin-top: 15px;
    margin-left: 26px;
    justify-items: center;
}

.award-image {
    position: absolute;
    top: -20px; /* Adjust as needed */
    left: -5px; /* Adjust as needed */
    z-index: 1;
    height: 52px;
    width: 52px;
    box-shadow: 1px;
}

.form-fields{
    margin-left:88px;
    gap:37px;
    width:355px;
    height:87px;
    
}
.channel-icon{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width:70px;
    margin-top: 26px;
}
.transaction-field{
  margin-top: 26px;
  position: relative;  
}
.tran-type{
    font-family: poppins;
    font-weight:700;
    font-size: 20px;
    color: #07205D;
    line-height: 32px;
    letter-spacing: -2%;
    
}
.vertical-line {
  border-left: 1px solid #BAC1D2;
  height: 36px;
  margin-left: 130px; 
  margin-bottom: 50px; 
  position: absolute; /* position it absolutely */
  top: 50%; /* align it vertically */
  transform: translateY(-50%); /* center it vertically */
}
.tran-name{
   font-family: poppins; 
   font-size: 16px;
   font-weight:500;
   letter-spacing: 2%;
   color: #757575;
}
.amount-name{
   font-family: poppins; 
   font-size: 16px;
   font-weight:500;
   letter-spacing: 2%;
   color: #757575;  
}
.sum-field{
    margin-top: 26px;
    width:42%
    
}

.tran-amount{
    font-family: poppins;
    font-weight:700;
    font-size:24px;
    color: #07205D;
    text-align: center; /* center text */
}
.total-amount{
    font-family: poppins;
    font-weight:700;
    font-size:24px;
    color: #07205D;
    text-align: center; /* center text */
}
.form-header{
    font-family: poppins;
    color: #000000; 
    margin-left: 70px; 
}
h6{
    font-family: poppins;
    font-size:15px;      
}

/* Additional style for the YouTube icon */
/* .youtube-icon {
    width:70px;
    height: auto; 
   
} */
</style>
