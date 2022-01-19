<template>
  <div class="info">
    <div class="ip-address">
      <h5>ip address</h5>
      <h3>{{ ipDetails.address }}</h3>
    </div>
    <div class="location">
      <h5>location</h5>
      <h3>{{ ipDetails.state }}</h3>
    </div>
    <div class="timezone">
      <h5>timezone</h5>
      <h3>{{ ipDetails.timezone }}</h3>
    </div>
    <div class="isp">
      <h5>isp</h5>
      <h3>{{ ipDetails.isp }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["ipDetails"],
};
</script>

<style lang="scss" scoped>
.info {
  background-color: $white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7.5rem;
  border-radius: 0.8rem;
  padding: 2rem;
  margin-top: 0.7rem;
  h5 {
    text-transform: uppercase;
    color: $lightGray;
    letter-spacing: 0.1rem;
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 0.65rem;
  }
  h3 {
    text-transform: capitalize;
    font-weight: 700;
    color: $darkGray;
    max-width: 70%;
    margin: 0;
  }
  div:not(:first-child)::before {
    content: " ";
    width: 1px;
    height: 4rem;
    background-color: $lightGray;
    position: absolute;
    margin: 0;
    margin-left: -1.5rem;
    margin-top: 0.5rem;
    opacity: 0.3;
  }
}

@media only screen and (max-width: 1024px) {
  .info {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-content: start;
    width: 100%;
    gap: 3.5rem;
    padding: 2.5rem 1.5rem;
    h5 {
      font-size: 1rem;
      text-align: center;
      max-width: 100%;
    }
    h3 {
      font-size: 2rem;
      text-align: center;
      max-width: 100%;
    }
    div:not(:first-child)::before {
      opacity: 0;
    }
  }
}

@media only screen and (max-width: 414px) {
  .info {
    margin-top: 0rem;
    gap: 1.5rem;
    padding: 1.5rem;
    h5 {
      font-size: 0.6rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
}
</style>