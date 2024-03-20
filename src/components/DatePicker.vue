<template>
  <div class="columns">
    <div class="column is-two-fifths statics-details">Statistics Details</div>
    <div class="column is-one-fifth">
      <section>
        <b-field>
          <b-datepicker ref="datepicker1" placeholder="From" icon="calendar">
          </b-datepicker>

          <b-button class="calendar-btn" @click="$refs.datepicker1.toggle()"
            ><span class="material-symbols-outlined">
              calendar_month
            </span></b-button
          >
        </b-field>
      </section>
    </div>
    <div class="column is-one-fifth">
      <section>
        <b-field>
          <b-datepicker ref="datepicker" placeholder="To"> </b-datepicker>
          <b-button class="calendar-btn" @click="$refs.datepicker.toggle()"
            ><span class="material-symbols-outlined">
              calendar_month
            </span></b-button
          >
        </b-field>
      </section>
    </div>
    <div class="column">
      <b-button type="is-dark">Search</b-button>
    </div>
    <div class="column">
      <b-button type="$colors:#333333A3"
        ><span class="material-symbols-outlined"> refresh </span></b-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.statics-details {
  font-family: Poppins;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: #bac1d2;
  margin-left: 50px;
}

.calendar-btn{
border-left: none;
border-top-left-radius: 0px;
border-bottom-left-radius: 0px;
}
</style>
