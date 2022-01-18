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
            <input
              type="text"
              placeholder="Search for any IP address or domain"
            />
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
              <h3>UTC-05:00</h3>
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
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      flex-shrink: 0;
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }
  .container {
    display: grid;
    place-items: center;
    position: absolute;
    width: 100%;
    top: 3%;
    left: 40%;
    transform: translate(-40%, -5%);
    &__box {
      display: grid;
      justify-items: center;
      gap: 1.5rem;
      width: 76%;
      h1 {
        color: $white;
        font-size: 1.8rem;
        font-weight: 500;
        margin: 0;
        text-align: center;
        line-height: 1;
      }
      .input-data {
        width: 70%;
        max-width: 31rem;
        display: flex;
        flex-wrap: nowrap;
        input {
          font-size: 1.3rem;
          padding: .8rem 1.5rem;
          width: 100%;
          border-top-left-radius: .8rem;
          border-bottom-left-radius: .8rem;
          border: none;
          &:hover {
            cursor: pointer;
          }
        }
        input,
        input::-webkit-input-placeholder {
          font-size: 0.9rem;
          line-height: 1;
          color: $lightGray;
          font-weight: 500;
        }
        button {
          padding: 1rem 1.2rem;
          border-top-right-radius: .8rem;
          border-bottom-right-radius: .8rem;
          border: none;
          background-color: $darkGray;
          &:hover {
            opacity: 0.85;
            cursor: pointer;
          }
        }
      }
      .info {
        background-color: $white;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        border-radius: .8rem;
        padding: 2rem;
        margin-top: .7rem;
        width: 100%;
        max-width: 62rem;
        h5 {
          text-transform: uppercase;
          color: $lightGray;
          letter-spacing: 0.1rem;
          margin: 0;
          margin-bottom: .5rem;
          font-size: .65rem;

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
          margin-top: .5rem;
          opacity: 0.3;
        }
      }
    }
  }
  .map {
    background-color: red;
    width: 100%;
    height: 70%;
  }
}
</style>
