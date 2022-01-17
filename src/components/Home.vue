<template>
  <div>
    <div class="wrapper">
      <div class="bg">
        <img src="../assets/img/pattern-bg.png" alt="bg-img" />
      </div>
      <div class="container">
        <div class="container__box">
          <h1>IP Address Tracker</h1>
          <div class="input-data">
            <input type="text" />
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path
                  fill="none"
                  stroke="#FFF"
                  stroke-width="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            </button>
          </div>
          <div class="info">
            <div class="ip-address">
              <h5>ip address</h5>
              <h3>192.212.174.101</h3>
            </div>
            <div class="location">
              <h5>location</h5>
              <h3>brooklyn, NY 10001</h3>
            </div>
            <div class="timezone">
              <h5>timezone</h5>
              <h3>utc-05:00</h3>
            </div>
            <div class="isp">
              <h5>isp</h5>
              <h3>spaceX Starlink</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="map">
        <div class="map__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="56">
            <path
              fill-rule="evenodd"
              d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  .bg {
    img {
      width: 100%;
    }
  }
  .container {
    display: grid;
    place-items: center;
    position: absolute;
    width: 100%;
    top: 5%;
    left: 40%;
    transform: translate(-40%, -5%);
    &__box {
      display: grid;
      gap: 2rem;

      width: 40%;
    }
    h1 {
      color: $white;
      font-weight: 500;
      margin: 0;
      text-align: center;
    }
    .input-data {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      input {
        padding: 1rem 2rem;
        width: 100%;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        border: none;
        &:hover {
          cursor: pointer;
        }
      }
      button {
        width: 3rem;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
        border: none;
        background-color: $darkGray;
        &:hover {
          opacity: .85;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
