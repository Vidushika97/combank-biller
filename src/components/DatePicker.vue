<template>
  <div class="columns">
    <div class="column is-two-fifths statics-details">Statistics Details</div>
    <div class="column is-one-fifth"> <section>
        <b-field>
            <b-datepicker
                ref="datepicker"
                expanded
                placeholder="Select a date">
            </b-datepicker>
            <b-button
                @click="$refs.datepicker.toggle()"
                icon-left="calendar-today"
                type="is-primary" />
        </b-field>
    </section></div>
    <div class="column is-one-fifth"> <section>
        <b-field>
            <b-datepicker
                ref="datepicker"
                expanded
                placeholder="Select a date">
            </b-datepicker>
            <b-button
                @click="$refs.datepicker.toggle()"
                icon-left="calendar-today"
                type="is-primary" />
        </b-field>
    </section></div>
    <div class="column">
        <b-button type="is-dark">Search</b-button>
    </div>
    <div class="column">
      <b-button type="$colors:#333333A3" icon-right="delete" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.statics-details{
font-family: Poppins;
font-weight: 700;
font-size:26px;
line-height: 39px;
color: #BAC1D2;
margin-left:50px;
}
</style>
