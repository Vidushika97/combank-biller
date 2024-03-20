<template>
  <div class="columns is mobile dashboard-container">
    <div class="column is-four-fifths left-container">Dashboard</div>
    <div class="column right-container">
      <div class="columns is mobile">
        <div class="column is is-one-quarter notification-container">
          <span class="material-symbols-outlined"> notifications </span>
          <div class="vertical-line"></div>
        </div>
        <div class="column is-half user-name">
          <p class="first-name">{{ username1 }}</p>
          <p class="last-name">{{ username2 }}</p>
        </div>
        <div class="column is-one-quarter logoff-icon">
          <span class="material-symbols-outlined"> power_settings_new </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username1: "Vidushika",
      username2: "Neranjani",
    };
  },
};
</script>

<style scoped>
.dashboard-container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  width: 1590px;
  height: 80px;
  color: #07205d;
  box-shadow: 0.2px 0.2px 3px 3px rgba(204, 204, 204, 0.25);
}
.left-container {
  margin-left: 20px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 20px;
}
.right-container {
  margin-right: 20px;
}
.user-name {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  align-items: center;
}
.first-name {
  margin-left: 15px;
}
.last-name {
  margin-left: 15px;
}

.notification-container {
  position: relative;
  display: flex;
  align-items: center;
}
.vertical-line {
  border-left: 1px solid #bac1d2;
  height: 36px;
  position: absolute;
  justify-content: center;
  margin-left: 50px;
}
.logoff-icon {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
